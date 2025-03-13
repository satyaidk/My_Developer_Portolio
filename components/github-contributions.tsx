"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, GitFork, Star, GitPullRequest, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Contribution {
  date: string
  count: number
}

interface GitHubStats {
  totalContributions: number
  repositories: number
  pullRequests: number
  stars: number
}

// CONFIGURATION: Change this to your GitHub username
const GITHUB_USERNAME = "satyaidk"

export default function GitHubContributions() {
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    repositories: 0,
    pullRequests: 0,
    stars: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true)
      setError("")

      try {
        // In a real implementation, you would call your backend API that uses the GitHub API
        // For demo purposes, we'll simulate a delay and generate random data
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Generate mock data for demonstration
        const mockContributions = Array.from({ length: 365 }, (_, i) => {
          const date = new Date()
          date.setDate(date.getDate() - i)
          return {
            date: date.toISOString().split("T")[0],
            count: Math.floor(Math.random() * 10),
          }
        }).reverse()

        const mockStats = {
          totalContributions: 2547,
          repositories: 45,
          pullRequests: 238,
          stars: 892,
        }

        setContributions(mockContributions)
        setStats(mockStats)
      } catch (err) {
        console.error("Error fetching GitHub data:", err)
        setError("Failed to fetch GitHub data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-muted"
    if (count <= 3) return "bg-primary/30"
    if (count <= 6) return "bg-primary/60"
    return "bg-primary"
  }

  return (
    <section id="github" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            GitHub
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source Contributions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My GitHub activity and contributions to the open-source community.
          </p>
          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                View GitHub Profile
                <ExternalLink size={14} />
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Github />, label: "Contributions", value: stats.totalContributions },
            { icon: <GitFork />, label: "Repositories", value: stats.repositories },
            { icon: <GitPullRequest />, label: "Pull Requests", value: stats.pullRequests },
            { icon: <Star />, label: "Stars Earned", value: stats.stars },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    {loading ? (
                      <Skeleton className="h-8 w-20" />
                    ) : (
                      <p className="text-2xl font-bold">{stat.value.toLocaleString()}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Contribution Activity</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Less</span>
                <div className="w-3 h-3 rounded-sm bg-muted"></div>
                <div className="w-3 h-3 rounded-sm bg-primary/30"></div>
                <div className="w-3 h-3 rounded-sm bg-primary/60"></div>
                <div className="w-3 h-3 rounded-sm bg-primary"></div>
                <span className="text-xs text-muted-foreground">More</span>
              </div>
            </div>

            {loading ? (
              <Skeleton className="h-20 w-full" />
            ) : error ? (
              <p className="text-destructive text-sm">{error}</p>
            ) : (
              <div className="overflow-x-auto">
                <div className="inline-grid grid-cols-53 gap-1">
                  {contributions.map((contribution, index) => (
                    <motion.div
                      key={contribution.date}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.001 }}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(contribution.count)}`}
                      title={`${contribution.count} contributions on ${contribution.date}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

