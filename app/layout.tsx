import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SatyaNarayana - AI/ML & Web3 Developer",
  description: "AI/ML Enthusiast | Web3 Developer | Cloud Computing Learner",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'