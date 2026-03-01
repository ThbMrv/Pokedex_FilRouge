'use client'

import Link from 'next/link'
import { Box, Typography, Button } from '@mui/material'


export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 80px)',
        px: 2,
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: 500 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', md: '6rem' },
            fontWeight: 'bold',
            color: '#ff0000',
            m: 0,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          404
        </Typography>

        <Box
          component="img"
          src="poke.jpeg"
          alt="Logo Pokedex drôle"
          sx={{
            maxWidth: 120,
            my: 3,
            display: 'block',
            mx: 'auto',
          }}
        />

        <Typography
          sx={{
            fontSize: '1.5rem',
            color: '#e74c3c',
            fontWeight: 600,
            mb: 2,
          }}
        >
          Bah alors, on ne sait pas se servir d&apos;internet ??
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            color: '#aaa',
            mb: 3,
          }}
        >
          Désolé, la page que vous cherchez n&apos;existe pas.
        </Typography>

        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{
            backgroundColor: '#ff0000',
            color: 'white',
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            py: 1.2,
            borderRadius: 1,
            '&:hover': {
              backgroundColor: '#cc0000',
            },
          }}
        >
          Retour à l&apos;accueil
        </Button>
      </Box>
    </Box>
  )
}