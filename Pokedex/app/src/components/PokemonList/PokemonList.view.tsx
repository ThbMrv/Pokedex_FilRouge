import { Box, CircularProgress, TextField, Typography } from '@mui/material'
import PokemonCard from '../PokemonCard'
import TypeFilter from './TypeFilter'
import type { Pokemon } from '../../types/pokemon'

interface PokemonListViewProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedType: string | null
  onTypeChange: (type: string | null) => void
  filteredPokemons: Pokemon[]
  isLoading: boolean
  error: string | null
}

const PokemonListView = ({
  searchTerm,
  onSearchChange,
  selectedType,
  onTypeChange,
  filteredPokemons,
  isLoading,
  error,
}: PokemonListViewProps) => {
  return (
    <Box sx={{ maxWidth: '1400px', margin: '0 auto', padding: { xs: '20px 15px', md: '30px 20px' } }}>
      <Box sx={{ marginBottom: '25px' }}>
        <TextField
          type="text"
          placeholder="Enter a pokemon name"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: 'white',
            borderRadius: '6px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#ddd' },
              '&:hover fieldset': { borderColor: '#999' },
              '&.Mui-focused fieldset': {
                borderColor: '#e74c3c',
                boxShadow: '0 0 0 3px rgba(231, 76, 60, 0.1)',
              },
            },
            '& .MuiOutlinedInput-input': {
              color: '#333',
              fontSize: '1rem',
              '&::placeholder': { color: '#999', opacity: 1 },
            },
          }}
        />
      </Box>

      <TypeFilter selectedType={selectedType} onTypeChange={onTypeChange} />

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography sx={{ fontWeight: 700, color: '#e74c3c' }}>Impossible de charger les pokémons</Typography>
          <Typography sx={{ mt: 1, color: '#666' }}>{error}</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(auto-fill, minmax(90px, 1fr))',
              sm: 'repeat(auto-fill, minmax(110px, 1fr))',
              md: 'repeat(auto-fill, minmax(130px, 1fr))',
              lg: 'repeat(auto-fill, minmax(140px, 1fr))',
            },
            gap: { xs: '12px', sm: '12px', md: '14px', lg: '16px' },
            marginTop: '20px',
          }}
        >
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          ) : (
            <Box sx={{ gridColumn: '1 / -1', mt: 4, textAlign: 'center' }}>
              <Typography sx={{ color: '#666' }}>Aucun Pokémon trouvé.</Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}

export default PokemonListView