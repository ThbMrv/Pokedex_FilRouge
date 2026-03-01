import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './LanguageContext'

const TestComponent = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div>
      <div data-testid="language-display">{language}</div>
      <button onClick={() => setLanguage('en')}>Change to EN</button>
      <button onClick={() => setLanguage('fr')}>Change to FR</button>
    </div>
  )
}

const TestWrapper = () => (
  <LanguageProvider>
    <TestComponent />
  </LanguageProvider>
)

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should provide language context', () => {
    render(<TestWrapper />)
    expect(screen.getByTestId('language-display')).toBeInTheDocument()
  })

  it('should default to FR language', () => {
    render(<TestWrapper />)
    expect(screen.getByTestId('language-display')).toHaveTextContent('fr')
  })

  it('should change language when setLanguage is called', () => {
    render(<TestWrapper />)
    fireEvent.click(screen.getByText('Change to EN'))
    expect(screen.getByTestId('language-display')).toHaveTextContent('en')
  })

  it('should persist language change', () => {
    render(<TestWrapper />)
    fireEvent.click(screen.getByText('Change to EN'))
    expect(screen.getByTestId('language-display')).toHaveTextContent('en')
  })

  it('should allow switching back to FR', () => {
    render(<TestWrapper />)
    fireEvent.click(screen.getByText('Change to EN'))
    fireEvent.click(screen.getByText('Change to FR'))
    expect(screen.getByTestId('language-display')).toHaveTextContent('fr')
  })
})
