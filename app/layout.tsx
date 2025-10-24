import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "codeAKLabs - Digital Solutions & Web Development",
  description:
    "Transform your business with cutting-edge digital solutions. Expert web development, design, and strategy.",
  generator: "v0.app",
  openGraph: {
    title: "codeAKLabs - Digital Solutions & Web Development",
    description: "Transform your business with cutting-edge digital solutions.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect fill="%2338BDF8" width="32" height="32" rx="8"/><text x="50%" y="50%" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="middle">AK</text></svg>',
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
