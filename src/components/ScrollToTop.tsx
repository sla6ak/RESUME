import { useState, useEffect } from 'react'

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent-primary text-white shadow-lg flex items-center justify-center text-xl hover:bg-accent-hover transition-all hover:scale-110 z-50"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
