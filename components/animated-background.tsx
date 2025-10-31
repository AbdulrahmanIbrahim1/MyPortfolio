"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const { x, y } = useMousePosition()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating orbs that follow mouse */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${x * 0.02}px, ${y * 0.02}px)`,
          left: "10%",
          top: "20%",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 blur-2xl transition-all duration-700 ease-out"
        style={{
          transform: `translate(${x * -0.015}px, ${y * -0.015}px)`,
          right: "15%",
          top: "60%",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-secondary/8 to-accent/8 blur-3xl transition-all duration-1200 ease-out"
        style={{
          transform: `translate(${x * 0.01}px, ${y * 0.01}px)`,
          left: "60%",
          bottom: "20%",
        }}
      />

      {/* Grid pattern that shifts with mouse */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at ${x * 0.1}px ${y * 0.1}px, currentColor 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          transition: "background-position 0.3s ease-out",
        }}
      />
    </div>
  )
}
