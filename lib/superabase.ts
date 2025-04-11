import { createClient } from "@supabase/supabase-js"

// Cliente para operaciones del lado del cliente (anon key)
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
)

// Cliente para operaciones del lado del servidor (service key)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_KEY || "",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
)

export const supabase = supabaseClient

