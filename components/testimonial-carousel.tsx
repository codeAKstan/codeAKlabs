"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay, testimonials.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <Image
              src={testimonials[current].image || "/placeholder.svg"}
              alt={testimonials[current].name}
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-300 mb-6 italic">"{testimonials[current].content}"</p>
            <div>
              <p className="font-bold text-white">{testimonials[current].name}</p>
              <p className="text-primary text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="text-primary" size={24} />
        </button>
        <div className="flex gap-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-8" : "bg-border"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="text-primary" size={24} />
        </button>
      </div>
    </div>
  )
}
