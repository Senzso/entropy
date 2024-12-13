'use client'

import { useState } from 'react'
import Background from '../components/background'
import Terminal from '../components/terminal'
import EnterButton from '../components/enter-button'
import CountdownTimer from '../components/countdown-timer'

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative">
      <Background fadeOut={showTerminal} />
      <div className="flex flex-col items-center space-y-12 z-10">
        <CountdownTimer />
        {!showTerminal && <EnterButton onClick={() => setShowTerminal(true)} />}
      </div>
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </main>
  )
}

