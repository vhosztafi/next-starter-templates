import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Only run MSW in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const worker = setupWorker(...handlers)
  worker.start()
}
