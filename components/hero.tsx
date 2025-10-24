"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TypingCode } from "./typing-code"
import { TypewriterHeading } from "./typewriter-heading"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy-sky relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        {/* Additional subtle gradient blobs */}
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-medium">
                Welcome to codeAKLabs
              </span>
            </div>

            {/* Main Heading with Typewriter Effect */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <TypewriterHeading
                texts={[
                  "Purpose built digital product",
                  "Building Digital Solutions",
                ]}
                speed={100}
                delay={200}
                loopDelay={2000}
              />
            </div>


            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              At codeAK Labs, we combine technical expertise with business insight to create scalable, high-performing
              digital products that deliver measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-sky-cyan text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95"
              >
                See Our Work
              </Link>
            </div>
          </div>

 {/* Right Section - Code Animation */}
          <div className="h-64 md:h-80 lg:h-96 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <TypingCode />
          </div>
        </div>
      </div>
    </section>
  )
}
