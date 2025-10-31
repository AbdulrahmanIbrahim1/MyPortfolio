"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number       // قوة التكبير عند hover
  tiltIntensity?: number   // قوة الميل عند تحريك الماوس
}

export function FloatingCard({
  children,
  className,
  intensity = 0.02,       // قيمة افتراضية
  tiltIntensity = 0.05,   // قيمة افتراضية
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const tiltX = (e.clientY - centerY) * tiltIntensity
    const tiltY = (centerX - e.clientX) * tiltIntensity

    cardRef.current.style.transform = `
      rotateX(${tiltX}deg) 
      rotateY(${tiltY}deg)
      scale(${1 + intensity})
    `
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
    }
  }

  return (
    <div
      ref={cardRef}
      className={cn("transition-all duration-300 ease-out", className)}
      style={{
        transformStyle: "preserve-3d",
        willChange: isHovered ? "transform" : "auto",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
