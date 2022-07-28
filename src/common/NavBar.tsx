import React from 'react'

import { Box, AppBar, Toolbar, Container, Grid, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigation = useNavigate();

    const goHome = () => {
        navigation('/');
    }

    return (
        <>
        <Box sx={{flexGrow: 1}}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid 
                            container direction= 'row' 
                            justifyContent='space-between' 
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography 
                                    onClick={goHome} 
                                    sx={{cursor: 'pointer'}}
                                >
                                    Inventario DTI
                                </Typography>
                            </Grid>
                            <Grid>
                                <Button>Menú</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
        <Box height={70}></Box>
        </>
    )
}
