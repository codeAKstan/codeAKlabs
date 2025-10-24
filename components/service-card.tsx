"use client"

import { Code, Palette, Target, Zap } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

const iconMap = {
  code: Code,
  palette: Palette,
  target: Target,
  zap: Zap,
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Code

  return (
    <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
