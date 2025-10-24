"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface CaseStudyPreviewProps {
  id: number
  title: string
  category: string
  image: string
  problem: string
  results: Record<string, string>
  link: string
}

export function CaseStudyPreview({ title, category, image, problem, results, link }: CaseStudyPreviewProps) {
  return (
    <div className="group cursor-pointer">
      <Link href={link}>
        <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-card border border-border hover:-translate-y-1 transition-all duration-300">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="space-y-2">
          <p className="text-primary text-sm font-semibold">{category}</p>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-400 line-clamp-2">{problem}</p>
          <div className="flex gap-4 pt-2">
            {Object.entries(results).map(([key, value]) => (
              <div key={key}>
                <p className="text-primary font-semibold">{value}</p>
                <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-primary pt-4 group-hover:gap-3 transition-all">
            <span className="font-semibold">View Case Study</span>
            <ArrowRight size={20} />
          </div>
        </div>
      </Link>
    </div>
  )
}
