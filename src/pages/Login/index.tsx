import React, { useContext, useState } from 'react';
import { Box, Paper, Stack, TextField, Button, Container, Typography, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ValidateLoginForm } from '../../utils/ValidateLoginForm';
import { URLSContext } from '../../context/URLs.context';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../hooks/useNotification';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthContext } from '../../auth';


export const LoginPage : React.FC<{}> = () => {

    const URLS = React.useContext(URLSContext);
    const navigate = useNavigate();

    const {openErrorNotification} = useNotification();

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login } = useContext( AuthContext );

    const loguearse = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        ValidateLoginForm.validate({user, password})
        .then(async () => {

            const loginResponse = await login(`${URLS.auth}/login`,user, password);

            if( loginResponse.length > 0 ) {
                openErrorNotification( loginResponse );
                return;
            }
            
            return navigate('/');
        })
        .catch((error) => {
            openErrorNotification(error.message);
        })
    }

    return (
        <Container 
            sx={{            
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper sx={{minWidth: '350px', maxWidth: '350px', p:2}} elevation={12}>
                <form onSubmit={ loguearse }>
                    <Stack spacing={3}>
                        <Box textAlign='center'>
                            <AccountCircleIcon sx={{fontSize: 70}} />

                        </Box>

                        <Stack spacing={2}>
                            <TextField 
                                size='small'
                                type='text'
                                value={user}
                                onChange={(e) => {setUser(e.target.value)}}
                                label="Usuario" 
                                variant="outlined" 
                            /> 

                            <PasswordInput 
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                label="Contraseña" 
                                size='small'
                            /> 

                            <Stack direction='row' spacing={1}>
                                <Typography variant='caption'>No tienes cuenta?</Typography>
                                <Link
                                    onClick={() => navigate('/registro')}
                                    variant='caption' 
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Registrate
                                </Link>
                            </Stack>
                        </Stack>
                        <Button
                            type='submit'
                            variant='contained'
                        >Iniciar Sesión</Button>
                    </Stack>
                </form>

            </Paper>
        </Container>
    )
}
