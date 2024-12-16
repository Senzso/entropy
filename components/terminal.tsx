'use client'

import { useState, useRef, useEffect } from 'react'
import { TerminalIcon, X, Send } from 'lucide-react'
import { useChat } from 'ai/react'
import Image from 'next/image'

interface TerminalProps {
  onClose: () => void
}

export default function Terminal({ onClose }: TerminalProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className={`
      relative z-10 w-full max-w-3xl pointer-events-auto
      shadow-2xl transition-all duration-1000 ease-in-out overflow-hidden rounded-lg
      ${isMinimized ? 'h-16' : 'h-[80vh]'}
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    `}>
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-pulse-slow">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bc1c4eb282f3f00e950ab1b9945bd41e-2pF4BtFyk5tX21ISPVSSQB3nKWfIz1.gif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover animate-scale"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Terminal Content */}
      <div className="relative flex flex-col h-full">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-5 h-5" />
            <span className="font-mono text-sm">ENTROPY_AI v1.0.0</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="hover:text-white/70 transition-colors"
              aria-label={isMinimized ? "Maximize terminal" : "Minimize terminal"}
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="hover:text-white/70 transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Terminal Messages */}
        <div className={`
          flex-grow overflow-y-auto p-4 select-text
          transition-all duration-500
          ${isMinimized ? 'opacity-0' : 'opacity-100'}
        `}>
          {messages.map((message, i) => (
            <div
              key={i}
              className={`mb-4 font-mono text-sm ${
                message.role === 'user' ? 'text-green-400' : 'text-white/90'
              }`}
            >
              <span className="opacity-50">{message.role === 'user' ? '>' : '#'}</span> {message.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className={`
          p-4 border-t border-white/10 bg-black/50
          transition-all duration-500
          ${isMinimized ? 'opacity-0' : 'opacity-100'}
        `}>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-mono">{'>'}</span>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Enter your command..."
              className="w-full bg-transparent border-none outline-none font-mono text-sm text-white/90 placeholder:text-white/30"
              aria-label="Chat input"
            />
            <button type="submit" className="text-white/70 hover:text-white transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

