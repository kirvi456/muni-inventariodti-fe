import React from 'react'
import { Stack, Typography } from '@mui/material'

import Void from '../../../assets/svgs/void.svg'

export const NotFound = () => {


    return (
        <Stack 
            spacing={2} 
            alignItems='center'
            justifyContent='center' 
            sx={{
                height: '100vh'
            }}>
            
            <Stack
                spacing={2}
                alignItems='center'
            >
            
                <img 
                    src={Void}
                    alt='Equipo no encontrado SVG'
                    style={{
                        width: '400px',
                        maxWidth: '70%'
                    }}
                />           

                <Typography variant='h4' textAlign='center'>
                    Equipo no encontrado...
                </Typography>
            </Stack>
        </Stack>
    )
}
