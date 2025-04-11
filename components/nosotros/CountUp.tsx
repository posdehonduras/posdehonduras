"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useInView } from "../nosotros/hooks/useInView"

interface CountUpProps {
  end: number
  duration?: number
}

export const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(countRef)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    if (isInView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime

        if (progress < duration) {
          setCount(Math.floor((progress / duration) * end))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return <span ref={countRef}>{count}+</span>
}

