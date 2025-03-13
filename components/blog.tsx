"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Systems with TensorFlow and Kubernetes",
    excerpt: "Learn how to deploy and scale AI models using TensorFlow and Kubernetes for production environments.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop",
    date: "Mar 15, 2023",
    readTime: "8 min read",
    url: "#",
  },
  {
    id: 2,
    title: "Smart Contract Security: Best Practices for Web3 Developers",
    excerpt:
      "Explore the essential security practices every blockchain developer should follow when writing smart contracts.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
    date: "Feb 22, 2023",
    readTime: "10 min read",
    url: "#",
  },
  {
    id: 3,
    title: "Serverless Architecture: When and Why to Use It",
    excerpt: "A comprehensive guide to serverless architecture, its benefits, limitations, and ideal use cases.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
    date: "Jan 10, 2023",
    readTime: "7 min read",
    url: "#",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on AI, blockchain, cloud computing, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="gap-2 p-0" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read More <ArrowRight size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="gap-2">
            <ExternalLink size={16} />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

