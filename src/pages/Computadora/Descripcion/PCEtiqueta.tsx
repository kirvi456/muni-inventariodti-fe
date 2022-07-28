import { Box, Typography } from '@mui/material'
import React from 'react'
import { ComputadoraExtendida } from '../../../models/Computadora'

export const PCEtiqueta : React.FC<{pc: ComputadoraExtendida}> = ({pc}) => {
  return (
    <Box 
        bgcolor='primary.main'
        sx={{
            position: 'absolute',
            padding: '0.5em 1.5em',
            borderRadius: '0 0 0.5em 0.5em'
        }}
        component='span'
    >
        <Typography 
            variant='h4' 
            fontWeight='bold'
        >{ pc.unidad.abreviatura }</Typography>
    </Box>
  )
}
