"use client"

import Image from "next/image"

interface WhatsAppWidgetProps {
  phoneNumber?: string
}

export default function WhatsAppWidget({ phoneNumber = "2348052923367" }: WhatsAppWidgetProps) {
  const href = `https://wa.me/${phoneNumber}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform"
    >
      <Image src="/wa.png" alt="WhatsApp" width={28} height={28} className="opacity-90" />
    </a>
  )
}