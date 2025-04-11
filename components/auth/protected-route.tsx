"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Solo redirigir si no estamos cargando y no hay usuario
    if (!loading && !user) {
      router.push("/admin/login")
    }
  }, [user, loading, router])

  // Mostrar un indicador de carga mientras verificamos la autenticación
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // No renderizar nada si no hay usuario (evita parpadeos)
  if (!user) {
    return null
  }

  // Si hay usuario, renderizar los hijos
  return <>{children}</>
}