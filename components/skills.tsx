"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Braces, Database, Cloud, Code2, Cpu, LayoutGrid } from "lucide-react"
import Image from "next/image"

const skillCategories = [
  {
    name: "Programming",
    icon: <Braces className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Solidity", level: 75 },
      { name: "Go", level: 65 },
    ],
  },
  {
    name: "AI/ML",
    icon: <Cpu className="h-6 w-6" />,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "OpenAI API", level: 90 },
      { name: "Computer Vision", level: 75 },
      { name: "NLP", level: 85 },
    ],
  },
  {
    name: "Web3",
    icon: <LayoutGrid className="h-6 w-6" />,
    skills: [
      { name: "Ethereum", level: 85 },
      { name: "Solidity", level: 80 },
      { name: "Hardhat", level: 75 },
      { name: "IPFS", level: 70 },
      { name: "Web3.js", level: 85 },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Terraform", level: 70 },
    ],
  },
  {
    name: "Frontend",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[400px] w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl blur-3xl" />
            <div className="relative h-full w-full rounded-xl overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-indigo-400/10 rounded-full animate-spin-slow absolute" />
                <div className="w-80 h-80 bg-purple-400/10 rounded-full animate-spin-slower absolute" />
              </div>
              <div className="relative z-10 w-full h-full overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/31/0c/01/310c01c73482df38de2cfb113be5c4a6.gif"
                  alt="AI Technology"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6">
              My technical journey spans multiple domains, with a focus on emerging technologies. I continuously expand
              my skill set to stay at the forefront of technological innovation.
            </p>
            <p className="text-lg mb-6">
              I believe in the power of combining different technologies to create innovative solutions. My diverse
              skill set allows me to approach problems from multiple angles and implement comprehensive solutions.
            </p>
            <p className="text-lg">
              Whether it's developing AI models, creating blockchain applications, or architecting cloud solutions, I
              bring a holistic approach to every project.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden group-hover:bg-muted/70 transition-colors duration-300">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

