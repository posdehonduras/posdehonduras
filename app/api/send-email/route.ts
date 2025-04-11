import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { CartItem } from "@/types";

// Datos del formulario que llena el cliente
interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  departamento: string;
  direccion?: string;
}

// Datos que se envian en los correos
export async function POST(req: Request) {
  const {
    customerEmail,
    formData,
    cartItems,
    cartTotal,
  }: {
    customerEmail: string;
    formData: FormData;
    cartItems: CartItem[];
    cartTotal: number;
  } = await req.json();

  // Funcion para formatear numeros con comas para los miles
  const formatNumber = (num: number): string => {
    return num.toLocaleString("es-HN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Verificar que las variables de entorno necesarias estén definidas
  if (
    !process.env.EMAIL_SENDER ||
    !process.env.EMAIL_PASS ||
    !process.env.EMAIL_RECEIVER
  ) {
    console.error(
      "Faltan variables de entorno necesarias para el envío de correos"
    );
    return NextResponse.json(
      { error: "Error en la configuración del servidor de correo" },
      { status: 500 }
    );
  }

  // Configurar el transporter de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SENDER, // Correo que se usa SOLO para enviar
      pass: process.env.EMAIL_PASS,
    },
  }) as nodemailer.Transporter;

  // URL del logo
  const logoUrl =
    "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742655960/logo_potkbo.png";

  // Estilo comun para ambos correos
  const commonStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Poppins', Arial, sans-serif;
      line-height: 1.6;
      color: #1B1D32;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background-color: #1B1D32;
      padding: 20px;
      text-align: center;
      border-bottom: 3px solid #ed1b34;
    }
    .logo {
      max-width: 200px;
      height: auto;
    }
    .container {
      padding: 20px;
    }
    h1 {
      color: #ffffff;
      margin-top: 0;
    }
    h2 {
      color: #ed1b34;
      border-bottom: 1px solid #67686B;
      padding-bottom: 10px;
      margin-top: 30px;
    }
    .customer-info {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .customer-info p {
      margin: 5px 0;
    }
    .products-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .products-table th {
      background-color: #ed1b34;
      color: white;
      padding: 10px;
      text-align: left;
    }
    .products-table td {
      padding: 10px;
      border-bottom: 1px solid #67686B;
    }
    .totals {
      margin-top: 20px;
      text-align: right;
    }
    .totals p {
      margin: 5px 0;
    }
    .total-row {
      font-weight: bold;
      font-size: 1.3em;
      color: #ed1b34;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #67686B;
      text-align: center;
      font-size: 0.9em;
      color: #67686B;
    }
  `;

  // Generar filas de productos para la tabla
  const productRows = cartItems
    .map((item) => {
      // Verificar si el producto tiene precio
      if (item.price === undefined || item.price === null) {
        return `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>Consultar</td>
      </tr>
      `;
      }

      const priceDisplay =
        typeof item.price === "number"
          ? formatNumber(item.price)
          : item.price.trim().replace("$", "");

      return `
    <tr>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>L ${priceDisplay}</td>
    </tr>
    `;
    })
    .join("");

  // Correo para el administrador
  const adminMailOptions: nodemailer.SendMailOptions = {
    from: {
      name: process.env.EMAIL_FROM_NAME || "POS de Honduras",
      address: process.env.EMAIL_SENDER!,
    },
    to: process.env.EMAIL_RECEIVER, // Correo que RECIBE las cotizaciones (diferente al que envía)
    subject: "Nueva cotización recibida",
    html: `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nueva cotización recibida</title>
      <style>
        ${commonStyles}
      </style>
    </head>
    <body>
      <div class="header">
        <img src="${logoUrl}" alt="Logo de la empresa" class="logo">
        <h1>Nueva Cotización Recibida</h1>
      </div>
      
      <div class="container">
        <div class="customer-info">
          <h2>Información del Cliente</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Departamento:</strong> ${formData.departamento}</p>
          <p><strong>Dirección:</strong> ${
            formData.direccion || "No proporcionada"
          }</p>
        </div>
        
        <h2>Productos Cotizados</h2>
        <table class="products-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            ${productRows}
          </tbody>
        </table>
        
        ${
          cartTotal > 0
            ? `
        <div class="totals">
          <p class="total-row"><strong>Total:</strong> L ${formatNumber(
            cartTotal
          )}</p>
        </div>
        `
            : ""
        }
        
        <div class="footer">
          <p>Esta cotización fue generada automáticamente por el sistema de ventas.</p>
          <p>© ${new Date().getFullYear()} POS de Honduras. Todos los derechos reservados.</p>
        </div>
      </div>
    </body>
    </html>
    `,
  };

  // Correo para el cliente
  const customerMailOptions: nodemailer.SendMailOptions = {
    from: {
      name: process.env.EMAIL_FROM_NAME || "POS de Honduras",
      address: process.env.EMAIL_SENDER!,
    },
    to: customerEmail,
    subject: "Confirmación de cotización",
    html: `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de cotización</title>
    <style>
      ${commonStyles}
      .thank-you {
        font-size: 1.1em;
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 20px;
        border-left: 4px solid #ed1b34;
      }
      .contact-info {
        margin-top: 30px;
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 5px;
        text-align: center;
      }
      .tax-notice {
        font-size: 0.9em;
        color: #555;
        padding: 8px;
        margin: 10px 0;
        text-align: right;
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="${logoUrl}" alt="Logo de la POS de Honduras" class="logo">
      <h1>Confirmación de Cotización</h1>
    </div>
    
    <div class="container">
      <div class="thank-you">
        <p>Estimado(a) <strong>${formData.nombre}</strong>,</p>
        <p>Gracias por su cotización. Hemos recibido su solicitud y uno de nuestros representantes se pondrá en contacto con usted a la brevedad posible.</p>
      </div>
      
      <h2>Resumen de su Cotización</h2>
      <table class="products-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          ${productRows}
        </tbody>
      </table>
      
      <div class="tax-notice">
        <p>Nota: Todos los precios incluyen impuestos.</p>
      </div>
      
      ${
        cartTotal > 0
          ? `
      <div class="totals">
        <p class="total-row"><strong>Total:</strong> L ${formatNumber(
          cartTotal
        )}</p>
      </div>
      `
          : ""
      }
      
      <div class="contact-info">
        <h2>¿Necesita ayuda?</h2>
        <p>Si tiene alguna pregunta o requiere información adicional, no dude en contactarnos:</p>
        <p>Teléfono: +504 3163-2881</p>
        <p>Teléfono: 2564-6280</p>
        <p>Email: marketingdigital@posdehonduras.com</p>
      </div>
      
      <div class="footer">
        <p>Gracias por elegirnos. Esperamos poder servirle pronto.</p>
        <p>© ${new Date().getFullYear()} POS de Honduras. Todos los derechos reservados.</p>
      </div>
    </div>
  </body>
  </html>
  `,
  };

  try {
    // Enviar correos
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: "Correos enviados con éxito" });
  } catch (error) {
    console.error("Error al enviar los correos:", error);
    return NextResponse.json(
      { error: "Error al enviar los correos" },
      { status: 500 }
    );
  }
}
