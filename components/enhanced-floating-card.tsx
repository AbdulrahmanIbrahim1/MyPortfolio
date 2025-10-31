"use client"

import type React from "react"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface EnhancedFloatingCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  tiltIntensity?: number
  glowEffect?: boolean
}

export function EnhancedFloatingCard({
  children,
  className,
  intensity = 0.03,
  tiltIntensity = 0.15,
  glowEffect = true,
}: EnhancedFloatingCardProps) {
  const { x, y } = useMousePosition()
  const cardRef = useRef<HTMLDivElement>(null)
  const [cardCenter, setCardCenter] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [mouseDistance, setMouseDistance] = useState(1000)

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      setCardCenter({ x: centerX, y: centerY })

      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
      setMouseDistance(distance)
    }
  }, [x, y])

  const proximity = Math.max(0, 1 - mouseDistance / 300)
  const tiltX = isHovered ? (y - cardCenter.y) * tiltIntensity : 0
  const tiltY = isHovered ? (cardCenter.x - x) * tiltIntensity : 0
  const floatX = (x - cardCenter.x) * intensity * proximity
  const floatY = (y - cardCenter.y) * intensity * proximity
  const scale = 1 + proximity * 0.05

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-300 ease-out hover:scale-[1.02] relative",
        glowEffect && "hover:shadow-2xl",
        className,
      )}
      style={{
        transform: `
          translate3d(${floatX}px, ${floatY}px, 0) 
          rotateX(${tiltX}deg) 
          rotateY(${tiltY}deg)
          scale(${scale})
        `,
        transformStyle: "preserve-3d",
        boxShadow:
          glowEffect && proximity > 0.1 ? `0 0 ${proximity * 30}px rgba(139, 92, 246, ${proximity * 0.3})` : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {glowEffect && proximity > 0.2 && (
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl pointer-events-none"
          style={{ opacity: proximity * 0.5 }}
        />
      )}
    </div>
  )
}
