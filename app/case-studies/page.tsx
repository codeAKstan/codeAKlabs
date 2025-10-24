"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudyPreview } from "@/components/case-study-preview"
import { caseStudies } from "@/lib/data"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy-sky relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore how we've helped businesses achieve their goals through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="animate-fade-in-up">
                <CaseStudyPreview {...study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
