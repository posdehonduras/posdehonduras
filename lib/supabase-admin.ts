import { createClient } from "@supabase/supabase-js"

// Este archivo solo se ejecutará en el servidor
// Cliente con permisos de servicio para uso en el servidor
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_KEY || "",
)

