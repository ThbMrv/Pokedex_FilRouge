'use client'

import { Select, MenuItem } from '@mui/material'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSelection = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <Select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
      sx={{
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '6px',
        color: '#333',
        fontSize: '0.9rem',
        '&:hover': { borderColor: '#999', backgroundColor: '#fafafa' },
        '&.Mui-focused': {
          borderColor: '#e74c3c',
          boxShadow: '0 0 0 3px rgba(231, 76, 60, 0.1)',
        },
        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ddd' },
        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#999' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#e74c3c',
        },
      }}
    >
      <MenuItem value="fr">🇫🇷 FR</MenuItem>
      <MenuItem value="en">🇬🇧 EN</MenuItem>
    </Select>
  )
}

export default LanguageSelection
