import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('themaResume')
    if (stored !== null) {
      setIsDark(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev
      localStorage.setItem('themaResume', JSON.stringify(next))
      return next
    })
  }

  return { isDark, toggleTheme }
}
