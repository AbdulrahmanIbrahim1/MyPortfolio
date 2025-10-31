"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OptimizedFloatingCard } from "@/components/optimized-floating-card"
import { AnimatedBadge } from "@/components/animated-badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["PHP", "Laravel", "Node.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Frontend Development",
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Cybersecurity",
      skills: [
        "Penetration Testing",
        "Network Security",
        "Vulnerability Assessment",
        "Security Auditing",
        "OWASP",
        "Kali Linux",
        "Wireshark",
        "Metasploit",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Socket.IO", "Postman", "VS Code", "Linux", "Windows", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            A comprehensive toolkit for building secure, modern applications
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <OptimizedFloatingCard key={index} intensity={0.015} tiltIntensity={0.05} className="h-full">
                <Card className="hover:shadow-xl transition-all duration-500 hover:shadow-primary/10 h-full border-2 hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <AnimatedBadge
                          key={skillIndex}
                          variant="secondary"
                          className="hover:bg-secondary/80 transition-colors duration-200"
                        >
                          {skill}
                        </AnimatedBadge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </OptimizedFloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
