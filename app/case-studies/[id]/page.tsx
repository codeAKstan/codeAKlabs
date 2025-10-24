"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { caseStudies } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface CaseStudyDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { id } = await params
  const caseStudy = caseStudies.find((study) => study.link === `/case-studies/${id}`)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-navy-sky">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>

          <div className="animate-fade-in-up">
            <p className="text-primary text-sm font-semibold mb-4">{caseStudy.category}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-gray-300">{caseStudy.problem}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 rounded-lg overflow-hidden border border-border animate-fade-in-up">
            <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Problem & Approach */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">The Problem</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{caseStudy.problem}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{caseStudy.approach}</p>
              </div>
            </div>

            {/* Results */}
            <div
              className="bg-card border border-border rounded-lg p-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Results</h2>
              <div className="space-y-6">
                {Object.entries(caseStudy.results).map(([key, value]) => (
                  <div key={key} className="border-b border-border pb-6 last:border-b-0">
                    <p className="text-primary text-3xl font-bold mb-2">{value}</p>
                    <p className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy-sky">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-sky-cyan text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
