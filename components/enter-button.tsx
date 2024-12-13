interface EnterButtonProps {
  onClick: () => void
}

export default function EnterButton({ onClick }: EnterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      aria-label="Enter the terminal"
    >
      Enter
    </button>
  )
}

