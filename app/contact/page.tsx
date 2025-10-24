"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy-sky relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Work Together</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary based on scope and complexity. Most projects take between 4-12 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing support?",
                answer:
                  "Yes! We offer various support packages including maintenance, updates, and optimization. We can discuss the best option for your needs.",
              },
              {
                question: "What's your process?",
                answer:
                  "We follow a collaborative process: discovery, planning, design, development, testing, and launch. You'll be involved at every step.",
              },
              {
                question: "Can you work with existing systems?",
                answer:
                  "Absolutely. We have experience integrating with and improving existing systems, databases, and platforms.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
