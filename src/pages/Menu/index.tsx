import React from 'react'

import { MenuCard } from './MenuCard'


import { Container, Grid, Stack, Typography } from '@mui/material'

import Logo_Muni from '../../assets/imgs/Logo_Muni.png';

export const MenuPage : React.FC<{}> = () => {
    return (
        <Container maxWidth='xl'>
            <Stack direction='row' sx={{justifyContent: 'center', alignItems: 'center', mb: '24px'}}>                
                <img src={Logo_Muni} alt="Muni SJP" style={{height: '150px'}} />
                <Typography variant="h3" align='center' sx={{ marginBottom: '12px', color: 'text.primary'}}>
                    Inventario Equipo de Computo
                </Typography>        
            </Stack>
            
            <Grid container spacing={2} justifyContent='center'>
                
                {/* ----------- COMPUTADORAS ----------- */}
                <Grid item>
                    <MenuCard  
                        title='REGRISTRAR COMPUTADORA' 
                        icon='computer'
                        path='/computadora/registrar'
                    />
                </Grid>
                
                <Grid item>
                    <MenuCard  
                        title='ADMINISTRAR COMPUTADORAS' 
                        icon='computer'
                        path='/computadoras'
                    />
                </Grid>               
                

                {/* ----------- IMPRESORAS ----------- */}
                <Grid item>
                    <MenuCard  
                        title='REGRISTRAR IMPRESORA' 
                        icon='printer'
                        path='/impresora/registrar'
                    />
                </Grid>
                
                <Grid item>
                    <MenuCard  
                        title='ADMINISTARAR IMPRESORAS' 
                        icon='printer'
                        path='/impresora/editar'
                    />
                </Grid>


            </Grid>
        </Container>

    )
}
