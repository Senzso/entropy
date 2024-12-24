'use client'

import { useState, useEffect } from 'react'

const TARGET_DATE = new Date('2024-12-24T02:00:00+01:00').getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calculateTimeLeft(): TimeLeft {
      const now = Date.now()
      const difference = TARGET_DATE - now
      
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

