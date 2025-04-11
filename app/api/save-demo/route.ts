import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Cliente de Supabase para el servidor con permisos de servicio
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!

export async function POST(request: Request) {
  try {
    // Verificar las credenciales de Supabase
    console.log("URL de Supabase:", supabaseUrl)
    console.log("Clave de servicio disponible:", !!supabaseServiceKey)

    // Crear cliente de Supabase
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

    // Verificar conexión a Supabase
    try {
      const { data: healthCheck, error: healthError } = await supabaseAdmin.from("demo_emails").select("count").limit(1)
      if (healthError) {
        console.error("Error al verificar conexión con Supabase:", healthError)
        return NextResponse.json(
          { success: false, error: `Error de conexión con Supabase: ${healthError.message}` },
          { status: 500 },
        )
      }
      console.log("Conexión a Supabase exitosa, resultado:", healthCheck)
    } catch (healthCheckError) {
      console.error("Error al verificar conexión con Supabase:", healthCheckError)
      return NextResponse.json(
        { success: false, error: `Error de conexión con Supabase: ${healthCheckError}` },
        { status: 500 },
      )
    }

    // Obtener datos del formulario
    const data = await request.json()
    console.log("Datos recibidos en API save-demo:", data)

    const { nombre, correo, telefono, marketing } = data

    // Validar datos requeridos
    if (!nombre || !correo || !telefono) {
      console.error("Faltan datos requeridos para guardar en Supabase:", { nombre, correo, telefono })
      return NextResponse.json(
        { success: false, error: "Faltan datos requeridos para guardar en Supabase" },
        { status: 400 },
      )
    }

    console.log("Intentando guardar en Supabase:", { nombre, correo, telefono, marketing })

    // 1. Intentar insertar en la tabla principal de demos
    try {
      // Primero, verificar si el correo ya existe
      const { data: existingData, error: checkError } = await supabaseAdmin
        .from("demo_emails")
        .select("correo")
        .eq("correo", correo)
        .single()

      if (checkError && checkError.code !== "PGRST116") {
        // PGRST116 es "no se encontró ningún registro"
        console.error("Error al verificar si el correo existe:", checkError)
        return NextResponse.json(
          { success: false, error: `Error al verificar si el correo existe: ${checkError.message}` },
          { status: 500 },
        )
      }

      let result
      if (existingData) {
        // Si el correo ya existe, actualizar
        console.log("El correo ya existe, actualizando registro...")
        result = await supabaseAdmin.from("demo_emails").update({ nombre, telefono }).eq("correo", correo)
      } else {
        // Si el correo no existe, insertar
        console.log("El correo no existe, insertando nuevo registro...")
        result = await supabaseAdmin.from("demo_emails").insert([{ nombre, correo, telefono }])
      }

      if (result.error) {
        console.error("Error al guardar en demo_emails:", result.error)
        return NextResponse.json(
          { success: false, error: `Error al guardar datos en la tabla principal: ${result.error.message}` },
          { status: 500 },
        )
      }

      console.log("Datos guardados en demo_emails:", result.data)

      // 2. Manejar la tabla de marketing
      if (marketing) {
        // Verificar si el correo ya existe en marketing
        const { data: existingMarketingData, error: checkMarketingError } = await supabaseAdmin
          .from("demo_emails_marketing")
          .select("correo")
          .eq("correo", correo)
          .single()

        if (checkMarketingError && checkMarketingError.code !== "PGRST116") {
          console.error("Error al verificar si el correo existe en marketing:", checkMarketingError)
          // No interrumpimos el flujo principal
        }

        let marketingResult
        if (existingMarketingData) {
          // Si el correo ya existe en marketing, actualizar
          console.log("El correo ya existe en marketing, actualizando registro...")
          marketingResult = await supabaseAdmin
            .from("demo_emails_marketing")
            .update({ nombre, telefono })
            .eq("correo", correo)
        } else {
          // Si el correo no existe en marketing, insertar
          console.log("El correo no existe en marketing, insertando nuevo registro...")
          marketingResult = await supabaseAdmin.from("demo_emails_marketing").insert([{ nombre, correo, telefono }])
        }

        if (marketingResult.error) {
          console.error("Error al guardar en demo_emails_marketing:", marketingResult.error)
          // No interrumpimos el flujo principal
        } else {
          console.log("Datos guardados en demo_emails_marketing:", marketingResult.data)
        }
      } else {
        // Si no quiere marketing y ya existía en la tabla, eliminarlo
        console.log("No quiere marketing, verificando si existe para eliminar...")
        const { error: deleteError } = await supabaseAdmin.from("demo_emails_marketing").delete().eq("correo", correo)

        if (deleteError) {
          console.error("Error al eliminar de demo_emails_marketing:", deleteError)
          // No interrumpimos el flujo principal
        } else {
          console.log("Registro eliminado de demo_emails_marketing (si existía)")
        }
      }

      return NextResponse.json({ success: true, message: "Datos guardados correctamente" })
    } catch (supabaseError) {
      console.error("Error al interactuar con Supabase:", supabaseError)
      return NextResponse.json(
        { success: false, error: `Error al guardar datos en la base de datos: ${supabaseError}` },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general en la API save-demo:", error)
    return NextResponse.json({ success: false, error: `Error interno del servidor: ${error}` }, { status: 500 })
  }
}

