import { Suspense } from 'react'
import PokemonList from '@/app/src/components/PokemonList'

function PokemonListLoading() {
  return <div>Chargement...</div>
}

export default function Home() {
  return (
    <main className="home-page">
      <Suspense fallback={<PokemonListLoading />}>
        <PokemonList />
      </Suspense>
    </main>
  )
}
