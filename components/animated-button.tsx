"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary"
}

export function AnimatedButton({ href, children, variant = "primary" }: AnimatedButtonProps) {
  const baseClasses = "px-8 py-4 font-semibold rounded-lg transition-all duration-200 inline-block"
  const variantClasses = {
    primary: "bg-gradient-sky-cyan text-navy hover:shadow-lg hover:shadow-primary/50",
    secondary: "border border-primary text-primary hover:bg-primary/10",
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
        {children}
      </Link>
    </motion.div>
  )
}
