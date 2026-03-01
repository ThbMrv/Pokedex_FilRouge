'use client'

import type { ReactNode } from 'react'
import { Box, CssBaseline } from '@mui/material'
import Header from '@/app/src/components/Header/Header'
import { LanguageProvider } from '@/app/src/contexts/LanguageContext'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />

      <LanguageProvider>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#f5f5f5',
            fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              borderBottom: '1px solid #e0e0e0',
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 2 },
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Header />
          </Box>

          <Box component="main" sx={{ flex: 1, width: '100%', bgcolor: '#f5f5f5' }}>
            {children}
          </Box>
        </Box>
      </LanguageProvider>
    </>
  )
}