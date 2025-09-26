import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'

describe('HomePage', () => {
  it('renders the main heading', async () => {
    const HomePageComponent = await HomePage()
    render(HomePageComponent)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js starter/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the description text', async () => {
    const HomePageComponent = await HomePage()
    render(HomePageComponent)

    const description = screen.getByText(/a modern next\.js starter template/i)

    expect(description).toBeInTheDocument()
  })

  it('renders the go to dashboard button', async () => {
    const HomePageComponent = await HomePage()
    render(HomePageComponent)

    const button = screen.getByRole('button', { name: /go to dashboard/i })

    expect(button).toBeInTheDocument()
  })
})
