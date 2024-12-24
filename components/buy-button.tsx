import Link from 'next/link'

export default function BuyButton() {
  return (
    <Link
      href="https://pump.fun/coin/9cJCMsekuFKSJdpMaSEYpVpKXdkV3PKTdpjeaDupump"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      Buy
    </Link>
  )
}

