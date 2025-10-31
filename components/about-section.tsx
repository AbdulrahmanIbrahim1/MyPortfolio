"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Shield, Code, Zap } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"
import { AnimatedIcon } from "@/components/animated-icon"
import { ParallaxSection } from "@/components/parallax-section"

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Graduate",
      description: "Strong foundation in algorithms, data structures, and software engineering principles",
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Experienced in both frontend and backend development with modern technologies",
    },
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Specialized in penetration testing, network security, and vulnerability assessment",
    },
    {
      icon: Zap,
      title: "Real-time Applications",
      description: "Building interactive applications with Socket.IO and modern web technologies",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <ParallaxSection speed={0.1}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
              Passionate about creating secure, efficient, and user-friendly digital solutions
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <FloatingCard intensity={0.01} tiltIntensity={0.03}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 text-primary">My Journey</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    As a Computer Science graduate with a focus on cybersecurity, I combine my passion for secure coding
                    practices with full-stack development expertise. My journey spans from building robust backend
                    systems with PHP and Laravel to creating dynamic frontend experiences with Next.js and TypeScript.
                  </p>
                  <p className="text-muted-foreground text-pretty">
                    I specialize in developing secure applications while maintaining a strong focus on user experience
                    and performance. My cybersecurity background helps me build applications that are not only
                    functional but also resilient against modern security threats.
                  </p>
                </div>
              </FloatingCard>

              <FloatingCard intensity={0.01} tiltIntensity={0.03}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 text-primary">What I Do</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    I work at the intersection of development and security, creating applications that prioritize both
                    functionality and protection. From penetration testing to building real-time chat applications, I
                    enjoy tackling complex technical challenges.
                  </p>
                  <p className="text-muted-foreground text-pretty">
                    My approach combines modern development practices with security-first thinking, ensuring that every
                    project I work on meets high standards for both performance and protection.
                  </p>
                </div>
              </FloatingCard>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <FloatingCard key={index} intensity={0.02} tiltIntensity={0.06} className="h-full">
                  <Card className="text-center hover:shadow-xl transition-all duration-500 hover:shadow-primary/10 h-full border-2 hover:border-primary/20 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                        <AnimatedIcon
                          icon={highlight.icon}
                          className="text-secondary group-hover:text-primary transition-colors duration-300"
                          size={24}
                        />
                      </div>
                      <h4 className="font-semibold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}
