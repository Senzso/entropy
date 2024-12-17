'use client'

import { useState } from 'react'
import Background from '../components/background'
import Terminal from '../components/terminal'
import EnterButton from '../components/enter-button'
import IconRefresher from '../components/IconRefresher'
import CountdownTimer from '../components/countdown-timer'
import CopyableText from '../components/copyable-text'

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative">
      <IconRefresher />
      <Background fadeOut={showTerminal} />
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <CopyableText text="BhVNPyqpogyFsAnuEXHp3UCWfnEG6Y1hJwgLccyQpump" />
      </div>
      <div className="flex flex-col items-center space-y-8 z-10">
        <CountdownTimer />
        {!showTerminal && <EnterButton onClick={() => setShowTerminal(true)} />}
      </div>
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </main>
  )
}

