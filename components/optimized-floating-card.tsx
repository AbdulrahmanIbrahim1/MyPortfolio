"use client"

import type React from "react"
import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface OptimizedFloatingCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  tiltIntensity?: number
}

export function OptimizedFloatingCard({
  children,
  className,
  intensity = 0.02,
  tiltIntensity = 0.1,
}: OptimizedFloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<number>()

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (animationRef.current) return

      animationRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) {
          animationRef.current = undefined
          return
        }

        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const tiltX = isHovered ? (e.clientY - centerY) * tiltIntensity : 0
        const tiltY = isHovered ? (centerX - e.clientX) * tiltIntensity : 0
        const floatX = (e.clientX - centerX) * intensity
        const floatY = (e.clientY - centerY) * intensity

        setTransform(`
        translate(${floatX}px, ${floatY}px) 
        rotateX(${tiltX}deg) 
        rotateY(${tiltY}deg)
      `)
        animationRef.current = undefined
      })
    },
    [intensity, tiltIntensity, isHovered],
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransform("")
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn("transition-all duration-300 ease-out hover:scale-[1.02]", className)}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
