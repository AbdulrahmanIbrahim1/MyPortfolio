"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useEffect, useState } from "react"

interface GravityParticle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  mass: number
  color: string
}

export function GravityWell() {
  const { x, y } = useMousePosition()
  const [particles, setParticles] = useState<GravityParticle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Initialize particles
    const initialParticles: GravityParticle[] = []
    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"]

    for (let i = 0; i < 20; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        mass: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setParticles(initialParticles)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          // Calculate gravitational force toward mouse
          const dx = x - particle.x
          const dy = y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const force = Math.min(100 / (distance + 1), 2)

          const ax = (dx / distance) * force * 0.1
          const ay = (dy / distance) * force * 0.1

          const newVx = particle.vx + ax
          const newVy = particle.vy + ay

          // Apply friction
          const friction = 0.99

          return {
            ...particle,
            x: particle.x + newVx * friction,
            y: particle.y + newVy * friction,
            vx: newVx * friction,
            vy: newVy * friction,
          }
        }),
      )
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [x, y, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-15">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full blur-sm transition-all duration-75"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.mass * 2,
            height: particle.mass * 2,
            backgroundColor: particle.color,
            opacity: 0.6,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${particle.mass * 4}px ${particle.color}40`,
          }}
        />
      ))}
    </div>
  )
}
