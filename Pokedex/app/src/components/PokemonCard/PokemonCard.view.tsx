import { Card, Box } from '@mui/material'
import type { Pokemon } from '../../types/pokemon'

interface PokemonCardViewProps {
  formattedId: string
  names?: Pokemon['names']
  image: string
  types: {
    name: string
    color: string
    translatedName: string
  }[]
  pokemonName: string
}

const PokemonCardView = ({
  formattedId,
  image,
  types,
  pokemonName,
}: PokemonCardViewProps) => {
  return (
    <Card
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        minHeight: '200px',
        textDecoration: 'none',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Box sx={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '4px' }}>
        {formattedId}
      </Box>
      <Box sx={{ fontSize: '0.95rem', color: '#333', fontWeight: 600, marginBottom: '8px', lineHeight: 1.3, margin: 0 }}>
        {pokemonName}
      </Box>
      <Box sx={{ width: '80px', height: '80px', margin: '8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={image} alt={pokemonName} />
      </Box>
      <Box sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        {types.map((type) => (
          <Box
            key={type.name}
            component="span"
            sx={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: 'white',
              textTransform: 'uppercase',
              backgroundColor: type.color,
            }}
          >
            {type.translatedName}
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default PokemonCardView
