import { Grid, Typography, Stack, Divider } from '@mui/material'
import React from 'react'
import { ComputadoraExtendida } from '../../../models/Computadora'



export const PCHeader : React.FC<{pc: ComputadoraExtendida, url : string}> = ({pc, url}) => {


    return (
        <Stack sx={{ mt: { sm:'4em', xs:'4em', md: '4em', lg: '2em' } }}>        
        <Stack>
            <Typography variant='h4' textAlign='center'>Inventario Equipo de Cómputo</Typography>
            <Typography variant='h6' textAlign='center'>Municipalidad San Jose Pinula</Typography>
        </Stack>
        <Grid container sx={{mb: 1}}>
            <Grid item  xs={12} sm={12} md={12} lg={8} sx={{mt: 2}}>
                <Stack>

                    
                    <Typography fontWeight='bold' textAlign='justify' sx={{ mb: '0.5em' }}>
                        La información que se muestra a continuación corresponde a las características de un 
                        equipo de tecnológico utilizado por el pesonal de la Municipalidad de San Jose Pinula.
                        Esta información es de caracter pública y puede ser consultada por cualquier persona en
                        cualquier momento.  
                    </Typography>

                    <Stack direction='row' spacing={1} justifyContent='center'>
                        <Typography fontWeight='bold'>Nombre de Equipo:</Typography>
                        <Typography>{ pc.nombreEquipo }</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} justifyContent='center'>
                        <Typography fontWeight='bold'>Tipo de Equipo:</Typography>
                        <Typography>{ pc.tipo }</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} justifyContent='center'>
                        <Typography fontWeight='bold'>Ubicación:</Typography>
                        <Typography>{ pc.ubicacion.nombre }</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} justifyContent='center'>
                        <Typography fontWeight='bold'>Código de Equipo:</Typography>
                        <Typography>{ pc._id }</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={4} sx={{mt: 2}}>
                <img 
                    src={url} 
                    style={{
                        maxWidth: '200px',
                        margin: 'auto',
                        borderRadius: '0.5em',
                        display: 'block'
                    }}
                    alt='fotografia-equipo'
                />
            </Grid>
        </Grid>
        <Divider />
        </Stack>
    )
}
