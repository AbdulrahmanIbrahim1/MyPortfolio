"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useEffect, useState, useRef } from "react"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export function ParticleSystem() {
  const { x, y } = useMousePosition()
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)
  const animationRef = useRef<number>()
  const lastMousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"]

    // Create particles when mouse moves
    const distance = Math.sqrt(Math.pow(x - lastMousePos.current.x, 2) + Math.pow(y - lastMousePos.current.y, 2))

    if (distance > 5) {
      const newParticles: Particle[] = []
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 4 + 2,
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      setParticles((prev) => [...prev.slice(-50), ...newParticles])
      lastMousePos.current = { x, y }
    }

    // Animate particles
    const animate = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            opacity: particle.opacity - 0.02,
            size: particle.size * 0.99,
          }))
          .filter((particle) => particle.opacity > 0),
      )
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [x, y, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}
