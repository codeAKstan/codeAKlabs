"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/data"
import Image from "next/image"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy-sky relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative projects we've built across various industries and technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer animate-fade-in-up">
                <div className="relative overflow-hidden rounded-lg mb-4 h-80 bg-card border border-border hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-light">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life. Get in touch with our team today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-sky-cyan text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
