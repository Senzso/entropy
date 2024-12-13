interface BackgroundProps {
  fadeOut: boolean
}

export default function Background({ fadeOut }: BackgroundProps) {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/157084787880c1ead98ec92332da7094-XOFDv2Dw0jCjQsKvrSd1HGSTyweDH3.gif"
        alt="Spiral vortex"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}

