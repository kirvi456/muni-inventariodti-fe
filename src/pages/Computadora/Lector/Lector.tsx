import { Stack, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LectorQR } from '../../../components/LectorQR';
import { useNotification } from '../../../hooks/useNotification';

export const Lector = () => {
    
    const [codigo, setCodigo] = useState<string>('');

    const { openErrorNotification } = useNotification();

    const navigate = useNavigate();

    const handleNavigateEquipo = () => {

        if( codigo === '' ){
            openErrorNotification('[ERROR]: No se scaneó código')
            return
        }

        navigate(`/Equipo/${codigo}`)
    }

    return (
        <Stack spacing={2} sx={{ mt: 2, alignItems: 'center'}}>
            <Typography variant='h4' textAlign='center'>
                Escanea el código QR de tu equipo
            </Typography>
        
            
            <LectorQR 
                setData={setCodigo}
            />            
            

            <TextField
                size='small'
                value={codigo}
                label='Código de Equipo'
                placeholder='00000000000'
                sx={{ width: '250px', maxWidth: '100%'}}
            />

            <Button 
                variant='contained' 
                sx={{width: '500px', maxWidth: '95%', margin: '0 auto'}}
                onClick={handleNavigateEquipo}
            >
                Ver Detalles
            </Button>
        </Stack>
    )
}
