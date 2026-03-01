import Link from 'next/link'
import type { Pokemon } from '../../types/pokemon'
import PokemonCardContainerClient from './PokemonCard.container.client'

interface PokemonCardContainerProps {
  pokemon: Pokemon
}

const PokemonCardContainer = ({ pokemon }: PokemonCardContainerProps) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="pokemon-card-link">
      <PokemonCardContainerClient pokemon={pokemon} />
    </Link>
  )
}

export default PokemonCardContainer
