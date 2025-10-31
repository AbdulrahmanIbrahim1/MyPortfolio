"use client"

import { useState, useEffect } from "react"

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let ticking = false
    let lastUpdate = 0

    const updateMousePosition = (e: MouseEvent) => {
      const now = Date.now()
      if (!ticking && now - lastUpdate > 16) {
        // ~60fps max
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY })
          lastUpdate = now
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("mousemove", updateMousePosition, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePosition
}
