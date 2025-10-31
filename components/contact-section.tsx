"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedIcon } from "@/components/animated-icon"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdelrahmanibrahim0110@email.com",
      href: "mailto:abdelrahmanibrahim0110@email.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abdelrahmanibrahim11/",
      href: "https://www.linkedin.com/in/abdelrahmanibrahim11/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/AbdulrahmanIbrahim1",
      href: "https://github.com/AbdulrahmanIbrahim1",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            Let's discuss how we can work together on your next project
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <FloatingCard intensity={0.01} tiltIntensity={0.02}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                <p className="text-muted-foreground mb-8 text-pretty">
                  I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                  just want to connect, feel free to reach out!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110">
                        <AnimatedIcon
                          icon={info.icon}
                          className="text-secondary group-hover:text-primary transition-colors duration-300"
                          size={20}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-primary group-hover:text-secondary transition-colors duration-300">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:translate-x-1"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* Contact Form */}
            <FloatingCard intensity={0.015} tiltIntensity={0.03}>
              <Card className="hover:shadow-xl transition-all duration-500 hover:shadow-primary/10 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <MagneticButton
                      type="submit"
                      className="w-full hover:shadow-lg hover:shadow-primary/25"
                      strength={0.2}
                    >
                      Send Message
                    </MagneticButton>
                  </form>
                </CardContent>
              </Card>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  )
}
