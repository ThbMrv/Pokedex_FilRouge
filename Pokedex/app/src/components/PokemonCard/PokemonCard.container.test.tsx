import { render, screen } from '@testing-library/react'
import PokemonCardContainer from './PokemonCard.container'
import { LanguageProvider } from '../../contexts/LanguageContext'
import type { Pokemon } from '../../types/pokemon'

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

const PokemonCardWithProvider = ({ pokemon }: { pokemon: Pokemon }) => (
  <LanguageProvider>
    <PokemonCardContainer pokemon={pokemon} />
  </LanguageProvider>
)

describe('PokemonCardContainer Component', () => {
  const mockPokemon: Pokemon = {
    id: 1,
    image: 'https://example.com/bulbasaur.png',
    names: { fr: 'Bulbizarre', en: 'Bulbasaur', 'zh-Hans': '妙蛙种子', ja: 'フシギダネ', it: 'Bulbassauro', es: 'Bulbassaur', de: 'Bisaknosp', 'zh-Hant': '妙蛙種子', ko: '이상해씨', roomaji: 'Fushigidane', 'ja-Hrkt': 'フシギダネ' },
    types: ['grass', 'poison'],
    moves: ['razor-wind', 'swords-dance'],
    height: 7,
    weight: 69,
  }

  it('should wrap card with Link to pokemon detail', () => {
    render(<PokemonCardWithProvider pokemon={mockPokemon} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/pokemon/1')
  })

  it('should render pokemon card inside Link', () => {
    render(<PokemonCardWithProvider pokemon={mockPokemon} />)
    expect(screen.getByText('Bulbizarre')).toBeInTheDocument()
  })

  it('should pass correct pokemon ID to Link', () => {
    const pokemon = { ...mockPokemon, id: 25 }
    render(<PokemonCardWithProvider pokemon={pokemon} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/pokemon/25')
  })
})
