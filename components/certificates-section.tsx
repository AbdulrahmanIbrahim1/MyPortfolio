"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"
import { AnimatedBadge } from "@/components/animated-badge"
import { AnimatedIcon } from "@/components/animated-icon"

export function CertificatesSection() {
  const certificates = [
    {
  title: "Digital Egypt Pioneers Program",
  issuer: "MCIT (Ministry of Communications and Information Technology)",
  date: "May 2025",
  description:
    "Certificate of Achievement for completing the Infrastructure and Security – Vulnerability Analyst / Penetration Tester track under the DEPI program supervised by Dr. Hesham Farouk and Dr. Hoda Baraka.",
  skills: ["Penetration Testing", "Vulnerability Analysis", "Cybersecurity"],
  link: "/certificates/depi.pdf"
},
{
  title: "Jr Penetration Tester Path",
  issuer: "TryHackMe",
  date: "March 2025",
  description:
    "Successfully completed the Jr Penetration Tester learning path, covering practical penetration testing techniques, vulnerability analysis, and cybersecurity tools.",
  skills: ["Penetration Testing", "Vulnerability Analysis", "Ethical Hacking"],
  link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-0U2NOY5ABB.pdf"
},
{
  title: "Web Application Pentesting Path",
  issuer: "TryHackMe",
  date: "May 2025",
  description:
    "Completed the Web Application Pentesting learning path, focusing on real-world web vulnerabilities, OWASP Top 10, and advanced exploitation techniques.",
  skills: ["Web Security", "OWASP Top 10", "Burp Suite", "Exploit Development"],
  link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OFMFBIZUWM.pdf"
},{
  title: "Cybersecurity for Beginners",
  issuer: "Information Technology Institute (ITI)",
  date: "April 2025",
  description:
    "Completed 8 foundational courses totaling 35 hours, covering core cybersecurity principles, network protection, and digital safety fundamentals.",
  skills: ["Cybersecurity Basics", "Network Security", "Information Protection"],
  link: "/certificates/iti-cybersecurity.pdf"
},
 
  ]

  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Certificates & Training</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            Continuous learning and professional development in technology and cybersecurity
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <FloatingCard key={index} intensity={0.015} tiltIntensity={0.03} className="h-full">
                <Card className="hover:shadow-xl transition-all duration-500 hover:shadow-primary/10 h-full border-2 hover:border-primary/20 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <AnimatedIcon
                          icon={Award}
                          className="text-secondary group-hover:text-primary transition-colors duration-300"
                          size={20}
                        />
                        <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                          {cert.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {cert.date}
                      </div>
                    </div>
                    <p className="text-sm text-secondary font-medium">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-pretty">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <AnimatedBadge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
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
