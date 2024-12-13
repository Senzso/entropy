'use client'

import { useState, useEffect, useRef } from 'react'

const COUNTDOWN_DURATION = 46 * 60 * 60 * 1000 + 6 * 60 * 1000; // 46 hours and 11 minutes in milliseconds

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const targetTimeRef = useRef(Date.now() + COUNTDOWN_DURATION)

  useEffect(() => {
    function calculateTimeLeft() {
      const now = Date.now()
      const difference = targetTimeRef.current - now
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    function updateTimer() {
      setTimeLeft(calculateTimeLeft())
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-black p-4 rounded-lg border border-white">
      <div className="grid grid-cols-4 gap-4 text-center">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-1">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs uppercase">{key}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

