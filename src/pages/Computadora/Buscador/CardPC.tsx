import React, { useContext } from 'react'
import { Grid, Paper, Typography, Stack, Box, Divider } from '@mui/material'
import { Computadora } from '../../../models/Computadora'
import { URLSContext } from '../../../context/URLs.context'

type CardPcProps = {
    pc : Computadora
}

export const CardPC : React.FC<CardPcProps> = ({pc}) => {

    const URLS = useContext( URLSContext )

    const url = URLS.computadoras + '/imagen/' + pc._id

    return (
        <Paper 
            sx={{
                p: 2, 
                position: 'relative', 
                overflow: 'hidden', 
                maxWidth: '500px'
            }}
        >
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0,
                    p: 1,
                    bgcolor: 'primary.main',
                    borderRadius: '0 0 0 4px'
                }}
            >
                { pc.unidad?.abreviatura || 'N/A' }
            </Box>
            <Grid container sx={{alignItems: 'center'}}>
                <Grid item xs={4}>
                    <img 
                        src={ url } 
                        alt='imagen equipo'
                        style={{
                            maxWidth: '100px', 
                            borderRadius: '4px'
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Stack>
                        <Typography  variant='h6' component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                            {pc.responsable.puesto.toUpperCase()}
                        </Typography>
                        <Typography component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                            {pc.responsable.nombre}
                        </Typography>
                        <Typography variant='caption' component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                            {pc.nombreEquipo }
                        </Typography>
                        <Typography variant='caption' component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                            {pc.ip || '0.0.0.0'}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Divider />
        </Paper>
    )
}
