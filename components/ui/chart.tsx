import type React from "react"

export const Radar = () => {
  return null
}

export const RadarChart = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const PolarGrid = () => {
  return null
}

export const PolarAngleAxis = ({ dataKey }: { dataKey: string }) => {
  return null
}

export const PolarRadiusAxis = ({ angle, domain }: { angle: number; domain: number[] }) => {
  return null
}

export const ResponsiveContainer = ({
  children,
  width,
  height,
}: { children: React.ReactNode; width: string | number; height: string | number }) => {
  return <div style={{ width: width, height: height }}>{children}</div>
}

