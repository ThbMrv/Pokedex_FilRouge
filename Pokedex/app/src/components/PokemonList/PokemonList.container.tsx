'use client'

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import PokemonListView from './PokemonList.view'
import type { Pokemon } from '../../types/pokemon'
import { useLanguage } from '../../contexts/LanguageContext'

const emptySubscribe = () => () => {}

const PokemonListContainer = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { language } = useLanguage()

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  const [searchTerm, setSearchTerm] = useState(() => searchParams.get('search') || '')
  const [selectedType, setSelectedType] = useState<string | null>(() => searchParams.get('type') || null)

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchPokemons = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json', {
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data = (await response.json()) as Pokemon[]

        if (isMounted) {
          setPokemons(data)
        }
      } catch (e) {
        if (isMounted) {
          const message = e instanceof Error ? e.message : 'Erreur inconnue'
          setError(message)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchPokemons()

    return () => {
      isMounted = false
    }
  }, [])

  const updateQueryParams = (search: string, type: string | null) => {
    const params = new URLSearchParams()
    if (search) params.set('search', search)
    if (type) params.set('type', type)

    const queryString = params.toString()
    router.push(queryString ? `?${queryString}` : '?', { scroll: false })
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    updateQueryParams(term, selectedType)
  }

  const handleTypeChange = (type: string | null) => {
    setSelectedType(type)
    updateQueryParams(searchTerm, type)
  }

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const name = pokemon.names[language as 'fr' | 'en']
      const matchesSearch =
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.id.toString().includes(searchTerm)

      const matchesType = !selectedType || pokemon.types.includes(selectedType)

      return matchesSearch && matchesType
    })
  }, [pokemons, searchTerm, language, selectedType])

  if (!isClient) {
    return (
      <PokemonListView
        searchTerm=""
        onSearchChange={handleSearchChange}
        selectedType={null}
        onTypeChange={handleTypeChange}
        filteredPokemons={[]}
        isLoading
        error={null}
      />
    )
  }

  return (
    <PokemonListView
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      selectedType={selectedType}
      onTypeChange={handleTypeChange}
      filteredPokemons={filteredPokemons}
      isLoading={isLoading}
      error={error}
    />
  )
}

export default PokemonListContainer