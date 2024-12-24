import Image from 'next/image'

interface BackgroundProps {
  fadeOut: boolean
}

export default function Background({ fadeOut }: BackgroundProps) {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 pointer-events-none select-none">
      <div className="relative w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/95f8de75d538acd28d7a4f95109968c9-SVNfXpo9dQe8qjumyk2vQEzUr2Qn8Q.gif"
          alt="Spiral vortex"
          fill
          sizes="(max-width: 768px) 16rem, 24rem"
          className={`object-cover transition-opacity duration-1000 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
          draggable="false"
        />
      </div>
    </div>
  )
}

