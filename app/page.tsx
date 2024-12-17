'use client'

import { useState } from 'react'
import Background from '../components/background'
import Terminal from '../components/terminal'
import EnterButton from '../components/enter-button'
import BuyButton from '../components/buy-button'
import CountdownTimer from '../components/countdown-timer'
import IconRefresher from '../components/IconRefresher'

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative">
      <IconRefresher />
      <Background fadeOut={showTerminal} />
      <div className="flex flex-col items-center space-y-8 z-10">
        <CountdownTimer />
        {!showTerminal && (
          <div className="flex space-x-4">
            <EnterButton onClick={() => setShowTerminal(true)} />
            <BuyButton />
          </div>
        )}
      </div>
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </main>
  )
}

