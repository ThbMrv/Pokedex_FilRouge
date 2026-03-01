// app/not-found.test.tsx

import { render, screen } from '@testing-library/react'
import NotFound from './not-found'

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('NotFound Page (404)', () => {
  it('should render 404 error message', () => {
    render(<NotFound />)
    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })

  it('should render the not found description', () => {
    render(<NotFound />)
    expect(
      screen.getByText(/Désolé, la page que vous cherchez n'existe pas/i),
    ).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<NotFound />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })

})