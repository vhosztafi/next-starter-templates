import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll, vi } from 'vitest'
import { server } from '../msw/server'

// Mock Auth0 functions
vi.mock('@/lib/auth', () => ({
  getSession: vi.fn().mockResolvedValue({
    user: {
      sub: 'test-user-id',
      email: 'test@example.com',
      name: 'Test User',
      picture: 'https://example.com/avatar.jpg',
      email_verified: true,
      updated_at: new Date().toISOString(),
    },
    accessToken: 'mock-access-token',
    idToken: 'mock-id-token',
    refreshToken: 'mock-refresh-token',
  }),
  requireUser: vi.fn().mockResolvedValue({
    sub: 'test-user-id',
    email: 'test@example.com',
    name: 'Test User',
    picture: 'https://example.com/avatar.jpg',
    email_verified: true,
    updated_at: new Date().toISOString(),
  }),
}))

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
