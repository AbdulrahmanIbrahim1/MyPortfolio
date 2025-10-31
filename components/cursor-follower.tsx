"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useEffect, useState } from "react"

export function CursorFollower() {
  const { x, y } = useMousePosition()
  const [mounted, setMounted] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: x - 8,
          top: y - 8,
          transform: `scale(${isClicking ? 0.8 : 1})`,
        }}
      />

      {/* Trailing cursor ring */}
      <div
        className="fixed w-8 h-8 border border-primary/20 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: x - 16,
          top: y - 16,
          transform: `scale(${isClicking ? 1.5 : 1})`,
        }}
      />
    </>
  )
}
