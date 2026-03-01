'use client'

import { Box } from '@mui/material'
import Logo from '../Logo/Logo'
import LanguageSelection from '../LanguageSelection/LanguageSelection'

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Logo />
      <LanguageSelection />
    </Box>
  )
}

export default Header
