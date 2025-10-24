"use client"

import { useEffect, useState } from "react"

interface TypingCodeProps {
  lines?: string[]
  speed?: number
}

export function TypingCode({
  lines = [
    "const project = 'codeAK Labs';",
    "const mission = 'Building business-driven apps';",
    "console.log('Transforming ideas into reality...');",
    "// Delivering measurable results",
  ],
  speed = 50,
}: TypingCodeProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const fullText = lines.join("\n")

  useEffect(() => {
    if (displayedText.length < fullText.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else if (displayedText.length === fullText.length && isTyping) {
      const delayTimer = setTimeout(() => {
        setDisplayedText("")
      }, 2000)
      return () => clearTimeout(delayTimer)
    }
  }, [displayedText, fullText, isTyping, speed])

  return (
    <div className="relative w-full h-full">
      {/* Code editor window frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light/80 to-navy/80 rounded-xl border border-primary/30 overflow-hidden shadow-2xl">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-navy/60 border-b border-primary/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-gray-400 ml-2 font-mono">project.ts</span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-sm overflow-hidden h-full">
          <div className="text-cyan/80 whitespace-pre-wrap break-words">
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      </div>

      {/* Background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl -z-10 opacity-50" />
    </div>
  )
}
