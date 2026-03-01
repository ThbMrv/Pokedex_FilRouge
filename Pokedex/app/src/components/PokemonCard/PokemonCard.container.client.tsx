'use client'

import type { Pokemon, TypesData } from '../../types/pokemon'
import typesDataRaw from '../../data/types.json'
import PokemonCardView from './PokemonCard.view'
import { useLanguage } from '../../contexts/LanguageContext'

const typesData = typesDataRaw as TypesData

interface PokemonCardContainerClientProps {
  pokemon: Pokemon
}

const PokemonCardContainerClient = ({ pokemon }: PokemonCardContainerClientProps) => {
  const { language } = useLanguage()
  const formattedId = `No.${pokemon.id.toString().padStart(3, '0')}`

  const types = pokemon.types.map((type) => {
    const typeData = typesData[type]
    return {
      name: type,
      color: typeData?.backgroundColor || '#777',
      translatedName:
        typeData?.translations[language as 'fr' | 'en'].toUpperCase() || type.toUpperCase(),
    }
  })

  const pokemonName = pokemon.names[language as 'fr' | 'en']

  return (
    <PokemonCardView
      formattedId={formattedId}
      names={pokemon.names}
      image={pokemon.image}
      types={types}
      pokemonName={pokemonName}
    />
  )
}

export default PokemonCardContainerClient
