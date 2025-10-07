"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const html = document.documentElement
    if (isDarkMode) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle theme">
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
