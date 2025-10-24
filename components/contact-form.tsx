"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8 animate-fade-in-up">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-gray-400">
            Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "hello@codeaklabs.com",
              href: "mailto:hello@codeaklabs.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+1 (555) 123-4567",
              href: "tel:+15551234567",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "San Francisco, CA",
              href: "#",
            },
          ].map((item) => (
            <a key={item.label} href={item.href} className="flex gap-4 group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white font-semibold group-hover:text-primary transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-sky-cyan text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </button>
      </form>
    </div>
  )
}
