"use client"

import { useEffect, useRef, useState } from "react"

export function OptimizedAnimations() {
  const [isReduced, setIsReduced] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReduced(mediaQuery.matches)

    const handleChange = () => setIsReduced(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (isReduced || !cursorRef.current) return

    let ticking = false

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && cursorRef.current) {
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${e.clientX - 8}px`
            cursorRef.current.style.top = `${e.clientY - 8}px`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isReduced])

  if (isReduced) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className="fixed w-4 h-4 bg-blue-500/20 rounded-full pointer-events-none z-30 transition-opacity duration-200"
      style={{
        left: -100,
        top: -100,
      }}
    />
  )
}
