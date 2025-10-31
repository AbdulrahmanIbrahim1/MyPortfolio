import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { OptimizedAnimations } from "@/components/optimized-animations"
import { SimpleCursorEffect } from "@/components/simple-cursor-effect"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <OptimizedAnimations />
      <SimpleCursorEffect />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
