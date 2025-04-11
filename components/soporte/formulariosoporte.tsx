"use client"

import type React from "react"
import {
  Camera,
  CheckCircle2,
  Loader2,
  XCircle,
  HelpCircle,
  PenToolIcon as Tool,
  ShoppingCart,
  X,
  FileText,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

type ToastType = {
  show: boolean
  type: "success" | "error"
  message: string //mensaje a mostrar en la notificacion
}

type FileWithPreview = {
  file: File
  preview: string
  id: string
}

export default function Soporte() {
  // estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    departamento: "",
    ciudad: "",
    tipoConsulta: "",
    mensaje: "",
    marketingConsent: false, // Nuevo campo para consentimiento de marketing
  })
  const [archivos, setArchivos] = useState<FileWithPreview[]>([]) // almacena múltiples archivos
  const [loading, setLoading] = useState(false) // controla el estado de carga durante el envio
  const [currentStep, setCurrentStep] = useState(1) // controla el paso actual del formlario
  const [toast, setToast] = useState<ToastType>({
    // estado para las notificaciones
    show: false,
    type: "success",
    message: "",
  })
  const [submissionDate, setSubmissionDate] = useState<string>("")
  const [submitted, setSubmitted] = useState(false)
  const totalSteps = 6
  const formContainerRef = useRef<HTMLDivElement>(null)

  // Efecto para limpiar el toast después de un tiempo
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (toast.show) {
      timeoutId = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }))
      }, 5000) // Mostrar por 5 segundos
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [toast.show])

  // Función para obtener el color según el tipo de consulta
  const getConsultaColor = () => {
    switch (formData.tipoConsulta) {
      case "consulta general":
        return "#1B1D32" // Azul
      case "problema equipo":
        return "#ef4444" // Rojo
      case "problema venta":
        return "#4D152C" // ocre
      default:
        return "#ed1b34" // Color por defecto
    }
  }

  // Función para obtener el icono según el tipo de consulta
  const getConsultaIcon = () => {
    switch (formData.tipoConsulta) {
      case "consulta general":
        return <HelpCircle className="w-5 h-5" />
      case "problema equipo":
        return <Tool className="w-5 h-5" />
      case "problema venta":
        return <ShoppingCart className="w-5 h-5" />
      default:
        return <HelpCircle className="w-5 h-5" />
    }
  }

  const showToast = (type: "success" | "error", message: string) => {
    // Primero ocultar el toast existente si hay uno
    setToast((prev) => ({ ...prev, show: false }))

    // Pequeño delay antes de mostrar el nuevo toast para asegurar la animación
    setTimeout(() => {
      setToast({
        show: true,
        type,
        message,
      })
    }, 100)
  }
  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.nombre.trim() !== "" && formData.email.trim() !== ""
      case 2:
        return formData.departamento !== "" && formData.ciudad.trim() !== "" && formData.telefono.trim() !== ""
      case 3:
        return formData.tipoConsulta !== ""
      case 4:
        return formData.mensaje.trim() !== ""
      default:
        return true
    }
  }

  // Nueva función para manejar el cambio en el checkbox de marketing
  const handleMarketingConsentChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, marketingConsent: checked }))
  }

  // Change the handleSubmit function to explicitly append each field to FormData:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep()) {
      showToast("error", "Por favor, completa todos los campos requeridos antes de enviar.")
      return
    }
    setLoading(true)
    showToast("success", "Enviando datos a soporte técnico. Por favor, espere...")

    // Generar fecha
    const currentDate = new Date().toLocaleString("es-HN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    setSubmissionDate(currentDate)

    //Prepara los datos para enviar al servidor
    const formDataToSend = new FormData()

    // Agregar cada campo de manera explícita
    formDataToSend.append("nombre", formData.nombre)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("telefono", formData.telefono)
    formDataToSend.append("departamento", formData.departamento)
    formDataToSend.append("ciudad", formData.ciudad)
    formDataToSend.append("tipoConsulta", formData.tipoConsulta)
    formDataToSend.append("mensaje", formData.mensaje)
    formDataToSend.append("marketingConsent", formData.marketingConsent ? "true" : "false")

    // Adjuntar múltiples archivos
    archivos.forEach((item, index) => {
      formDataToSend.append(`archivo_${index}`, item.file)
    })

    // ENVIAR DATOS AL ENDPOINT DE LA API
    try {
      const res = await fetch("/api/enviarSoporte", {
        method: "POST",
        body: formDataToSend,
      })

      const data = await res.json()

      if (res.ok) {
        showToast("success", data.message || "Tu consulta ha sido enviada correctamente")
        setSubmitted(true)
        // No reiniciar el formulario inmediatamente para mostrar el resumen
      } else {
        throw new Error(data.message || "Error al enviar")
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "No se pudo enviar tu consulta. Por favor, intenta de nuevo."
      showToast("error", errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // Add a function to validate email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Add a function to verify the form data
  const verifyFormData = () => {
    // Check email format
    if (!validateEmail(formData.email)) {
      showToast("error", "Por favor, ingresa un correo electrónico válido")
      return false
    }

    // Check other required fields
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.telefono ||
      !formData.departamento ||
      !formData.ciudad ||
      !formData.tipoConsulta ||
      !formData.mensaje
    ) {
      showToast("error", "Por favor, completa todos los campos requeridos")
      return false
    }

    showToast("success", "¡Datos verificados correctamente!")
    return true
  }

  // Función para reiniciar el formulario
  const resetForm = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      departamento: "",
      ciudad: "",
      tipoConsulta: "",
      mensaje: "",
      marketingConsent: false,
    })
    setArchivos([])
    setCurrentStep(1)
    setSubmissionDate("")
    setSubmitted(false)
  }

  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Manejar la carga de imágenes múltiples
  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    if (fileList && fileList.length > 0) {
      const newFiles: FileWithPreview[] = []

      Array.from(fileList).forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          showToast("error", `El archivo ${file.name} supera los 5MB`)
          return
        }

        newFiles.push({
          file,
          preview: URL.createObjectURL(file),
          id: Math.random().toString(36).substring(2, 9),
        })
      })

      setArchivos((prev) => [...prev, ...newFiles])
    }
  }

  // Eliminar un archivo
  const removeFile = (id: string) => {
    setArchivos((prev) => {
      const filtered = prev.filter((item) => item.id !== id)
      return filtered
    })
  }

  // Permitir arrastrar imágenes
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const fileList = e.dataTransfer.files

    if (fileList && fileList.length > 0) {
      const newFiles: FileWithPreview[] = []

      Array.from(fileList).forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          showToast("error", `El archivo ${file.name} supera los 5MB`)
          return
        }

        newFiles.push({
          file,
          preview: URL.createObjectURL(file),
          id: Math.random().toString(36).substring(2, 9),
        })
      })

      setArchivos((prev) => [...prev, ...newFiles])
    }
  }

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1)
        // hacer scroll al contenedor del formlario desspues de actualizar el estado
        setTimeout(() => {
          if (formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    } else {
      showToast("error", "Por favor, completa todos los campos requeridos antes de continuar.")
    }
  }

  //funcion para retroceder al paso anterior
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      // hacer scroll al contenedor del formulario despues de actualizar el  estado
      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white py-12 sm:py-12 md:py-12 lg:py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Titulo de la seccion*/}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-poppins-bold text-[#1B1D32] mb-2 transition-all duration-300 hover:scale-105">
          Centro de Soporte
        </h1>
        <p className="text-center text-2xl sm:text-3xl text-gray-600 mt-2 font-poppins-bold">
          Estamos aquí para ayudarte. Cuéntanos tu problema.
        </p>
      </div>
      {/* Componente de notificación Toast */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 left-4 sm:left-auto z-50 p-3 sm:p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out translate-y-0 max-w-xs sm:max-w-md ${
            toast.type === "success"
              ? "bg-green-100 border-l-4 border-green-500 text-green-800"
              : "bg-red-100 border-l-4 border-red-500 text-red-800"
          }`}
          role="alert"
        >
          <div className="flex items-center gap-2">
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            )}
            <p className="font-poppins-bold text-sm sm:text-base">{toast.message}</p>
          </div>
        </div>
      )}

      {/*contenedor principal del formulario */}
      <div
        className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border-2"
        style={{ borderColor: formData.tipoConsulta ? getConsultaColor() : "#ed1b34" }}
        ref={formContainerRef}
      >
        <div className="p-4 sm:p-6 md:p-8">
          {/* Logo encima del título - Usando texto en lugar de imagen */}
          <h1
            className="text-2xl sm:text-5xl text-center font-bold mb-2 transition-all duration-300 hover:scale-105"
            style={{ color: formData.tipoConsulta ? getConsultaColor() : "#ed1b34" }}
          >
            POS DE HONDURAS
          </h1>

          {/* Barra de progreso*/}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6">
            <div
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
                backgroundColor: formData.tipoConsulta ? getConsultaColor() : "#ed1b34",
              }}
            ></div>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 pt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Paso 1 : Informacion personal basica */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in slide-in-from-left">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="nombre" className="block text-sm font-poppins-bold text-[#1B1D32]">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    value={formData.nombre}
                    onChange={(e) => {
                      // Only allow letters and spaces
                      const value = e.target.value
                      if (/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]*$/.test(value) || value === "") {
                        handleChange(e)
                      }
                    }}
                    required
                    className={`w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all text-sm sm:text-base ${
                      formData.tipoConsulta === "consulta general"
                        ? "focus:ring-2 focus:ring-[#1B1D32] focus:border-[#1B1D32]"
                        : formData.tipoConsulta === "problema equipo"
                          ? "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                          : formData.tipoConsulta === "problema venta"
                            ? "focus:ring-2 focus:ring-[#4D152C] focus:border-[#4D152C]"
                            : "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                    }`}
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="email" className="block text-sm font-poppins-bold text-[#1B1D32]">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all text-sm sm:text-base ${
                      formData.tipoConsulta === "consulta general"
                        ? "focus:ring-2 focus:ring-[#1B1D32] focus:border-[#1B1D32]"
                        : formData.tipoConsulta === "problema equipo"
                          ? "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                          : formData.tipoConsulta === "problema venta"
                            ? "focus:ring-2 focus:ring-[#4D152C] focus:border-[#4D152C]"
                            : "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                    }`}
                  />
                </div>
              </div>
            )}

            {/*Paso 2 : Informacion de ubicacion y contacto */}
            {currentStep === 2 && (
              <div className="space-y-3 sm:space-y-4 animate-in slide-in-from-right">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="departamento" className="block text-sm font-poppins-bold text-[#1B1D32]">
                    Departamento
                  </label>
                  <select
                    id="departamento"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all text-sm sm:text-base ${
                      formData.tipoConsulta === "consulta general"
                        ? "focus:ring-2 focus:ring-[#1B1D32] focus:border-[#1B1D32]"
                        : formData.tipoConsulta === "problema equipo"
                          ? "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                          : formData.tipoConsulta === "problema venta"
                            ? "focus:ring-2 focus:ring-[#4D152C] focus:border-[[#4D152C]]"
                            : "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                    }`}
                  >
                    {/*Lista de departamento de Honduras */}
                    <option value="">Selecciona tu departamento</option>
                    <option value="Atlántida">Atlántida</option>
                    <option value="Choluteca">Choluteca</option>
                    <option value="Colón">Colón</option>
                    <option value="Comayagua">Comayagua</option>
                    <option value="Copán">Copán</option>
                    <option value="Cortés">Cortés</option>
                    <option value="El Paraíso">El Paraíso</option>
                    <option value="Francisco Morazán">Francisco Morazán</option>
                    <option value="Gracias a Dios">Gracias a Dios</option>
                    <option value="Intibucá">Intibucá</option>
                    <option value="Islas de la Bahía">Islas de la Bahía</option>
                    <option value="La Paz">La Paz</option>
                    <option value="Lempira">Lempira</option>
                    <option value="Ocotepeque">Ocotepeque</option>
                    <option value="Olancho">Olancho</option>
                    <option value="Santa Bárbara">Santa Bárbara</option>
                    <option value="Valle">Valle</option>
                    <option value="Yoro">Yoro</option>
                  </select>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="ciudad" className="block text-sm font-poppins-bold text-[#1B1D32]">
                    Ciudad
                  </label>
                  <input
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    placeholder="Ingresa tu ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all text-sm sm:text-base ${
                      formData.tipoConsulta === "consulta general"
                        ? "focus:ring-2 focus:ring-[#1B1D32] focus:border-[#1B1D32]"
                        : formData.tipoConsulta === "problema equipo"
                          ? "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                          : formData.tipoConsulta === "problema venta"
                            ? "focus:ring-2 focus:ring-[#4D152C] focus:border-[#4D152C]"
                            : "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                    }`}
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="telefono" className="block text-sm font-poppins-bold text-[#1B1D32]">
                    Número de teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Ej. 33863020"
                    value={formData.telefono}
                    onChange={(e) => {
                      // Solo permitir numero , signos mas y guiones
                      const value = e.target.value
                      if (/^[0-9+\-\s]*$/.test(value) || value === "") {
                        handleChange(e)
                      }
                    }}
                    required
                    className={`w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all text-sm sm:text-base ${
                      formData.tipoConsulta === "consulta general"
                        ? "focus:ring-2 focus:ring-[#1B1D32] focus:border-[#1B1D32]"
                        : formData.tipoConsulta === "problema equipo"
                          ? "focus:ring-2 focus:ring-[#ed1b34]  focus:border-[#ed1b34] "
                          : formData.tipoConsulta === "problema venta"
                            ? "focus:ring-2 focus:ring-[#4D152C] focus:border-[#4D152C]"
                            : "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                    }`}
                  />
                </div>
              </div>
            )}

            {/*Paso 3: Tipo de consulta */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in slide-in-from-right">
                <div className="space-y-2">
                  <label htmlFor="tipoConsulta" className="block text-sm font-poppins-bold text-[#1B1D32]">
                    Tipo de consulta
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        formData.tipoConsulta === "consulta general" ? "border-[#1B1D32] bg-blue-50" : "border-gray-300"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, tipoConsulta: "consulta general" }))}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="p-2 rounded-full bg-[#1B1D32]">
                          <HelpCircle className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-poppins-bold">Consulta General</span>
                      </div>
                    </div>

                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        formData.tipoConsulta === "problema equipo" ? "border-[#ed1b34] bg-red-50" : "border-gray-300"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, tipoConsulta: "problema equipo" }))}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="p-2 rounded-full bg-[#ed1b34]">
                          <Tool className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-poppins-bold">Problema con equipo</span>
                      </div>
                    </div>

                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        formData.tipoConsulta === "problema venta" ? "border-[#4D152C] bg-[#4D152C]/10" : "border-gray-300"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, tipoConsulta: "problema venta" }))}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="p-2 rounded-full bg-[#4D152C]">
                          <ShoppingCart className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-poppins-bold">Problema de venta</span>
                      </div>
                    </div>
                  </div>

                  {/* Mantenemos el select original pero oculto para compatibilidad */}
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleChange}
                    required
                    className="hidden"
                  >
                    <option value="">Selecciona el tipo de consulta</option>
                    <option value="consulta general">Consulta General</option>
                    <option value="problema equipo">Problema con el equipo</option>
                    <option value="problema venta">Problema de venta</option>
                  </select>
                </div>
              </div>
            )}

            {/*Paso 4: Descripcion del problema */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in slide-in-from-right">
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-sm font-poppins-bold text-[#1B1D32]">
                    Describe tu problema
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos los detalles de tu consulta..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition-all min-h-[150px] resize-y ${
                      formData.tipoConsulta === "consulta general"
                        ? "focus:ring-2 focus:ring-[#1B1D32] focus:border-[#1B1D32]"
                        : formData.tipoConsulta === "problema equipo"
                          ? "focus:ring-2 focus:ring-[#ed1b34]  focus:border-[#ed1b34] "
                          : formData.tipoConsulta === "problema venta"
                            ? "focus:ring-2 focus:ring-[#4D152C] focus:border-[#4D152C]"
                            : "focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
                    }`}
                  />
                </div>
              </div>
            )}

            {/*Paso 5 : Carga de imágenes (múltiples) */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-in slide-in-from-right">
                <div className="space-y-2">
                  <label className="block text-sm font-poppins-bold text-gray-700">Adjuntar archivos (opcional)</label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-3 sm:p-6 transition-all duration-200 ${
                      archivos.length > 0
                        ? `border-${formData.tipoConsulta ? getConsultaColor().replace("#", "") : "blue-500"} bg-${formData.tipoConsulta ? getConsultaColor().replace("#", "").split("").slice(0, 3).join("") : "blue"}-50`
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <div className="flex flex-col items-center gap-2 sm:gap-4">
                      {archivos.length > 0 ? (
                        <div className="w-full">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                            {archivos.map((item) => (
                              <div key={item.id} className="relative group">
                                <div className="relative h-24 w-full rounded-lg overflow-hidden border border-gray-200">
                                  <Image
                                    src={item.preview || "/placeholder.svg"}
                                    alt={item.file.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-lg"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removeFile(item.id)}
                                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-70 hover:opacity-100 transition-opacity"
                                  >
                                    <X className="w-4 h-4 text-red-500" />
                                  </button>
                                </div>
                                <p className="text-xs mt-1 truncate">{item.file.name}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-center">
                            <label
                              htmlFor="fileInput"
                              className="cursor-pointer px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors flex items-center gap-2"
                            >
                              <Camera className="w-4 h-4" />
                              Añadir más archivos
                            </label>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="p-3 sm:p-4 rounded-full bg-blue-100">
                            <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                          </div>
                          <div className="text-center">
                            <label
                              htmlFor="fileInput"
                              className="cursor-pointer text-blue-600 hover:text-blue-700 text-sm sm:text-base"
                            >
                              Haz clic para subir
                            </label>
                            <p className="text-xs sm:text-sm text-gray-500">o arrastra y suelta</p>
                            <p className="text-xs text-gray-400 mt-1 sm:mt-2">PNG, JPG, PDF (max. 5MB por archivo)</p>
                          </div>
                        </>
                      )}
                      <input
                        type="file"
                        id="fileInput"
                        accept="image/*,application/pdf"
                        onChange={handleFilesChange}
                        className="hidden"
                        multiple
                      />
                    </div>
                  </div>
                </div>

                {/* Checkbox de consentimiento para marketing */}
                <div className="flex items-center space-x-2 mt-6 border-t pt-4">
                  <CheckboxPrimitive.Root
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={handleMarketingConsentChange}
                    className="h-4 w-4 rounded border border-black focus:outline-none focus:ring-2 focus:ring-[#ed1b34] focus:ring-offset-2 data-[state=checked]:bg-[#ed1b34] data-[state=checked]:text-white"
                  >
                    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 1L3.5 6.5L1 4"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </CheckboxPrimitive.Indicator>
                  </CheckboxPrimitive.Root>
                  <label htmlFor="marketingConsent" className="text-sm text-[#1B1D32]">
                    Me gustaría recibir promociones y novedades por correo electrónico
                  </label>
                </div>
              </div>
            )}

            {/* Paso 6: Confirmación y envío - Diseño de ticket profesional */}
            {currentStep === 6 && (
              <div className="space-y-4 animate-in slide-in-from-right">
                {submitted ? (
                  <div className="bg-white rounded-lg border shadow-lg overflow-hidden">
                    {/* Encabezado del ticket */}
                    <div
                      className="p-4 text-center"
                      style={{ backgroundColor: formData.tipoConsulta ? getConsultaColor() : "#ed1b34" }}
                    >
                      <h3 className="text-xl font-bold text-white">Soporte Técnico</h3>
                    </div>

                    {/* Cuerpo del ticket - keep all the existing content here */}
                    <div className="p-5">
                      {/* Información del solicitante */}
                      <div className="mb-5">
                        <h4 className="text-lg font-poppins-bold mb-3 flex items-center gap-2">
                          <User className="w-5 h-5" />
                          Información del solicitante
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2">
                            <User className="w-4 h-4 mt-0.5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Nombre</p>
                              <p className="font-poppins-bold">{formData.nombre}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Mail className="w-4 h-4 mt-0.5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="font-poppins-bold">{formData.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Phone className="w-4 h-4 mt-0.5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Teléfono</p>
                              <p className="font-poppins-bold">{formData.telefono}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Ubicación</p>
                              <p className="font-poppins-bold">
                                {formData.ciudad}, {formData.departamento}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Detalles de la consulta */}
                      <div className="mb-5">
                        <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Detalles de la consulta
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md">
                            <div
                              className="p-1 rounded-full"
                              style={{
                                backgroundColor: formData.tipoConsulta ? getConsultaColor() + "20" : "#ed1b3420",
                              }}
                            >
                              {getConsultaIcon()}
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Tipo de consulta</p>
                              <p className="font-poppins-bold capitalize">{formData.tipoConsulta}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Mensaje</p>
                            <div className="bg-gray-50 p-3 rounded-md break-words whitespace-pre-wrap">
                              {formData.mensaje}
                            </div>
                          </div>
                          {archivos.length > 0 && (
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Archivos adjuntos ({archivos.length})</p>
                              <div className="flex flex-wrap gap-2">
                                {archivos.map((item) => (
                                  <div key={item.id} className="relative group w-16 h-16">
                                    <Image
                                      src={item.preview || "/placeholder.svg"}
                                      alt={item.file.name}
                                      fill
                                      style={{ objectFit: "cover" }}
                                      className="rounded-md border border-gray-200"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Información adicional */}
                      <div>
                        <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          Información adicional
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm text-gray-500">Fecha de envío</p>
                            <p className="font-poppins-bold">{submissionDate}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Recibir promociones</p>
                            <p className="font-poppins-bold">{formData.marketingConsent ? "Sí" : "No"}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pie del ticket */}
                    <div className="bg-gray-50 p-4 border-t">
                      <p className="text-center text-sm text-gray-500">
                        Gracias por contactar con nuestro equipo de soporte. Nos pondremos en contacto contigo lo antes
                        posible.
                      </p>
                      <div className="flex justify-center mt-3">
                        <button
                          type="button"
                          onClick={() => {
                            resetForm()
                            // Scroll to top of the page
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }}
                          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition-colors"
                        >
                          Salir
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-poppins-bold text-[#1B1D32] mb-3">Resumen de tu solicitud</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-poppins-bold">Nombre:</span> {formData.nombre}
                      </p>
                      <p>
                        <span className="font-poppins-bold">Email:</span> {formData.email}
                      </p>
                      <p>
                        <span className="font-poppins-bold">Teléfono:</span> {formData.telefono}
                      </p>
                      <p>
                        <span className="font-poppins-bold">Ubicación:</span> {formData.ciudad}, {formData.departamento}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-poppins-bold">Tipo de consulta:</span>
                        <div className="flex items-center gap-1">
                          <span
                            className="p-1 rounded-full"
                            style={{ backgroundColor: formData.tipoConsulta ? getConsultaColor() + "20" : "#ed1b3420" }}
                          >
                            {getConsultaIcon()}
                          </span>
                          <span>{formData.tipoConsulta}</span>
                        </div>
                      </div>
                      <p className="break-all">
                        <span className="font-poppins-bold">Mensaje:</span>{" "}
                        <span className="inline-block whitespace-pre-wrap max-w-full overflow-hidden">
                          {formData.mensaje}
                        </span>
                      </p>
                      <p>
                        <span className="font-poppins-bold">Archivos adjuntos:</span>{" "}
                        {archivos.length > 0 ? `${archivos.length} archivo(s)` : "No"}
                      </p>
                      <p>
                        <span className="font-poppins-bold">Recibir promociones:</span>{" "}
                        {formData.marketingConsent ? "Sí" : "No"}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                    </p>

                    {/* Botón para verificar datos */}
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        onClick={verifyFormData}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition-colors"
                        style={{ color: formData.tipoConsulta ? getConsultaColor() : "#ed1b34" }}
                      >
                        Clic Verificar Correo electronico
                      </button>
                    </div>
                  </div>
                )}

                {!submitted && (
                  <div className="flex justify-between pt-4 flex-col sm:flex-row gap-3 sm:gap-0">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg transition-colors hover:bg-gray-300"
                    >
                      Anterior
                    </button>
                    <button
                      type="submit"
                      disabled={loading || !validateStep()}
                      className={`px-4 py-2 text-white rounded-lg transition-colors flex items-center justify-center gap-2 ${
                        loading || !validateStep() ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                      }`}
                      style={{ backgroundColor: formData.tipoConsulta ? getConsultaColor() : "#ed1b34" }}
                    >
                      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                      {loading ? "Enviando..." : "Enviar consulta"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/*Botones de navegacion entre pasos */}
            {currentStep < 6 && (
              <div className="flex justify-between pt-4 flex-col sm:flex-row gap-3 sm:gap-0">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-4 py-2 text-white rounded-lg transition-colors ${
                    currentStep === 1 ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                  }`}
                  style={{ backgroundColor: formData.tipoConsulta ? getConsultaColor() : "#ed1b34" }}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!validateStep()}
                  className={`px-4 py-2 text-white rounded-lg transition-colors ${
                    !validateStep() ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                  }`}
                  style={{ backgroundColor: formData.tipoConsulta ? getConsultaColor() : "#ed1b34" }}
                >
                  Siguiente
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}


