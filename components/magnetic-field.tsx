"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useEffect, useState } from "react"

export function MagneticField() {
  const { x, y } = useMousePosition()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Magnetic field lines that bend toward mouse */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-all duration-500 ease-out"
          style={{
            top: `${10 + i * 12}%`,
            transform: `translateY(${(y - window.innerHeight / 2) * 0.01 * (i + 1)}px) rotate(${(x - window.innerWidth / 2) * 0.01}deg)`,
            opacity: 0.3 + Math.sin(Date.now() * 0.001 + i) * 0.2,
          }}
        />
      ))}

      {/* Radial magnetic field */}
      <div
        className="absolute w-96 h-96 rounded-full border border-primary/5 transition-all duration-300"
        style={{
          left: x - 192,
          top: y - 192,
          transform: `scale(${1 + Math.sin(Date.now() * 0.002) * 0.1})`,
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full border border-secondary/10 transition-all duration-500"
        style={{
          left: x - 128,
          top: y - 128,
          transform: `scale(${1 + Math.sin(Date.now() * 0.003) * 0.15}) rotate(${Date.now() * 0.01}deg)`,
        }}
      />
    </div>
  )
}
