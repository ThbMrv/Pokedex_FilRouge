'use client'

import { Select, MenuItem } from '@mui/material'
import typesDataRaw from '../../data/types.json'
import type { TypesData } from '../../types/pokemon'
import { useLanguage } from '../../contexts/LanguageContext'

const typesData = typesDataRaw as TypesData

interface TypeFilterProps {
  selectedType: string | null
  onTypeChange: (type: string | null) => void
}

const TypeFilter = ({ selectedType, onTypeChange }: TypeFilterProps) => {
  const { language } = useLanguage()
  const types = Object.entries(typesData)

  return (
    <Select
      value={selectedType || ''}
      onChange={(e) => onTypeChange(e.target.value || null)}
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
      <MenuItem value="">All Types</MenuItem>
      {types.map(([typeKey, typeData]) => (
        <MenuItem key={typeKey} value={typeKey}>
          {typeData.translations[language as 'fr' | 'en']} ({typeKey})
        </MenuItem>
      ))}
    </Select>
  )
}

export default TypeFilter
