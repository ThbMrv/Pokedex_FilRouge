import { render, screen } from '@testing-library/react'
import PokemonCardView from './PokemonCard.view'

describe('PokemonCardView Component', () => {
  const mockProps = {
    formattedId: 'No.001',
    image: 'https://example.com/bulbasaur.png',
    types: [
      { name: 'grass', color: '#7AC74C', translatedName: 'PLANTE' },
      { name: 'poison', color: '#A33EA1', translatedName: 'POISON' },
    ],
    pokemonName: 'Bulbizarre',
  }

  it('should render pokemon ID correctly', () => {
    render(<PokemonCardView {...mockProps} />)
    expect(screen.getByText('No.001')).toBeInTheDocument()
  })

  it('should render pokemon name', () => {
    render(<PokemonCardView {...mockProps} />)
    expect(screen.getByText('Bulbizarre')).toBeInTheDocument()
  })

  it('should render pokemon image with correct alt text', () => {
    render(<PokemonCardView {...mockProps} />)
    const img = screen.getByAltText('Bulbizarre') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toBe('https://example.com/bulbasaur.png')
  })

  it('should render all type badges', () => {
    render(<PokemonCardView {...mockProps} />)
    expect(screen.getByText('PLANTE')).toBeInTheDocument()
    expect(screen.getByText('POISON')).toBeInTheDocument()
  })

  it('should render card with flexbox layout', () => {
    const { container } = render(<PokemonCardView {...mockProps} />)
    const card = container.firstChild
    expect(card).toBeInTheDocument()
  })

  it('should have correct number of type badges', () => {
    render(<PokemonCardView {...mockProps} />)
    const badges = screen.getAllByText(/PLANTE|POISON/)
    expect(badges).toHaveLength(2)
  })
})
