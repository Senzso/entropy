'use client'

import { useState, useEffect } from 'react'
import { digital7 } from '../app/fonts'

const COUNTDOWN_TARGET = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +COUNTDOWN_TARGET - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`${digital7.className} text-white text-6xl tracking-wider animate-glow`}>
      <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-white/20">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div>{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-xs uppercase mt-1">Days</div>
          </div>
          <div>
            <div>{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs uppercase mt-1">Hours</div>
          </div>
          <div>
            <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs uppercase mt-1">Minutes</div>
          </div>
          <div>
            <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs uppercase mt-1">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}

