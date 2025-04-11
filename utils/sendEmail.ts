import nodemailer from "nodemailer"
import path from "path"
import fs from "fs"

// Definir tipos específicos para los adjuntos
type Attachment = {
  filename: string
  content?: Buffer | string
  path?: string
  contentType?: string
  encoding?: string
  size?: number
  cid?: string
}

// Interfaz para las opciones de correo
interface EmailOptions {
  to: string
  subject: string
  text: string
  html?: string
  attachments?: Attachment[]
}

// Actualizar la interfaz EmailResponse para aceptar false como valor posible
interface EmailResponse {
  success: boolean
  messageId: string
  preview?: string | false // Actualizado para aceptar false
  timestamp: string
}

// Validar formato de email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Rate limiting simple
const emailQueue = new Map<string, number>()
const RATE_LIMIT_WINDOW = 60000 // 1 minuto
const MAX_EMAILS_PER_WINDOW = 5

export const sendEmail = async ({
  to,
  subject,
  text,
  html,
  attachments = [],
}: EmailOptions): Promise<EmailResponse> => {
  // Validar email
  if (!isValidEmail(to)) {
    throw new Error("Invalid email address")
  }

  // Validar rate limiting
  const now = Date.now()
  const userEmails = emailQueue.get(to) || 0
  if (userEmails >= MAX_EMAILS_PER_WINDOW) {
    throw new Error("Rate limit exceeded. Please try again later.")
  }
  emailQueue.set(to, userEmails + 1)
  setTimeout(() => emailQueue.delete(to), RATE_LIMIT_WINDOW)

  // Validar variables de entorno requeridas
  const requiredEnvVars = ["EMAIL_HOST", "EMAIL_PORT", "EMAIL_USER_SUPPORT", "EMAIL_PASS_SUPPORT", "EMAIL_FROM"] as const

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`)
    }
  }

  // Validar attachments
  if (attachments.length > 0) {
    const MAX_TOTAL_SIZE = 10 * 1024 * 1024 // 10MB
    let totalSize = 0

    for (const attachment of attachments) {
      if (attachment.content instanceof Buffer) {
        totalSize += attachment.content.length
      } else if (typeof attachment.content === "string") {
        totalSize += Buffer.from(attachment.content).length
      }

      if (totalSize > MAX_TOTAL_SIZE) {
        throw new Error("Total attachments size exceeds 10MB limit")
      }
    }
  }

  // Crear el transportador con validación de tipo y opciones de seguridad mejoradas
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER_SUPPORT,
      pass: process.env.EMAIL_PASS_SUPPORT,
    },
    // Opciones adicionales de seguridad
    tls: {
      rejectUnauthorized: true, // Verificar certificado SSL
      minVersion: "TLSv1.2", // Usar versión mínima de TLS 1.2
    },
    // Timeouts
    connectionTimeout: 10000, // 10 segundos
    greetingTimeout: 5000, // 5 segundos
    socketTimeout: 10000, // 10 segundos
  })

  try {
    // Verificar conexión antes de enviar
    await transporter.verify()

    // Sanitizar el subject y text
    const sanitizedSubject = subject.trim()
    const sanitizedText = text.trim()

    // Agregar logo como adjunto con CID
    const logoAttachment = {
      filename: 'logo.png',
      path: path.join(process.cwd(), 'public', 'img', 'logo.png'),
      cid: 'companylogo'  // Este CID debe ser referenciado en el HTML como "cid:companylogo"
    }

    // Combinar el logo con otros adjuntos
    const allAttachments = [
      logoAttachment,
      ...attachments.map((attachment) => ({
        ...attachment,
        encoding: attachment.encoding || "base64", // Asegurar encoding correcto
      }))
    ]

    // Configurar opciones del correo
    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME || "Soporte Técnico Pos de Honduras",
        address: process.env.EMAIL_FROM!,
      },
      to,
      subject: sanitizedSubject,
      text: sanitizedText,
      html: html || sanitizedText.replace(/\n/g, "<br>"),
      attachments: allAttachments,
    }

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions)

    console.log("Correo enviado correctamente:", {
      messageId: info.messageId,
      to,
      subject: sanitizedSubject,
      timestamp: new Date().toISOString(),
    })

    // Obtener la URL de vista previa y manejar el caso false
    const previewUrl = nodemailer.getTestMessageUrl(info)

    return {
      success: true,
      messageId: info.messageId,
      preview: previewUrl, // Ahora es válido porque actualizamos el tipo en la interfaz
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    // Mejorar el manejo de errores específicos
    let errorMessage = "Error desconocido al enviar el correo"

    if (error instanceof Error) {
      // Manejar errores específicos de nodemailer
      if (error.message.includes("ECONNREFUSED")) {
        errorMessage = "No se pudo conectar al servidor de correo"
      } else if (error.message.includes("ETIMEDOUT")) {
        errorMessage = "Tiempo de espera agotado al intentar enviar el correo"
      } else if (error.message.includes("AUTH")) {
        errorMessage = "Error de autenticación con el servidor de correo"
      } else {
        errorMessage = error.message
      }
    }

    console.error("Error al enviar el correo:", {
      error: errorMessage,
      to,
      subject,
      timestamp: new Date().toISOString(),
    })

    throw new Error(`Error al enviar el correo: ${errorMessage}`)
  } finally {
    // Cerrar la conexión
    transporter.close()
  }
}
