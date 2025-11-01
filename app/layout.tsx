import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Abdelrahman Ibrahim | Cybersecurity Engineer & Full-Stack Developer",
  description:
    "Explore Abdelrahman Ibrahim's professional portfolio — a Computer Science graduate passionate about cybersecurity, backend, and full-stack web development. Discover projects, achievements, and contact information.",
  keywords: [
    "Abdelrahman Ibrahim",
    "Cybersecurity Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "Next.js Developer",
    "Web Security",
    "Computer Science Graduate", "react developer", "frontend developer", "backend developer",
    "عبدالرحمن ابراهيم ",
    "مهندس امن سيبراني",
    "مطور ويب متكامل",
    "محفظة مشاريع",
    "تطوير الويب",
    "تطوير الواجهة الخلفية",
    "مشاريع البرمجة",
    "مهارات البرمجة",
    "اتصل بي",
  ],
  authors: [{ name: "Abdelrahman Ibrahim", url: "https://abdelrahman-ibrahim11.vercel.app" }],
  metadataBase: new URL("https://abdelrahman-ibrahim11.vercel.app"),
  openGraph: {
    title: "Abdelrahman Ibrahim | Cybersecurity Engineer & Full-Stack Developer",
    description:
      "Portfolio showcasing Abdelrahman Ibrahim's cybersecurity projects, web development skills, and achievements.",
    url: "https://abdelrahman-ibrahim11.vercel.app",
    siteName: "Abdelrahman Ibrahim Portfolio",
    images: [
      {
        url: "https://abdelrahman-ibrahim11.vercel.app/prof3.png",
        width: 1200,
        height: 630,
        alt: "Abdelrahman Ibrahim Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Ibrahim | Cybersecurity Engineer & Full-Stack Developer",
    description:
      "Explore Abdelrahman Ibrahim's cybersecurity and web development portfolio.",
    images: ["https://abdelrahman-ibrahim11.vercel.app/prof3.png"],
    creator: "@abdelrahman_ibrahim",
  },
  alternates: {
    canonical: "https://abdelrahman-ibrahim11.vercel.app",
  },
  icons: {
    icon: "/online-resume.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ScrollProgress />
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
