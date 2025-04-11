"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { CalendarCheck, Mail, User, Phone, MapPin, MessageSquare, Building } from "lucide-react"

// Lista de departamentos de Honduras
const departamentos = [
  "Atlántida",
  "Choluteca",
  "Colón",
  "Comayagua",
  "Copán",
  "Cortés",
  "El Paraíso",
  "Francisco Morazán",
  "Gracias a Dios",
  "Intibucá",
  "Islas de la Bahía",
  "La Paz",
  "Lempira",
  "Ocotepeque",
  "Olancho",
  "Santa Bárbara",
  "Valle",
  "Yoro",
]

// Tipos de demo
const tiposDemo = ["Software", "Hardware"]

interface DemoFormData {
  tipoDemo: string
  nombre: string
  email: string
  departamento: string
  ciudad: string
  telefono: string
  mensaje: string
  marketing: boolean
}

export default function DemoForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoFormData>({
    defaultValues: {
      tipoDemo: "",
      nombre: "",
      email: "",
      departamento: "",
      ciudad: "",
      telefono: "",
      mensaje: "",
      marketing: false,
    },
  })

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setStatusMessage("")

    try {
      // Incluir el estado del checkbox de marketing
      data.marketing = marketing

      // Mostrar notificación de que se está procesando
      toast({
        title: "Procesando solicitud",
        description: "Estamos enviando tu información, por favor espera un momento...",
        variant: "default",
        duration: 3000,
      })

      // 1. Enviar correos electrónicos - Esta es la operación principal
      let emailSent = false
      try {
        const emailResponse = await fetch("/api/send-demo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (emailResponse.ok) {
          emailSent = true
          // Actualizar estado visual
          setSubmitStatus("success")
          setStatusMessage("¡Tu solicitud ha sido enviada con éxito! Te hemos enviado un correo de confirmación.")

          // Correo enviado con éxito - Mostrar notificación clara
          toast({
            title: "✅ ¡Solicitud enviada con éxito!",
            description:
              "Hemos recibido tu solicitud de una Demo y te hemos enviado un correo de confirmación. Revisa tu bandeja de entrada.",
            variant: "success",
            duration: 6000,
          })

          // Resetear el formulario solo si el correo se envió correctamente
          reset()
          setMarketing(false)
        } else {
          // Intentar obtener el mensaje de error
          let errorMessage = "No pudimos enviar la confirmación por correo. Inténtalo de nuevo más tarde."
          try {
            const errorData = await emailResponse.json()
            if (errorData && errorData.error) {
              errorMessage = errorData.error
            }
          } catch (jsonError) {
            console.error("Error al parsear respuesta JSON:", jsonError)
          }

          // Actualizar estado visual
          setSubmitStatus("error")
          setStatusMessage(errorMessage)

          toast({
            title: "❌ Error al enviar solicitud",
            description: errorMessage,
            variant: "destructive",
            duration: 6000,
          })
        }
      } catch (emailError) {
        console.error("Error en el envío de correo:", emailError)

        // Actualizar estado visual
        setSubmitStatus("error")
        setStatusMessage(
          "No pudimos conectar con nuestro servidor de correo. Por favor, verifica tu conexión a internet e intenta nuevamente.",
        )

        toast({
          title: "❌ Error de conexión",
          description:
            "No pudimos conectar con nuestro servidor de correo. Por favor, verifica tu conexión a internet e intenta nuevamente.",
          variant: "destructive",
          duration: 6000,
        })
      }

      // 2. Intentar guardar en Supabase (operación independiente)
      if (emailSent) {
        // Solo intentamos guardar en Supabase si el correo se envió correctamente
        try {
          console.log("Intentando guardar en Supabase:", {
            nombre: data.nombre,
            correo: data.email,
            telefono: data.telefono,
            marketing: data.marketing,
          })

          // Guardar datos en Supabase de forma silenciosa (no afecta la experiencia del usuario)
          // Solo enviamos los datos importantes: nombre, correo, teléfono y marketing
          const supabaseResponse = await fetch("/api/save-demo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nombre: data.nombre,
              correo: data.email,
              telefono: data.telefono,
              marketing: data.marketing,
            }),
          })

          const supabaseResult = await supabaseResponse.json()
          console.log("Respuesta de Supabase:", supabaseResult)

          if (!supabaseResult.success) {
            console.error("Error al guardar en Supabase:", supabaseResult.error)
            // No mostramos notificación al usuario para no afectar su experiencia
          } else {
            console.log("Datos guardados correctamente en Supabase")
          }
        } catch (dbError) {
          // Solo registramos el error, no afecta al usuario
          console.error("Error al guardar en base de datos (silencioso):", dbError)
        }
      }
    } catch (error) {
      console.error("Error general:", error)

      // Actualizar estado visual
      setSubmitStatus("error")
      setStatusMessage(
        "Hubo un problema al procesar tu solicitud. Por favor, intenta de nuevo o contáctanos directamente.",
      )

      toast({
        title: "❌ Error inesperado",
        description:
          "Hubo un problema al procesar tu solicitud. Por favor, intenta de nuevo o contáctanos directamente.",
        variant: "destructive",
        duration: 6000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#2E3763] text-white py-4 px-6 rounded-t-lg">
        <h2 className="text-xl font-bold flex items-center">
          <CalendarCheck className="mr-2" size={24} />
          Solicitar Una Demo
        </h2>
        <p className="text-sm opacity-80 mt-1">Complete el formulario para agendar una demo personalizada</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded-b-lg shadow-md border border-gray-200"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="tipoDemo" className="font-medium text-[#2E3763]">
              Tipo de demo
            </Label>
            <div className="relative">
              <select
                id="tipoDemo"
                {...register("tipoDemo", { required: "Este campo es obligatorio" })}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
              >
                <option value="">Seleccione un tipo</option>
                {tiposDemo.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
              <CalendarCheck className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>
            {errors.tipoDemo && <p className="text-[#ed1b34] text-sm">{errors.tipoDemo.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="nombre" className="font-medium text-[#2E3763]">
              Nombre Completo
            </Label>
            <div className="relative">
              <Input
                id="nombre"
                {...register("nombre", { required: "Este campo es obligatorio" })}
                placeholder="Ingrese su nombre completo"
                className="pl-10 focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
              />
              <User className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>
            {errors.nombre && <p className="text-[#ed1b34] text-sm">{errors.nombre.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium text-[#2E3763]">
              Correo Electrónico
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo electrónico inválido",
                  },
                })}
                placeholder="ejemplo@correo.com"
                className="pl-10 focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
              />
              <Mail className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>
            {errors.email && <p className="text-[#ed1b34] text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono" className="font-medium text-[#2E3763]">
              Teléfono
            </Label>
            <div className="relative">
              <Input
                id="telefono"
                {...register("telefono", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[0-9]{8}$/,
                    message: "Ingrese un número de teléfono válido (8 dígitos)",
                  },
                })}
                placeholder="Ej. 99887766"
                className="pl-10 focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
              />
              <Phone className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>
            {errors.telefono && <p className="text-[#ed1b34] text-sm">{errors.telefono.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="departamento" className="font-medium text-[#2E3763]">
              Departamento
            </Label>
            <div className="relative">
              <select
                id="departamento"
                {...register("departamento", { required: "Este campo es obligatorio" })}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
              >
                <option value="">Seleccione un departamento</option>
                {departamentos.map((depto) => (
                  <option key={depto} value={depto}>
                    {depto}
                  </option>
                ))}
              </select>
              <MapPin className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>
            {errors.departamento && <p className="text-[#ed1b34] text-sm">{errors.departamento.message}</p>}
          </div>

          {/* Campo de Ciudad */}
          <div className="space-y-2">
            <Label htmlFor="ciudad" className="font-medium text-[#2E3763]">
              Ciudad
            </Label>
            <div className="relative">
              <Input
                id="ciudad"
                {...register("ciudad", { required: "Este campo es obligatorio" })}
                placeholder="Ingrese su ciudad"
                className="pl-10 focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
              />
              <Building className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>
            {errors.ciudad && <p className="text-[#ed1b34] text-sm">{errors.ciudad.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje" className="font-medium text-[#2E3763]">
            Mensaje
          </Label>
          <div className="relative">
            <Textarea
              id="mensaje"
              {...register("mensaje", { required: "Este campo es obligatorio" })}
              placeholder="Describa brevemente qué le interesa conocer en la Demo"
              rows={4}
              className="pl-10 pt-8 focus:ring-2 focus:ring-[#ed1b34] focus:border-[#ed1b34]"
            />
            <MessageSquare className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
          {errors.mensaje && <p className="text-[#ed1b34] text-sm">{errors.mensaje.message}</p>}
        </div>

        <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
          <Checkbox
            id="marketing"
            checked={marketing}
            onCheckedChange={(checked) => setMarketing(checked as boolean)}
            className="data-[state=checked]:bg-[#ed1b34] data-[state=checked]:border-[#ed1b34] text-white"
          />
          <label
            htmlFor="marketing"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Deseo recibir ofertas y novedades por correo electrónico
          </label>
        </div>

        {/* Notificación visual del estado del envío */}
        {submitStatus !== "idle" && (
          <div
            className={`p-4 rounded-md ${
              submitStatus === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {submitStatus === "success" ? (
                  <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{statusMessage}</p>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-[#ed1b34] hover:bg-[#c91529] text-white font-medium py-3 transition-colors duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </Button>
      </form>
    </div>
  )
}

