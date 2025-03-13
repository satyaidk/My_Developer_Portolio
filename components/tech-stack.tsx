"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const techCategories = [
  {
    name: "Programming Languages",
    items: [
      {
        name: "Python",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        color: "#3776AB",
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        color: "#3178C6",
      },
      {
        name: "Solidity",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg",
        color: "#363636",
      },
      {
        name: "Go",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
        color: "#00ADD8",
      },
      {
        name: "Rust",
        logo: "https://www.rust-lang.org/logos/rust-logo-512x512.png",
        color: "#000000",
      },
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      {
        name: "TensorFlow",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
        color: "#FF6F00",
      },
      {
        name: "PyTorch",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
        color: "#EE4C2C",
      },
      {
        name: "Scikit-learn",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        color: "#F7931E",
      },
      {
        name: "Keras",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg",
        color: "#D00000",
      },
      {
        name: "Hugging Face",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        color: "#FFBD59",
      },
      { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", color: "#412991" },
    ],
  },
  {
    name: "Web & Frontend",
    items: [
      {
        name: "React",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        color: "#000000",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        color: "#06B6D4",
      },
      {
        name: "Vue.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        color: "#4FC08D",
      },
      {
        name: "Angular",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
        color: "#DD0031",
      },
      {
        name: "Svelte",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
        color: "#FF3E00",
      },
    ],
  },
  {
    name: "Backend & Databases",
    items: [
      {
        name: "Node.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        color: "#339933",
      },
      {
        name: "Express",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        color: "#000000",
      },
      {
        name: "MongoDB",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
      },
      {
        name: "PostgreSQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        color: "#336791",
      },
      {
        name: "GraphQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
        color: "#E10098",
      },
      {
        name: "Redis",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
        color: "#DC382D",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      {
        name: "Docker",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        color: "#2496ED",
      },
      {
        name: "Kubernetes",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
        color: "#326CE5",
      },
      {
        name: "AWS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
        color: "#FF9900",
      },
      {
        name: "Google Cloud",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
        color: "#4285F4",
      },
      {
        name: "Azure",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
        color: "#0078D4",
      },
      {
        name: "GitHub Actions",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        color: "#2088FF",
      },
    ],
  },
  {
    name: "Blockchain & Web3",
    items: [
      {
        name: "Ethereum",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
        color: "#627EEA",
      },
      { name: "Hardhat", logo: "https://hardhat.org/_next/static/media/hardhat-logo.5c5f687b.svg", color: "#FFF100" },
      { name: "Truffle", logo: "https://trufflesuite.com/img/truffle-logo-dark.svg", color: "#5E464D" },
      { name: "IPFS", logo: "https://docs.ipfs.tech/images/ipfs-logo.svg", color: "#65C2CB" },
      {
        name: "Web3.js",
        logo: "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
        color: "#F16822",
      },
      {
        name: "Ethers.js",
        logo: "https://raw.githubusercontent.com/ethers-io/ethers.js/main/docs/logo.svg",
        color: "#1C2C4C",
      },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Programming Languages & Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div
                          className="w-16 h-16 rounded-lg flex items-center justify-center p-2 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <div className="relative w-12 h-12">
                            <Image
                              src={item.logo || "/placeholder.svg"}
                              alt={item.name}
                              width={48}
                              height={48}
                              className="object-contain transition-transform duration-300 hover:rotate-3"
                              unoptimized
                            />
                          </div>
                        </div>
                        <span className="text-xs font-medium text-center">{item.name}</span>
                      </motion.div>
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

