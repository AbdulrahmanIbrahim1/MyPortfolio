"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      {/* النصوص */}
      <div className="w-full lg:w-1/2 px-6 lg:px-16 text-center lg:text-left flex flex-col justify-center items-center lg:items-start z-10 py-16">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Abdelrahman
          </span>{" "}
          <span className="text-secondary">Ibrahim</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Cybersecurity Engineer & Full-Stack Developer
        </p>

        <p
          className="text-lg text-muted-foreground mb-12 max-w-xl animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Computer Science graduate passionate about building secure, scalable applications and protecting digital
          infrastructure through innovative cybersecurity solutions.
        </p>

        {/* الأزرار والأيقونات مع بعض */}
        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-transparent hover:bg-primary/5"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* أيقونات التواصل */}
          <div className="flex justify-center space-x-6">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:scale-125 hover:-translate-y-2 transition-all duration-300"
            >
              <a href="https://github.com/AbdulrahmanIbrahim1" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:scale-125 hover:-translate-y-2 transition-all duration-300"
            >
              <a href="https://www.linkedin.com/in/abdelrahmanibrahim11/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:scale-125 hover:-translate-y-2 transition-all duration-300"
            >
              <a href="mailto:abdelrahmanibrahim0110@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>


      </div>

      {/* الصورة مع حركة مستمرة ناعمة */}
      <div
        className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative flex items-center justify-center order-first lg:order-last 
  overflow-hidden pt-20 sm:pt-24 lg:pt-0"
      >
        <motion.img
          src="/prof3.png"
          alt="Abdelrahman Ibrahim - Profile Photo"
          className="object-cover max-h-[90%] max-w-[90%] rounded-3xl sm:max-h-[95%] sm:max-w-[95%]"
          initial={{ y: 0 }}
          animate={{ y: [20, 30] }} // تتحرك من فوق لتحت
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse", // ترجع للخلف بعد ما توصل
            ease: "easeInOut",
          }}
        />
      </div>



    </section>
  )
}
