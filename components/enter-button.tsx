import { useEffect, useState } from 'react'

interface EnterButtonProps {
  onClick: () => void
}

export default function EnterButton({ onClick }: EnterButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <button
      onClick={onClick}
      className={`
        z-10 bg-white text-black px-8 py-3 rounded-full font-bold text-lg
        transition-all duration-1000 ease-in-out
        hover:scale-105 hover:shadow-lg hover:shadow-white/20
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      aria-label="Enter the terminal"
    >
      Enter
    </button>
  )
}

