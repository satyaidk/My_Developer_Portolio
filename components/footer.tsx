"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Youtube, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4 md:mb-0"
          >
            SatyaNarayana
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="mailto:satya@example.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} SatyaNarayana. All rights reserved.
          </p>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

