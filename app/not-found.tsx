"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl font-bold text-gradient-sky-cyan mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-sky-cyan text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
