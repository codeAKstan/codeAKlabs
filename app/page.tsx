"use client"

import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { StatsCard } from "@/components/stats-card"
import { CaseStudyPreview } from "@/components/case-study-preview"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { services, caseStudies, stats, testimonials } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="animate-fade-in-up">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">By The Numbers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Our track record speaks for itself.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="animate-fade-in-up">
                <StatsCard label={stat.label} value={stat.value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how we've helped businesses transform through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="animate-fade-in-up">
                <CaseStudyPreview {...study} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <a
              href="/case-studies"
              className="inline-block px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy-sky relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-sky-cyan text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
