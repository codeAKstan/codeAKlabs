"use client"

import { useEffect, useState } from "react"

interface TypewriterHeadingProps {
  text?: string
  texts?: string[]
  speed?: number
  delay?: number
  loop?: boolean
  loopDelay?: number
}

export function TypewriterHeading({
  text,
  texts,
  speed = 50,
  delay = 0,
  loop = false,
  loopDelay = 2000,
}: TypewriterHeadingProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Determine the current text to type (single or sequence)
  const currentText = texts && texts.length > 0 ? texts[currentIndex] : (text ?? "")

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(delayTimer)
  }, [delay])

  useEffect(() => {
    if (!isVisible) return

    if (displayedText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else if (texts && texts.length > 0 && displayedText.length === currentText.length) {
      // When a sequence is provided, cycle through messages
      const resetTimer = setTimeout(() => {
        setDisplayedText("")
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }, loopDelay)
      return () => clearTimeout(resetTimer)
    } else if (!texts && loop && displayedText.length === currentText.length) {
      // Single text looping behavior
      const resetTimer = setTimeout(() => {
        setDisplayedText("")
      }, loopDelay)
      return () => clearTimeout(resetTimer)
    }
  }, [displayedText, currentText, isVisible, speed, loop, loopDelay, texts, currentIndex])

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
      {displayedText}
      {displayedText.length < currentText.length && <span className="animate-pulse">|</span>}
    </h1>
  )
}
