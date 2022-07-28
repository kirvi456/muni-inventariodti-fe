import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import Void from '../../../assets/svgs/void.svg'

export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <Stack spacing={2} alignItems='center' sx={{m: '18px 24px'}}>
            
            <Typography variant='h4' textAlign='center'>
                Equipo no encontrado...
            </Typography>
            
            <img 
                src={Void}
                alt='Equipo no encontrado SVG'
                style={{
                    width: '400px',
                    maxWidth: '90%'
                }}
            />
            
            <Button
                onClick={ () => { navigate(-1) } }
                style={{
                    width: '400px',
                    maxWidth: '90%'
                }}
            >
                Regresar
            </Button>

        </Stack>
    )
}
