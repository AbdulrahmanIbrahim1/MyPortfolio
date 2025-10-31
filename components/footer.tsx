"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedIcon } from "@/components/animated-icon"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary-foreground/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 hover:text-secondary transition-colors duration-300 cursor-default">
            Abdelrahman Ibrahim
          </h3>
          <p className="text-primary-foreground/80 mb-8 text-pretty">Cybersecurity Engineer & Full-Stack Developer</p>

          <div className="flex justify-center space-x-4 mb-8">
            <MagneticButton
              variant="ghost"
              size="icon"
              className="hover:bg-primary-foreground/10 hover:scale-110"
              strength={0.4}
            >
              <AnimatedIcon icon={Github} className="text-primary-foreground" size={20} />
              <span className="sr-only">GitHub</span>
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              size="icon"
              className="hover:bg-primary-foreground/10 hover:scale-110"
              strength={0.4}
            >
              <AnimatedIcon icon={Linkedin} className="text-primary-foreground" size={20} />
              <span className="sr-only">LinkedIn</span>
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              size="icon"
              className="hover:bg-primary-foreground/10 hover:scale-110"
              strength={0.4}
            >
              <AnimatedIcon icon={Mail} className="text-primary-foreground" size={20} />
              <span className="sr-only">Email</span>
            </MagneticButton>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">© 2024 Abdelrahman Ibrahim. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
