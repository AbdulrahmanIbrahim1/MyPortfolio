"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useState, useEffect } from "react"

interface Ripple {
  id: number
  x: number
  y: number
  timestamp: number
}

export function RippleEffect() {
  const { x, y } = useMousePosition()
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [mounted, setMounted] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      setRipples((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
        },
      ])
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prev) => prev.filter((ripple) => Date.now() - ripple.timestamp < 1000))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-25">
      {ripples.map((ripple) => {
        const age = Date.now() - ripple.timestamp
        const progress = age / 1000
        const scale = progress * 3
        const opacity = 1 - progress

        return (
          <div
            key={ripple.id}
            className="absolute rounded-full border-2 border-primary/30"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              transition: "none",
            }}
          />
        )
      })}
    </div>
  )
}
