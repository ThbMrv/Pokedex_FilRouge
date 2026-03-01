'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import pokemonsRaw from '@/app/src/data/pokemons.json'
import typesDataRaw from '@/app/src/data/types.json'
import type { Pokemon, TypesData } from '@/app/src/types/pokemon'
import { useLanguage } from '@/app/src/contexts/LanguageContext'

const pokemons = pokemonsRaw as Pokemon[]
const typesData = typesDataRaw as TypesData

export default function PokemonDetail() {
  const params = useParams()
  const { language } = useLanguage()
  const id = parseInt(params.id as string, 10)
  const [openMovesDialog, setOpenMovesDialog] = useState(false)

  const pokemon = pokemons.find((p) => p.id === id)

  if (!pokemon) {
    return (
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          bgcolor: 'var(--bg-color)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#ff4444' }}>
            Pokémon non trouvé
          </Typography>

          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#EE8130',
                color: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                px: 3,
                py: 1,
                borderRadius: '6px',
                '&:hover': { backgroundColor: '#d97724', boxShadow: '0 4px 12px rgba(238, 129, 48, 0.3)' },
              }}
            >
              Retour à la liste
            </Button>
          </Link>
        </Box>
      </Box>
    )
  }

  const formattedId = `No.${pokemon.id.toString().padStart(3, '0')}`
  const pokemonName = pokemon.names[language as 'fr' | 'en']
  const previousPokemon = pokemons.find((p) => p.id === id - 1)
  const nextPokemon = pokemons.find((p) => p.id === id + 1)

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'var(--bg-color)', color: 'white' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 } }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#EE8130',
              color: 'white',
              textTransform: 'none',
              fontSize: '1rem',
              px: 3,
              py: 1,
              borderRadius: '6px',
              mb: 3,
              '&:hover': { backgroundColor: '#d97724', boxShadow: '0 4px 12px rgba(238, 129, 48, 0.3)' },
            }}
          >
            ← Retour à la liste
          </Button>
        </Link>

        <Paper
          elevation={0}
          sx={{
            bgcolor: '#2a2a2a',
            borderRadius: 3,
            p: { xs: 2.5, md: 4 },
            mb: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 2.5, md: 5 },
              alignItems: 'start',
              mb: { xs: 3, md: 5 },
            }}
          >
            {/* Image */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                  p: 2.5,
                  background: 'linear-gradient(135deg, #333 0%, #444 100%)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
                }}
              >
                <Box
                  component="img"
                  src={pokemon.image}
                  alt={pokemonName}
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    imageRendering: 'crisp-edges',
                  }}
                />
              </Box>
            </Box>

            {/* Infos */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: '#aaa',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}
                >
                  {formattedId}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: 36, md: 48 },
                    fontWeight: 700,
                    lineHeight: 1.05,
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {pokemonName}
                </Typography>

                {/* Optionnel : afficher le nom EN si langue FR, ou inversement */}
                {pokemon.names.en && language === 'fr' && (
                  <Typography sx={{ fontSize: 18, color: '#ccc', fontStyle: 'italic' }}>
                    {pokemon.names.en}
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    color: '#ff4444',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 700,
                  }}
                >
                  Types
                </Typography>

                <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
                  {pokemon.types.map((type) => (
                    <Chip
                      key={type}
                      label={typesData[type]?.translations[language as 'fr' | 'en'].toUpperCase()}
                      sx={{
                        bgcolor: typesData[type]?.backgroundColor || '#777',
                        color: 'white',
                        fontWeight: 700,
                        px: 0.75,
                        height: 34,
                        borderRadius: 999,
                        minWidth: 110,
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                        '& .MuiChip-label': { width: '100%', textAlign: 'center' },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    color: '#ff4444',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 700,
                  }}
                >
                  Caractéristiques
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      p: 2,
                      bgcolor: '#333',
                      borderRadius: 2,
                      borderLeft: '4px solid #ff4444',
                    }}
                  >
                    <Typography sx={{ fontSize: 12, color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Hauteur
                    </Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 800, color: '#ff4444' }}>
                      {(pokemon.height / 10).toFixed(1)} m
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      p: 2,
                      bgcolor: '#333',
                      borderRadius: 2,
                      borderLeft: '4px solid #ff4444',
                    }}
                  >
                    <Typography sx={{ fontSize: 12, color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Poids
                    </Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 800, color: '#ff4444' }}>
                      {(pokemon.weight / 10).toFixed(1)} kg
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Moves */}
          <Box sx={{ borderTop: '2px solid #444', pt: 3 }}>
            <Button
              variant="contained"
              onClick={() => setOpenMovesDialog(true)}
              sx={{
                backgroundColor: '#EE8130',
                color: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                px: 3,
                py: 1.25,
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#d97724', boxShadow: '0 4px 12px rgba(238, 129, 48, 0.3)' },
              }}
            >
              Attaques ({pokemon.moves.length})
            </Button>
          </Box>
        </Paper>

        {/* Navigation prev/next */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2.5,
            mt: 3,
          }}
        >
          {previousPokemon ? (
            <Link href={`/pokemon/${previousPokemon.id}`} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'block',
                  p: 2,
                  bgcolor: '#2a2a2a',
                  color: 'white',
                  borderRadius: 2,
                  fontWeight: 700,
                  border: '2px solid #ff4444',
                  transition: 'all 0.25s ease',
                  textAlign: 'left',
                  '&:hover': { bgcolor: '#ff4444' },
                }}
              >
                ← {previousPokemon.names[language as 'fr' | 'en']}
              </Box>
            </Link>
          ) : (
            <Box sx={{ p: 2, borderRadius: 2, border: '2px solid #666', opacity: 0.3 }} />
          )}

          {nextPokemon ? (
            <Link href={`/pokemon/${nextPokemon.id}`} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'block',
                  p: 2,
                  bgcolor: '#2a2a2a',
                  color: 'white',
                  borderRadius: 2,
                  fontWeight: 700,
                  border: '2px solid #ff4444',
                  transition: 'all 0.25s ease',
                  textAlign: 'right',
                  '&:hover': { bgcolor: '#ff4444' },
                }}
              >
                {nextPokemon.names[language as 'fr' | 'en']} →
              </Box>
            </Link>
          ) : (
            <Box sx={{ p: 2, borderRadius: 2, border: '2px solid #666', opacity: 0.3 }} />
          )}
        </Box>
      </Box>

      {/* Dialog Moves */}
      <Dialog
        open={openMovesDialog}
        onClose={() => setOpenMovesDialog(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle sx={{ pr: 6 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '1.15rem' }}>Attaques de {pokemonName}</Typography>

          <IconButton
            aria-label="close"
            onClick={() => setOpenMovesDialog(false)}
            sx={{
              position: 'absolute',
              right: 12,
              top: 10,
              color: '#777',
              '&:hover': { backgroundColor: '#f0f0f0', color: '#333' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ py: 2.5 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 1.5,
            }}
          >
            {pokemon.moves.map((move) => (
              <Box
                key={move}
                sx={{
                  p: 1.25,
                  bgcolor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: 1.5,
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#333',
                }}
              >
                {move.replace(/-/g, ' ').toUpperCase()}
              </Box>
            ))}
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            variant="contained"
            onClick={() => setOpenMovesDialog(false)}
            sx={{
              backgroundColor: '#EE8130',
              color: 'white',
              textTransform: 'none',
              fontSize: '0.95rem',
              px: 2.5,
              py: 1,
              borderRadius: '6px',
              '&:hover': { backgroundColor: '#d97724', boxShadow: '0 4px 12px rgba(238, 129, 48, 0.3)' },
            }}
          >
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}