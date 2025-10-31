"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  timestamp: number
}

export function MouseTrail() {
  const { x, y } = useMousePosition()
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    setTrail((prev) => {
      const newTrail = [...prev, { x, y, timestamp: Date.now() }]
      return newTrail.slice(-15) // Keep last 15 points
    })

    const cleanup = setInterval(() => {
      setTrail((prev) => prev.filter((point) => Date.now() - point.timestamp < 500))
    }, 50)

    return () => clearInterval(cleanup)
  }, [x, y, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-35">
      <svg className="w-full h-full">
        {trail.length > 1 && (
          <path
            d={`M ${trail.map((point) => `${point.x},${point.y}`).join(" L ")}`}
            stroke="url(#trailGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        )}
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
