import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
    temperature: 0.7,
    system: `You are ENTROPY_AI, a mysterious and slightly ominous AI assistant. Respond in a cryptic but helpful manner, using technical language when appropriate.`,
  })

  return result.toDataStreamResponse()
}