'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CopyableTextProps {
  text: string
}

export default function CopyableText({ text }: CopyableTextProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative bg-black/70 backdrop-blur-sm rounded px-4 py-2 flex items-center justify-between w-full max-w-xs">
      <input
        type="text"
        value={text}
        readOnly
        className="bg-transparent text-white font-mono text-sm focus:outline-none w-full"
      />
      <button
        onClick={copyToClipboard}
        className="ml-2 text-white/70 hover:text-white transition-colors focus:outline-none"
        aria-label="Copy to clipboard"
      >
        {isCopied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  )
}

