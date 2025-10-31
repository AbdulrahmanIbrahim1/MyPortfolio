"use client"

import { useEffect, useState, useRef } from "react"

export function SimpleCursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const trailRef = useRef<Array<{ x: number; y: number; opacity: number }>>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    let animationFrame: number

    const updateMousePosition = (e: MouseEvent) => {
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })

        trailRef.current.unshift({ x: e.clientX, y: e.clientY, opacity: 1 })

        if (trailRef.current.length > 8) {
          trailRef.current = trailRef.current.slice(0, 8)
        }
      })
    }

    const animateTrail = () => {
      trailRef.current = trailRef.current
        .map((point, index) => ({
          ...point,
          opacity: Math.max(0, 1 - index * 0.15), // Fade each point
        }))
        .filter((point) => point.opacity > 0.1) // Remove nearly invisible points

      animationRef.current = requestAnimationFrame(animateTrail)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => {
      setIsVisible(false)
      trailRef.current = []
    }

    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    document.addEventListener("mousemove", updateMousePosition)
    animateTrail() // Start trail animation

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      document.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {trailRef.current.map((point, index) => (
        <div
          key={`trail-${index}`}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            width: `${12 - index}px`,
            height: `${12 - index}px`,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${point.opacity * 0.4}) 0%, transparent 70%)`,
            borderRadius: "50%",
            opacity: point.opacity,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}

      <div
        className="fixed pointer-events-none z-50 transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          width: "24px",
          height: "24px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)",
          borderRadius: "50%",
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
        }}
      />
    </>
  )
}
