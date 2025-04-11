import { NextResponse } from "next/server"
import { sendEmail } from "@/utils/sendEmail"
import { supabaseAdmin } from "@/lib/superabase"

// Tipos para mejorar la seguridad de tipos
type AttachmentType = {
  filename: string
  content: Buffer
  contentType: string
  encoding: "base64"
}

// Tipos de archivo permitidos
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/zip",
  "application/x-zip-compressed",
  "text/plain",
]

// Tamaño máximo de archivo: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024

// Función para sanitizar el input
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remover < >
    .slice(0, 1000) // Limitar longitud
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // Extraer y validar campos requeridos
    const nombre = formData.get("nombre")?.toString()
    const email = formData.get("email")?.toString()
    const telefono = formData.get("telefono")?.toString()
    const departamento = formData.get("departamento")?.toString()
    const ciudad = formData.get("ciudad")?.toString()
    const tipoConsulta = formData.get("tipoConsulta")?.toString()
    const mensaje = formData.get("mensaje")?.toString()

    // Extraer el consentimiento de marketing
    const marketingConsent = formData.get("marketingConsent") === "true"

    // Validación de campos requeridos
    if (!nombre || !email || !telefono || !departamento || !ciudad || !tipoConsulta || !mensaje) {
      return NextResponse.json(
        {
          error: "Campos incompletos",
          message: "Por favor, completa todos los campos requeridos",
        },
        { status: 400 },
      )
    }

    // Sanitizar inputs
    const sanitizedData = {
      nombre: sanitizeInput(nombre),
      email: email.toLowerCase().trim(),
      telefono: sanitizeInput(telefono),
      departamento: sanitizeInput(departamento),
      ciudad: sanitizeInput(ciudad),
      tipoConsulta: sanitizeInput(tipoConsulta),
      mensaje: sanitizeInput(mensaje),
      marketingConsent: marketingConsent,
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        {
          error: "Email inválido",
          message: "Por favor, ingresa un correo electrónico válido",
        },
        { status: 400 },
      )
    }

    // Procesamiento de archivos adjuntos
    const attachments: AttachmentType[] = []
    let tieneArchivos = false

    // Buscar todos los archivos adjuntos en el formData
    for (const [key, value] of formData.entries()) {
      // Verificar si el campo es un archivo (tanto la imagen original como archivos múltiples)
      if ((key === "imagen" || key.startsWith("archivo_")) && value instanceof File) {
        const file = value as File
        
        // Saltar si el archivo está vacío
        if (file.size === 0) {
          continue
        }
        
        // Validar tipo de archivo
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
          return NextResponse.json(
            {
              error: "Tipo de archivo no permitido",
              message: "Por favor, sube archivos en los formatos permitidos",
            },
            { status: 400 },
          )
        }

        // Validar tamaño de archivo
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            {
              error: "Archivo muy grande",
              message: "Los archivos no deben superar los 5MB",
            },
            { status: 400 },
          )
        }

        // Convertir el archivo a Buffer y agregarlo a los adjuntos
        const buffer = Buffer.from(await file.arrayBuffer())
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
          encoding: "base64",
        })
        
        tieneArchivos = true
      }
    }

    // NUEVO: Guardar la solicitud en Supabase
    try {
      // 1. Guardar la solicitud de soporte
      const { error: supportError } = await supabaseAdmin.from("support_requests").insert({
        nombre: sanitizedData.nombre,
        email: sanitizedData.email,
        telefono: sanitizedData.telefono,
        departamento: sanitizedData.departamento,
        ciudad: sanitizedData.ciudad,
        tipo_consulta: sanitizedData.tipoConsulta,
        mensaje: sanitizedData.mensaje,
        tiene_imagen: tieneArchivos,
        marketing_consent: sanitizedData.marketingConsent,
        status: "pendiente",
      })

      if (supportError) {
        console.error("Error al guardar solicitud en base de datos:", supportError)
        // No devolvemos error para no interrumpir el flujo principal
      }

      // 2. Si dieron consentimiento para marketing, guardar en tabla separada
      if (sanitizedData.marketingConsent) {
        const { error: marketingError } = await supabaseAdmin.from("marketing_emails").upsert(
          {
            nombre: sanitizedData.nombre,
            email: sanitizedData.email,
            source: "formulario_soporte",
          },
          {
            onConflict: "email",
          },
        )

        if (marketingError) {
          console.error("Error al guardar email para marketing:", marketingError)
          // No devolvemos error para no interrumpir el flujo principal
        }
      }
    } catch (dbError) {
      console.error("Error de base de datos:", dbError)
      // No interrumpimos el flujo principal si hay error de base de datos
    }

    // Crear lista de archivos adjuntos para mostrar en el correo
    const archivosAdjuntosHtml = attachments.length > 0 
      ? `<p><strong>Archivos adjuntos:</strong></p>
         <ul style="list-style-type: none; padding: 0;">
           ${attachments.map(a => `<li style="padding: 3px 0;">• ${a.filename}</li>`).join('')}
         </ul>`
      : "";

    // HTML para el equipo de soporte
    const soporteHtml = `
  <div style="font-poppins-bold; max-width: 600px; margin: 0 auto; border: 1px solid  #1B1D32; border-radius: 10px; overflow: hidden;">
    <!-- Cabecera con logo -->
    <div style="background-color: #1B1D32; padding: 20px; text-align: center;">
      <img src="cid:companylogo" alt="Pos de Honduras Logo" style="max-height: 60px; margin-bottom: 10px;">
      <h1 style="color: white; margin: 0; padding-bottom: 10px;">
        Nueva Solicitud de Soporte
      </h1>
    </div>

    <div style="padding: 20px;">
      <p>Se ha recibido una nueva solicitud de soporte con los siguientes datos:</p>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1B1D32;">
        <h2 style="color: #1B1D32; margin-top: 0;">Detalles del Cliente</h2>
        <ul style="list-style-type: none; padding: 0;">
          <li style="padding: 5px 0;">• <strong>Nombre:</strong> ${sanitizedData.nombre}</li>
          <li style="padding: 5px 0;">• <strong>Correo:</strong> ${sanitizedData.email}</li>
          <li style="padding: 5px 0;">• <strong>Teléfono:</strong> ${sanitizedData.telefono}</li>
          <li style="padding: 5px 0;">• <strong>Departamento:</strong> ${sanitizedData.departamento}</li>
          <li style="padding: 5px 0;">• <strong>Ciudad:</strong> ${sanitizedData.ciudad}</li>
          <li style="padding: 5px 0;">• <strong>Consentimiento marketing:</strong> ${sanitizedData.marketingConsent ? "Sí" : "No"}</li>
        </ul>
      </div>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1B1D32;">
        <h2 style="color: #1B1D32; margin-top: 0;">Detalles de la Consulta</h2>
        <ul style="list-style-type: none; padding: 0;">
          <li style="padding: 5px 0;">• <strong>Tipo:</strong> ${sanitizedData.tipoConsulta}</li>
          <li style="padding: 5px 0;">• <strong>Mensaje:</strong></li>
        </ul>
        <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 5px;">${sanitizedData.mensaje}</p>
        ${archivosAdjuntosHtml}
      </div>

      <p style="color: #1B1D32; font-weight: bold;">
        Por favor, asignar esta solicitud al agente correspondiente según el tipo de consulta.
      </p>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #1B1D32;">
        <p style="margin: 0;">
          <strong>Fecha y hora de recepción:</strong> ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
    
    <!-- Pie de página -->
    <div style="background-color: #1B1D32; color: white; text-align: center; padding: 15px; font-size: 14px;">
      INTERNO: Este mensaje es solo para el equipo de soporte de Pos de Honduras.
    </div>
  </div>
`

    // HTML para el cliente
    const clienteHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ed1b34; border-radius: 10px; overflow: hidden;">
      <!-- Cabecera con logo -->
      <div style="background-color: #1B1D32; padding: 20px; text-align: center;">
        <img src="cid:companylogo" alt="Pos de Honduras Logo" style="max-height: 60px; margin-bottom: 10px;">
        <h1 style="color: white; margin: 0; padding-bottom: 10px;">
          Confirmación de Soporte
        </h1>
      </div>

    <div style="padding: 20px;">
      <p>Estimado/a ${sanitizedData.nombre},</p>

      <p>Gracias por contactar a nuestro equipo de soporte. Hemos recibido tu consulta correctamente.</p>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ed1b34;">
        <h2 style="color: #1B1D32; margin-top: 0;">Resumen de tu consulta</h2>
        <ul style="list-style-type: none; padding: 0;">
          <li style="padding: 5px 0;">• <strong>Nombre:</strong> ${sanitizedData.nombre}</li>
          <li style="padding: 5px 0;">• <strong>Correo:</strong> ${sanitizedData.email}</li>
          <li style="padding: 5px 0;">• <strong>Teléfono:</strong> ${sanitizedData.telefono}</li>
          <li style="padding: 5px 0;">• <strong>Departamento:</strong> ${sanitizedData.departamento}</li>
          <li style="padding: 5px 0;">• <strong>Ciudad:</strong> ${sanitizedData.ciudad}</li>
          <li style="padding: 5px 0;">• <strong>Tipo de consulta:</strong> ${sanitizedData.tipoConsulta}</li>
          <li style="padding: 5px 0;">• <strong>Mensaje:</strong> ${sanitizedData.mensaje}</li>
          ${attachments.length > 0 ? `<li style="padding: 5px 0;">• <strong>Archivos adjuntos:</strong> ${attachments.length} archivo(s)</li>` : ""}
        </ul>
      </div>

      <p>Nuestro equipo revisará tu caso y te responderá lo antes posible.<br>
      El tiempo de respuesta habitual es de 24-48 horas hábiles.</p>

      <p style="color: #ed1b34;"><strong>Importante:</strong> No contestar este correo, nos pondremos en contacto contigo.</p>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0;">Saludos cordiales,<br>
        <strong>Equipo de Soporte de Pos de Honduras</strong></p>
      </div>
    </div>
    
    <!-- Pie de página -->
    <div style="background-color: #ed1b34; color: white; text-align: center; padding: 15px; font-size: 14px;">
      © ${new Date().getFullYear()} Pos de Honduras. Todos los derechos reservados.
    </div>
  </div>
