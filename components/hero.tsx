"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Send, ArrowDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const skills = ["AI/ML Developer", "Web3 Engineer", "Cloud Architect", "DevOps Specialist", "Full-Stack Developer"]

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                SatyaNarayana Nikadi
              </span>
            </h1>
            <div className="h-12 mb-4">
              <motion.p
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                {skills[currentSkill]}
              </motion.p>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Building innovative solutions at the intersection of AI, blockchain, and cloud computing.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="gap-2">
              <FileText size={18} />
              View Resume
            </Button>
            <Button variant="outline" className="gap-2">
              <Send size={18} />
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-primary/20 p-2 bg-background/50 backdrop-blur-sm">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-400/20 rounded-full animate-pulse-slow absolute" />
                <div className="w-48 h-48 bg-purple-400/10 rounded-full animate-pulse-slower absolute" />
              </div>
              <div className="relative z-10">
                <Image
                  src="https://i.pinimg.com/originals/18/79/97/187997bbdeedabb3cb06e852c777236a.gif"
                  alt="AI Robot"
                  width={300}
                  height={300}
                  className="object-cover w-[300px] h-[300px] rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center mt-16"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce rounded-full"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown size={24} />
        </Button>
      </motion.div>
    </section>
  )
}

