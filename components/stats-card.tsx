"use client"

import { useEffect, useState } from "react"

interface StatsCardProps {
  label: string
  value: number
  suffix?: string
}

export function StatsCard({ label, value, suffix = "" }: StatsCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl md:text-5xl font-bold text-gradient-sky-cyan mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}
