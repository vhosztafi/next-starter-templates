import { http, HttpResponse } from 'msw'

export const handlers = [
  // Example API handler
  http.get('/api/health', () => {
    return HttpResponse.json({ ok: true, timestamp: new Date().toISOString() })
  }),

  // Add more handlers as needed
]
