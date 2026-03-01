'use client'

import Link from 'next/link'
import { Box, Typography } from '@mui/material'

const Logo = () => {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        '&:hover': { opacity: 0.8 },
      }}
    >
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25 }}>
        {/* Pokéball */}
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            position: 'relative',
            boxSizing: 'border-box',
            overflow: 'hidden',
            border: '2px solid #333',
            background: 'linear-gradient(to bottom, #f44336 50%, #fff 50%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#333',
              transform: 'translateY(-50%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 8,
              height: 8,
              backgroundColor: '#fff',
              border: '2px solid #333',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
        />

        {/* Texte */}
        <Typography
          component="h1"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#333',
            m: 0,
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          Pokedex
          <Box component="span" sx={{ color: '#f44336' }}>
            ID
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}

export default Logo