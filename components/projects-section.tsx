
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Heraf – Worker Connection Platform",
      description:
        "A modern platform for connecting with nearby workers across all trades and fields. Built to make it easy for users to find, hire, and communicate with skilled professionals in their area. The platform features user authentication for secure access, location-based worker discovery, and an admin panel for efficient management.",
      image: "/heraf.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "MySQL", "Bootstrap 5", "Responsive UI", "User Authentication (PHP + MySQL)", "Location-based Search"],
      liveUrl: "#",
      githubUrl: "https://github.com/AbdulrahmanIbrahim1/Proj_web_Heraf/",
    },
    {
      title: "SNAPUP – E-commerce Web App",
      description:
        "SNAPUP E-COMMERCE: A modern e-commerce platform for purchasing products with multiple components and pages. Built using React for dynamic UI, React-Bootstrap for responsive design, Redux Toolkit for state management, and React-Slick for product carousels. Integrated with the DummyJSON API to fetch and display products, ensuring a smooth and realistic shopping experience.",
      image: "/SNAPUP.png",
      technologies: ["React.js", "Bootstrap 5 + React-Bootstrap", "Redux Toolkit + React-Redux", "React-Slick + Slick Carousel", "DummyJSON API", "Jest & React Testing Library", "Web Vitals", "HTML5", "CSS3", "JavaScript (ES6+)"],
      liveUrl: "https://snapup-ecommerce.netlify.app/",
      githubUrl: "https://github.com/AbdulrahmanIbrahim1/SnapUp-ecommerce",
    },
    {
      title: "Modern React Admin Dashboard",
      description:
        "A modern admin dashboard application designed for data visualization and management. It includes interactive charts, calendars, and user-friendly UI components for monitoring and managing different operations. The app integrates multiple visualization libraries to present data in a clear and dynamic way.",
      image: "/dashboard.png",
      technologies: ["React.js", "React Router DOM", "Bootstrap 5 + React-Bootstrap", "Nivo Charts", "FullCalendar", "FullCalendar", "FontAwesome", "SweetAlert2", "Express.js", "HTML5, CSS3, JavaScript (ES6+)"],
      liveUrl: "https://mydashboard-1.netlify.app/",
      githubUrl: "https://github.com/AbdulrahmanIbrahim1/Dashboard-1/",
    },
    {
      title: "Network Security Scanner",
      description:
        "A Python-based vulnerability scanner that automates Nmap scans, parses XML output to structured JSON, and generates clear HTML reports. Includes a CLI for local scanning, optional Flask API + job-queue (RQ/Redis) for asynchronous web scans, and Docker support for deployment. Supports Nmap scripts, configurable scan profiles, and tools to compare scan results and export findings.",
      image: "/Network Security Scanner.png",
      technologies: [
        "Python",
        "Nmap",
        "python-nmap",
        "XML parsing (ElementTree / lxml)",
        "Jinja2 (HTML reports)",
        "Flask (optional web API)",
        "Redis / RQ (job queue)",
        "Docker",
        "Kali Linux / Linux",
        "Network Protocols & Security Testing"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/AbdulrahmanIbrahim1/Vulnerability-Scanner-Tool"
    },

  ]

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            A showcase of my work in full-stack development and cybersecurity
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="h-full group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:shadow-primary/20 h-full border-2 hover:border-primary/30 hover:scale-[1.02]">
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        asChild
                        variant={"secondary"}
                        size="sm"
                        className={`flex-1 transition-all duration-200 ${!project.liveUrl || project.liveUrl === "#" ? "opacity-50 pointer-events-none cursor-not-allowed" : "hover:shadow-lg hover:shadow-primary/25"
                          }`}>
                        <a
                          href={project.liveUrl && project.liveUrl !== "#" ? project.liveUrl : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent hover:bg-secondary/10 transition-all duration-200"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
