import { render, screen } from '@testing-library/react'
import Logo from './Logo'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Logo Component', () => {
  it('should render logo text "Pokedex"', () => {
    render(<Logo />)
    expect(screen.getByText('Pokedex')).toBeInTheDocument()
  })

  it('should have "ID" suffix in red color', () => {
    render(<Logo />)
    const suffix = screen.getByText('ID')
    expect(suffix).toBeInTheDocument()
  })

  it('should have link to home page', () => {
    render(<Logo />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })

  
})
