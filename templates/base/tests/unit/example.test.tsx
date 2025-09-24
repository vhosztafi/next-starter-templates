import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js starter/i,
    })
    
    expect(heading).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<HomePage />)
    
    const description = screen.getByText(
      /a modern next\.js starter template/i
    )
    
    expect(description).toBeInTheDocument()
  })

  it('renders the get started button', () => {
    render(<HomePage />)
    
    const button = screen.getByRole('button', { name: /get started/i })
    
    expect(button).toBeInTheDocument()
  })
})
