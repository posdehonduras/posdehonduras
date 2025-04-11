import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    // Obtener datos del formulario
    const data = await request.json()
    const { tipoDemo, nombre, email, departamento, ciudad, telefono, mensaje } = data

    // Verificar variables de entorno
    const emailSender = process.env.DEMO_EMAIL_SENDER
    const emailReceiver = process.env.DEMO_EMAIL_RECEIVER
    const emailPass = process.env.DEMO_EMAIL_PASS
    const emailFromName = process.env.DEMO_EMAIL_FROM_NAME || "POS de Honduras"
    const logoUrl = process.env.COMPANY_LOGO_URL || "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742658452/logo-white_dqgvpy.png" // URL del logo de la empresa
    const supportEmail = process.env.SUPPORT_EMAIL || "ayuda@posdehonduras.com" // Email de soporte

    if (!emailSender || !emailReceiver || !emailPass) {
      console.error("Faltan variables de entorno para el envío de correos:", {
        emailSender: !!emailSender,
        emailReceiver: !!emailReceiver,
        emailPass: !!emailPass,
      })
      return NextResponse.json({ error: "Error de configuración del servidor de correo" }, { status: 500 })
    }

    // Verificar datos requeridos
    if (!tipoDemo || !nombre || !email || !departamento || !ciudad || !telefono || !mensaje) {
      console.error("Faltan datos requeridos para el envío de correo:", {
        tipoDemo: !!tipoDemo,
        nombre: !!nombre,
        email: !!email,
        departamento: !!departamento,
        ciudad: !!ciudad,
        telefono: !!telefono,
        mensaje: !!mensaje,
      })
      return NextResponse.json({ error: "Faltan datos requeridos para el envío de correo" }, { status: 400 })
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailSender,
        pass: emailPass,
      },
    })

    // Estilos CSS comunes para ambos correos
    const commonStyles = `
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      .header {
        background-color: #1B1D32;
        color: white;
        padding: 20px;
        text-align: center;
      }
      .header img {
        max-height: 60px;
        margin-bottom: 15px;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
      }
      .content {
        padding: 30px;
      }
      .info-block {
        background-color: #f9f9f9;
        border-left: 4px solid #1B1D32;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      .info-item {
        margin: 10px 0;
      }
      .info-label {
        font-weight: bold;
        color: #1B1D32;
      }
      .footer {
        text-align: center;
        padding: 20px;
        background-color: #f4f4f4;
        color: #666;
        font-size: 12px;
      }
      .support-email {
        display: inline-block;
        margin: 20px 0;
        font-weight: bold;
        color: #1B1D32;
      }
    `

    // Crear el contenido HTML para el correo del administrador
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva solicitud de Demo</title>
        <style>
          ${commonStyles}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${logoUrl}" alt="POS de Honduras Logo">
            <h1>Nueva Solicitud de Demo</h1>
          </div>
          <div class="content">
            <p>Se ha recibido una nueva solicitud de Demo con los siguientes detalles:</p>
            
            <div class="info-block">
              <div class="info-item">
                <span class="info-label">Tipo de demo:</span> ${tipoDemo}
              </div>
              <div class="info-item">
                <span class="info-label">Nombre:</span> ${nombre}
              </div>
              <div class="info-item">
                <span class="info-label">Correo:</span> <a href="mailto:${email}">${email}</a>
              </div>
              <div class="info-item">
                <span class="info-label">Departamento:</span> ${departamento}
              </div>
              <div class="info-item">
                <span class="info-label">Ciudad:</span> ${ciudad}
              </div>
              <div class="info-item">
                <span class="info-label">Teléfono:</span> <a href="tel:${telefono}">${telefono}</a>
              </div>
              <div class="info-item">
                <span class="info-label">Mensaje:</span>
                <p style="margin-top: 5px;">${mensaje}</p>
              </div>
            </div>
            
            <p>Por favor, contacte al cliente lo antes posible para coordinar la Demo.</p>
          </div>
          <div class="footer">
            <p>Este es un correo automático. Por favor no responda a este mensaje.</p>
            <p>&copy; ${new Date().getFullYear()} POS de Honduras. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Crear el contenido HTML para el correo del cliente
    const clientHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de solicitud de Demo</title>
        <style>
          ${commonStyles}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${logoUrl}" alt="POS de Honduras Logo">
            <h1>Confirmación de Solicitud</h1>
          </div>
          <div class="content">
            <p>Hola <strong>${nombre}</strong>,</p>
            <p>¡Gracias por tu interés en nuestros productos! Hemos recibido tu solicitud para una demo de <strong>${tipoDemo}</strong>.</p>
            
            <p>Nuestro equipo se pondrá en contacto contigo pronto para coordinar los detalles de la demo.</p>
            
            <div class="info-block">
              <p style="margin-top: 0;"><strong>Resumen de tu solicitud:</strong></p>
              <div class="info-item">
                <span class="info-label">Tipo de demo:</span> ${tipoDemo}
              </div>
              <div class="info-item">
                <span class="info-label">Departamento:</span> ${departamento}
              </div>
              <div class="info-item">
                <span class="info-label">Ciudad:</span> ${ciudad}
              </div>
              <div class="info-item">
                <span class="info-label">Mensaje:</span>
                <p style="margin-top: 5px;">${mensaje}</p>
              </div>
            </div>
            
            <p>Si tienes alguna pregunta adicional mientras tanto, no dudes en contactarnos:</p>
            
            <div style="text-align: center;">
              <a href="mailto:${supportEmail}" class="support-email">
                ${supportEmail}
              </a>
            </div>
            
            <p>Saludos cordiales,<br>
            <strong>Equipo de POS de Honduras</strong></p>
          </div>
          <div class="footer">
            <p>Este correo fue enviado porque solicitaste información sobre nuestros productos.</p>
            <p>&copy; ${new Date().getFullYear()} POS de Honduras. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `

    try {
      // Enviar correo al administrador
      const adminMailOptions = {
        from: {
          name: emailFromName,
          address: emailSender,
        },
        to: emailReceiver,
        subject: `Nueva solicitud de demo: ${tipoDemo} - ${nombre}`,
        html: adminHtmlContent,
      }

      await transporter.sendMail(adminMailOptions)

      // Enviar correo de confirmación al cliente
      const clientMailOptions = {
        from: {
          name: emailFromName,
          address: emailSender,
        },
        to: email,
        subject: `Confirmación: Solicitud de Demo de ${tipoDemo} - POS de Honduras`,
        html: clientHtmlContent,
      }

      await transporter.sendMail(clientMailOptions)

      return NextResponse.json({ success: true })
    } catch (emailError) {
      console.error("Error al enviar correos:", emailError)
      return NextResponse.json(
        { error: "Error al enviar correos. Por favor, intenta de nuevo más tarde." },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general en la API send-demo:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

