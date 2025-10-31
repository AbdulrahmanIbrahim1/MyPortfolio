"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface OptimizedMagneticButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  strength?: number
}

export function OptimizedMagneticButton({
  children,
  className,
  variant = "default",
  size = "default",
  strength = 0.3,
}: OptimizedMagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (animationRef.current) return

      animationRef.current = requestAnimationFrame(() => {
        if (!ref.current) {
          animationRef.current = undefined
          return
        }

        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = (e.clientX - centerX) * strength
        const deltaY = (e.clientY - centerY) * strength

        setPosition({ x: deltaX, y: deltaY })
        animationRef.current = undefined
      })
    },
    [strength],
  )

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("transition-all duration-300 ease-out hover:scale-105", className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Button>
  )
}
