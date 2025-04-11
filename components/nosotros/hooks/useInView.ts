import { useState, useEffect, type RefObject } from "react"

export const useInView = (ref: RefObject<HTMLElement | null>) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current // Guardamos el valor de ref.current en una variable local
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element) // Usamos la variable en la limpieza
    }
  }, [ref]) // Dependencia sigue siendo ref

  return isInView
}
