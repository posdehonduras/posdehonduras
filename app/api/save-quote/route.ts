import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase-admin"

export async function POST(request: Request) {
  try {
    const { name, email, phone, wantsMarketing } = await request.json()

    // Validamos que los datos esten llenos dentro del formulario
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Faltan datos requeridos" }, { status: 400 })
    }

    // Verificar si el correo ya existe en la tabla quote_emails 
    const { data: existingData, error: searchError } = await supabaseAdmin
      .from("quote_emails")
      .select("*")
      .eq("email", email)
      .maybeSingle()

    if (searchError) {
      console.error("Error al buscar correo existente:", searchError)
      return NextResponse.json({ error: "Error al verificar datos existentes" }, { status: 500 })
    }

    let quoteError = null

    // Si el correo ya existe, actualizar el registro con los nuevos datos de nombre y teléfono
    if (existingData) {
      const { error } = await supabaseAdmin.from("quote_emails").update({ name, phone }).eq("email", email)

      quoteError = error
    } else {
      // Si el correo no existe, crear un nuevo registro con los datos de la cotización
      const { error } = await supabaseAdmin.from("quote_emails").insert([{ name, email, phone }])

      quoteError = error
    }

    // Manejar errores de la tabla quote_emails
    if (quoteError) {
      console.error("Error al guardar en quote_emails:", quoteError)
      return NextResponse.json({ error: "Error al guardar datos de cotización" }, { status: 500 })
    }

    // Manejar la tabla de marketing
    if (wantsMarketing) {
      // Verificar si el correo ya existe en la tabla quote_emails_marketing
      const { data: existingMarketingData, error: searchMarketingError } = await supabaseAdmin
        .from("quote_emails_marketing")
        .select("*")
        .eq("email", email)
        .maybeSingle()

      if (searchMarketingError) {
        console.error("Error al buscar correo existente en marketing:", searchMarketingError)
        // No interrumpimos el flujo principal si hay un error en la tabla de marketing
      } else {
        let marketingError = null

        // Si el correo ya existe en marketing, actualizar el registro
        if (existingMarketingData) {
          const { error } = await supabaseAdmin
            .from("quote_emails_marketing")
            .update({ name, phone })
            .eq("email", email)

          marketingError = error
        } else {
          // Si el correo no existe en marketing, crear un nuevo registro
          const { error } = await supabaseAdmin.from("quote_emails_marketing").insert([{ name, email, phone }])

          marketingError = error
        }

        if (marketingError) {
          console.error("Error al guardar en quote_emails_marketing:", marketingError)
          // No interrumpimos el flujo principal
        }
      }
    } //else {
      // Si el usuario no quiere marketing pero antes sí quería, eliminamos su registro
      // de la tabla de marketing (opcional, comenta esta parte si no quieres este comportamiento)
      //const { error: deleteError } = await supabaseAdmin.from("quote_emails_marketing").delete().eq("email", email)

      //if (deleteError) {
       // console.error("Error al eliminar de quote_emails_marketing:", deleteError)
        // No interrumpimos el flujo principal
      //}
    //}

    // Si todo salió bien, retornamos éxito
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en la API de save-quote:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

