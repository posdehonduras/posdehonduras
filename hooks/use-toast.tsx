"use client"

import { useState, useEffect, useCallback } from "react"

type ToastVariant = "default" | "destructive" | "success"

interface ToastProps {
  title: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])

  const toast = useCallback(({ title, description, variant = "default", duration = 3000 }: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description, variant, duration }])

    return id
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1))
      }, toasts[0].duration)

      return () => clearTimeout(timer)
    }
  }, [toasts])

  const ToastContainer = () => {
    return (
      <div className="fixed bottom-0 right-0 p-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg max-w-md transform transition-all duration-300 ease-in-out translate-y-0 opacity-100 ${
              toast.variant === "destructive"
                ? "bg-red-600 text-white"
                : toast.variant === "success"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-900 border border-gray-200"
            }`}
            onClick={() => dismiss(toast.id)}
          >
            <div className="font-semibold">{toast.title}</div>
            {toast.description && <div className="text-sm mt-1">{toast.description}</div>}
          </div>
        ))}
      </div>
    )
  }

  return { toast, dismiss, ToastContainer }
}

