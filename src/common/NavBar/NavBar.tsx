import React, { useContext } from 'react'

import { Box, AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { URLSContext } from '../../context/URLs.context';

import MenuIcon from '@mui/icons-material/Menu';
import { NavBarUserMenu } from './NavBarUserMenu';

export const NavBar = () => {

    // Obtener la informacion del usuario 
    const { authState } = useContext( AuthContext )
    const { usuario } = useContext( URLSContext )

    const userName = authState.user?.usuario ?? 'Anonimo';
    const userImg = `${ usuario }/avatar/${ authState.user?._id ?? 'asd'}`;

    const navigation = useNavigate();

    const goHome = () => {
        navigation('/');
    }

    return (
        <>
        <Box sx={{flexGrow: 1}}>
            <AppBar position='fixed'>
                <Toolbar>
                        <Grid 
                            container 
                            direction= 'row' 
                            justifyContent='space-between' 
                            alignItems='center'
                        >
                            <Grid>
                            <IconButton aria-label="delete">
                                <MenuIcon fontSize='large' />
                            </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    onClick={goHome} 
                                    sx={{
                                        cursor: 'pointer',
                                        display: {
                                            xs: 'none',
                                            md: 'block'
                                        }
                                    }}
                                >                           
                                    Inventario DTI
                                </Typography>
                            </Grid>
                            <Grid item>
                                <NavBarUserMenu 
                                    userName={userName} 
                                    userImg={userImg}
                                />
                            </Grid>
                        </Grid>
                </Toolbar>
            </AppBar>
        </Box>
        <Box height={80}></Box>
        </>
    )
}
