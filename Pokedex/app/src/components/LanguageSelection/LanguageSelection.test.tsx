import { render, screen, fireEvent, within } from '@testing-library/react'
import LanguageSelection from './LanguageSelection'
import { LanguageProvider } from '../../contexts/LanguageContext'

const LanguageSelectionWithProvider = () => (
  <LanguageProvider>
    <LanguageSelection />
  </LanguageProvider>
)

describe('LanguageSelection Component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should render language select', () => {
    render(<LanguageSelectionWithProvider />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
  })

  it('should have FR and EN options', () => {
    render(<LanguageSelectionWithProvider />)
    fireEvent.mouseDown(screen.getByRole('combobox'))
    const listbox = screen.getByRole('listbox')
    const options = within(listbox).getAllByRole('option')
    expect(options).toHaveLength(2)
    expect(options[0]).toHaveTextContent('🇫🇷 FR')
    expect(options[1]).toHaveTextContent('🇬🇧 EN')
  })

  it('should default to FR', () => {
    render(<LanguageSelectionWithProvider />)
    const select = screen.getByRole('combobox')
    expect(select).toHaveTextContent('🇫🇷 FR')
  })

  it('should change language when selecting EN', () => {
    render(<LanguageSelectionWithProvider />)
    fireEvent.mouseDown(screen.getByRole('combobox'))
    const listbox = screen.getByRole('listbox')
    fireEvent.click(within(listbox).getByText('🇬🇧 EN'))
    expect(screen.getByRole('combobox')).toHaveTextContent('🇬🇧 EN')
  })

  it('should update language when select changes', () => {
    render(<LanguageSelectionWithProvider />)
    expect(screen.getByRole('combobox')).toHaveTextContent('🇫🇷 FR')
    fireEvent.mouseDown(screen.getByRole('combobox'))
    const listbox = screen.getByRole('listbox')
    fireEvent.click(within(listbox).getByText('🇬🇧 EN'))
    expect(screen.getByRole('combobox')).toHaveTextContent('🇬🇧 EN')
  })
})
