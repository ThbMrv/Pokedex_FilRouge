import { render, screen, fireEvent, within } from '@testing-library/react'
import TypeFilter from './TypeFilter'
import { LanguageProvider } from '../../contexts/LanguageContext'

const TypeFilterWithProvider = (props: { selectedType?: string | null; onTypeChange?: (type: string | null) => void }) => (
  <LanguageProvider>
    <TypeFilter
      selectedType={props.selectedType ?? null}
      onTypeChange={props.onTypeChange ?? (() => { })}
    />
  </LanguageProvider>
)

describe('TypeFilter Component', () => {
  const mockOnTypeChange = jest.fn()

  beforeEach(() => {
    mockOnTypeChange.mockClear()
  })

  it('should render the type filter select', () => {
    render(<TypeFilterWithProvider onTypeChange={mockOnTypeChange} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should have "All Types" default option', () => {
    render(<TypeFilterWithProvider onTypeChange={mockOnTypeChange} />)
    fireEvent.mouseDown(screen.getByRole('combobox'))
    const listbox = screen.getByRole('listbox')
    expect(within(listbox).getByText('All Types')).toBeInTheDocument()
  })

  it('should call onTypeChange when selecting a type', () => {
    render(<TypeFilterWithProvider onTypeChange={mockOnTypeChange} selectedType={null} />)
    fireEvent.mouseDown(screen.getByRole('combobox'))
    const listbox = screen.getByRole('listbox')
    const normalOption = within(listbox).getByText(/Normal \(normal\)/)
    fireEvent.click(normalOption)
    expect(mockOnTypeChange).toHaveBeenCalledWith('normal')
  })

  it('should display "All Types" when selectedType is null', () => {
    render(<TypeFilterWithProvider selectedType={null} onTypeChange={mockOnTypeChange} />)
    fireEvent.mouseDown(screen.getByRole('combobox'))
    const listbox = screen.getByRole('listbox')
    const allTypesOption = within(listbox).getByText('All Types')
    expect(allTypesOption).toBeInTheDocument()
  })

  it('should show selected type value', () => {
    render(<TypeFilterWithProvider selectedType="water" onTypeChange={mockOnTypeChange} />)
    const select = screen.getByRole('combobox')
    expect(select).toHaveTextContent(/Eau \(water\)/)
  })
})
