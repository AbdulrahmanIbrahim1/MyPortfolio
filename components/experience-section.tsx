"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"
import { AnimatedBadge } from "@/components/animated-badge"
import { AnimatedIcon } from "@/components/animated-icon"

export function ExperienceSection() {
  const experiences = [
    {
      type: "education",
      title: "B.Sc. in Computer Science",
      organization: "Benha University – Faculty of Science",
      period: "2021 – 2025",
      description:
        "Studied core computer science concepts with a focus on programming, algorithms, and cybersecurity fundamentals. Gained practical experience in web security, ethical hacking, and secure software systems during final year projects.",
      highlights: [
        "Cybersecurity Fundamentals",
        "Programming & Algorithms",
        "Secure Web Systems",
        "Database Design",
      ],
    },
    {
      type: "work",
      title: "Cybersecurity Trainee – Vulnerability Analyst / Penetration Tester",
      organization: "Digital Egypt Pioneers Initiative (MCIT)",
      period: "Nov 2024 – May 2025",
      description:
        "Completed intensive hands-on training in penetration testing, vulnerability analysis, and network defense under the supervision of MCIT experts. Worked on red-team simulations and reporting of real-world vulnerabilities.",
      highlights: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Network Security",
        "Incident Response",
      ],
    },
    // {
    //   type: "project",
    //   title: "Front-End Developer – Educational Platform Project",
    //   organization: "Freelance / University Project",
    //   period: "2024",
    //   description:
    //     "Developed a dynamic educational web platform enabling teachers to upload courses, students to subscribe, and real-time chat and video sessions. Implemented secure authentication and scalable front-end architecture.",
    //   highlights: ["Next.js", "Redux Toolkit", "Socket.IO", "Tailwind CSS"],
    // },
  ]

  return (
    <section className="py-20 bg-muted/30 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Experience & Education</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            My professional journey and academic background
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <FloatingCard key={index} intensity={0.015} tiltIntensity={0.03} className="w-full">
                <Card className="hover:shadow-xl transition-all duration-500 hover:shadow-primary/10 border-2 hover:border-primary/20 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {exp.type === "education" ? (
                          <AnimatedIcon
                            icon={GraduationCap}
                            className="text-secondary group-hover:text-primary transition-colors duration-300"
                            size={20}
                          />
                        ) : (
                          <AnimatedIcon
                            icon={Briefcase}
                            className="text-secondary group-hover:text-primary transition-colors duration-300"
                            size={20}
                          />
                        )}
                        <div>
                          <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <p className="text-secondary font-medium">{exp.organization}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <AnimatedBadge key={highlightIndex} variant="outline" className="text-xs">
                          {highlight}
                        </AnimatedBadge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
