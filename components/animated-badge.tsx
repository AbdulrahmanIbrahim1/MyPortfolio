"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function AnimatedBadge({ children, className, variant = "secondary" }: AnimatedBadgeProps) {
  const { x, y } = useMousePosition()
  const badgeRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [badgeCenter, setBadgeCenter] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (badgeRef.current) {
      const rect = badgeRef.current.getBoundingClientRect()
      setBadgeCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
  }

  const distance = Math.sqrt(Math.pow(x - badgeCenter.x, 2) + Math.pow(y - badgeCenter.y, 2))
  const maxDistance = 200
  const proximity = Math.max(0, 1 - distance / maxDistance)
  const glowIntensity = proximity * 0.3

  return (
    <div ref={badgeRef} className="relative">
      <Badge
        variant={variant}
        className={cn(
          "transition-all duration-300 ease-out hover:scale-110 cursor-pointer relative z-10",
          isHovered && "shadow-lg",
          className,
        )}
        style={{
          boxShadow: isHovered ? `0 0 ${20 * glowIntensity}px rgba(var(--primary), ${glowIntensity})` : undefined,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Badge>

      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-full bg-primary/20 blur-md transition-opacity duration-300"
          style={{
            opacity: glowIntensity,
            transform: "scale(1.2)",
          }}
        />
      )}
    </div>
  )
}
