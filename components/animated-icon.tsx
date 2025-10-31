"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useRef, useState, useEffect } from "react"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  size?: number
}

export function AnimatedIcon({ icon: Icon, className, size = 24 }: AnimatedIconProps) {
  const { x, y } = useMousePosition()
  const iconRef = useRef<HTMLDivElement>(null)
  const [iconCenter, setIconCenter] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (iconRef.current) {
      observer.observe(iconRef.current)
      const rect = iconRef.current.getBoundingClientRect()
      setIconCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }

    return () => observer.disconnect()
  }, [])

  const distance = Math.sqrt(Math.pow(x - iconCenter.x, 2) + Math.pow(y - iconCenter.y, 2))
  const maxDistance = 150
  const proximity = Math.max(0, 1 - distance / maxDistance)

  const rotateX = isVisible ? (y - iconCenter.y) * proximity * 0.1 : 0
  const rotateY = isVisible ? (x - iconCenter.x) * proximity * 0.1 : 0
  const scale = 1 + proximity * 0.2

  return (
    <div
      ref={iconRef}
      className={`transition-all duration-300 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      }}
    >
      <Icon size={size} />
    </div>
  )
}
