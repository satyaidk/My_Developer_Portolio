"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Award, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    id: 1,
    role: "Senior AI Engineer",
    company: "TechInnovate",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading AI initiatives and developing machine learning models for enterprise clients. Integrating blockchain solutions with AI systems.",
  },
  {
    id: 2,
    role: "Blockchain Developer",
    company: "Web3 Solutions",
    period: "2020 - 2022",
    location: "Remote",
    description:
      "Developed smart contracts and decentralized applications. Implemented token economics and NFT marketplaces.",
  },
  {
    id: 3,
    role: "Cloud Architect",
    company: "CloudScale",
    period: "2018 - 2020",
    location: "Seattle, WA",
    description:
      "Designed and implemented scalable cloud infrastructure. Managed DevOps pipelines and containerized applications.",
  },
]

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Certified Blockchain Developer",
    issuer: "Blockchain Council",
    date: "2021",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Microsoft Azure AI Engineer",
    issuer: "Microsoft",
    date: "2021",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2020",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and industry-recognized certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 h-6 w-6 rounded-full bg-primary" />
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>

            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="h-16 w-16 relative flex-shrink-0">
                        <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

