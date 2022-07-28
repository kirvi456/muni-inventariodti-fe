import React, { ChangeEvent, useState } from 'react';
import { Paper, Stack, TextField, Button, Container, Typography, Link } from '@mui/material';

import { emptyUsuario, Usuario } from '../../models/Usuario';
import { useNotification } from '../../hooks/useNotification';
import { ValidateRegistroForm } from '../../utils/ValidateRegitroForm';
import { URLSContext } from '../../context/URLs.context';
import { FetchRequest } from '../../utils/MakeRequest';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput';

export const RegistrarPage = () => {
    const [user, setUser] = useState<Usuario>({...emptyUsuario, rol: 'ADMIN'});
    const [pwConfirmation, setPwConfirmation] = useState<string>('');

    const navigate = useNavigate();

    const URLS = React.useContext(URLSContext);
    

    const { openErrorNotification, openSuccessNotification } = useNotification();

    const hangleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        user[e.target.name as 'nombre'] = e.target.value;
        setUser({...user});
    }

    const Registrar = () => {
        ValidateRegistroForm.validate({...user, pwConfirmation})
        .then(async () => {
            const usuario = await FetchRequest<Usuario>(
                `${URLS.usuario}/registro`,
                'POST',
                user                
            )

            if(usuario.error){
                openErrorNotification(usuario.error.message);
                return;
            }
            openSuccessNotification('Usuario registrado');

            setUser({...emptyUsuario, rol: 'ADMIN'});
            setPwConfirmation('');
        })
        .catch(error => {
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
            <Paper sx={{minWidth: '400px', maxWidth: '400px', p:2}} elevation={12}>
                <Stack spacing={3}>

                    <Typography variant='h6' textAlign='center'>
                        Registro Usuario
                    </Typography>

                    <Stack spacing={2}>

                        <TextField 
                            size='small'
                            type='text'
                            value={user.nombre}
                            name='nombre'
                            onChange={ hangleInputChange }
                            label="Nombre Completo" 
                            variant="outlined" 
                        /> 

                        <TextField 
                            size='small'
                            type='email'
                            value={user.correo}
                            name='correo'
                            onChange={ hangleInputChange }
                            label="Correo" 
                            variant="outlined" 
                        /> 

                        <TextField 
                            size='small'
                            type='text'
                            value={user.usuario}
                            name='usuario'
                            onChange={ hangleInputChange }
                            label="Usuario" 
                            variant="outlined" 
                        /> 
                        
                        <PasswordInput 
                            name='pw'
                            value={user.pw}
                            onChange={ hangleInputChange }
                            label="Confirmar Contraseña" 
                            size='small'
                        /> 

                        <PasswordInput 
                            value={pwConfirmation}
                            onChange={ (e) => setPwConfirmation(e.target.value) }
                            label="Confirmar Contraseña" 
                            size='small'
                        /> 

                    </Stack>
                    <Stack spacing={1}>
                        <Button
                            variant='contained'
                            onClick={ Registrar }
                        >Registrar</Button>
                        <Link 
                            variant='caption' 
                            textAlign='center' 
                            sx={{cursor: 'pointer'}}
                            onClick={() => navigate('/login')}
                        >Ir a Login</Link>
                    </Stack>
                </Stack>

            </Paper>
        </Container>
    )
}