`
    // Enviar correos
    try {
      // Verificar que existe la variable de entorno
      if (!process.env.EMAIL_TO) {
        throw new Error("EMAIL_TO environment variable is not defined")
      }

      // Enviar correo al equipo de soporte
      await sendEmail({
        to: process.env.EMAIL_TO,
        subject: `Nueva consulta de soporte - ${sanitizedData.tipoConsulta}`,
        text: soporteHtml.replace(/<[^>]*>/g, ""), // Versión texto plano
        html: soporteHtml,
        attachments,
      })

      // Enviar correo al cliente
      await sendEmail({
        to: sanitizedData.email,
        subject: "Hemos recibido tu consulta de soporte",
        text: clienteHtml.replace(/<[^>]*>/g, ""), // Versión texto plano
        html: clienteHtml,
      })

      return NextResponse.json(
        {
          success: true,
          message: "Tu consulta ha sido enviada exitosamente",
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("Error al enviar los correos:", emailError)
      return NextResponse.json(
        {
          error: "Error de envío",
          message: "No se pudieron enviar los correos. Por favor, intenta nuevamente.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error procesando la solicitud:", error)
    return NextResponse.json(
      {
        error: "Error interno",
        message: "Hubo un problema al procesar tu solicitud. Por favor, intenta nuevamente.",
      },
      { status: 500 },
    )
  }
}
