import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

