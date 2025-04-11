import { createClient } from "@supabase/supabase-js"

// Cliente para uso en el cliente (frontend)
// Solo usamos variables NEXT_PUBLIC_ que están disponibles en el cliente
export const supabase =
  typeof window !== "undefined"
    ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "")
    : null

// Función para guardar datos de cotización en Supabase a través de la API
export async function saveQuoteData(name: string, email: string, phone: string, wantsMarketing: boolean) {
  try {
    const response = await fetch("/api/save-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        wantsMarketing,
      }),
    })

    // Manejar errores de la API de cotización en el frontend (cliente)
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Error al guardar datos")
    }

    return { success: true }
  } catch (error) {
    console.error("Error al guardar datos en Supabase:", error)
    // No lanzamos el error para no interrumpir el flujo principal de cotización
    return { success: false, error }
  }
}

// Función para guardar datos de demo en Supabase a través de la API
export async function saveDemoData(name: string, email: string, phone: string, wantsMarketing: boolean) {
  try {
    const response = await fetch("/api/save-demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        wantsMarketing,
      }),
    })

    // Manejar errores de la API de demo en el frontend (cliente)
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Error al guardar datos de demo")
    }

    return { success: true }
  } catch (error) {
    console.error("Error al guardar datos de demo en Supabase:", error)
    // No lanzamos el error para no interrumpir el flujo principal
    return { success: false, error }
  }
}

