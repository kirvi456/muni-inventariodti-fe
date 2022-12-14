import React, { ChangeEvent, useState } from 'react';
import { Paper, Stack, TextField, Container, Typography, Link } from '@mui/material';

import { emptyUsuario, Usuario } from '../../models/Usuario';
import { useNotification } from '../../hooks/useNotification';
import { ValidateRegistroForm } from '../../utils/ValidateRegitroForm';
import { URLSContext } from '../../context/URLs.context';
import { FetchRequest } from '../../utils/MakeRequest';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput';
import LoadingButton from '@mui/lab/LoadingButton';
import { getErrorMessage } from '../../utils/ErrorMessage';


export const RegistrarPage = () => {
    const [user, setUser]                       = useState<Usuario>({...emptyUsuario, rol: 'ADMIN'});
    const [pwConfirmation, setPwConfirmation]   = useState<string>('');
    const [loading, setLoading]                 = useState<boolean>(false);

    const navigate = useNavigate();

    const URLS = React.useContext(URLSContext);
    

    const { openErrorNotification, openSuccessNotification } = useNotification();

    const hangleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        user[e.target.name as 'nombre'] = e.target.value;
        setUser({...user});
    }

    const Registrar = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading( true );

        ValidateRegistroForm.validate({...user, pwConfirmation})
        .then(async () => {
            const usuario = await FetchRequest<Usuario>(
                `${URLS.usuario}/registro`,
                'POST',
                user                
            )
            
            if(usuario.error){
                openErrorNotification(usuario.error.message);
                setLoading( false );
                return;
            }
            openSuccessNotification('Usuario registrado');

            setUser({...emptyUsuario, rol: 'ADMIN'});
            setPwConfirmation('');
            setLoading( false );
        })
        .catch(error => {
            console.log(error)
            openErrorNotification(getErrorMessage(error));
            setLoading( false );
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
            <Paper sx={{minWidth: '350px', width: '350px', maxWidth: '90%', p:2}} elevation={12}>
                <Stack spacing={2}>

                    <Typography variant='h4' textAlign='center'>
                        Crea un cuenta
                    </Typography>

                    <form onSubmit={ Registrar }>                    
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
                                label="Confirmar Contrase??a" 
                                size='small'
                            /> 

                            <PasswordInput 
                                value={pwConfirmation}
                                onChange={ (e) => setPwConfirmation(e.target.value) }
                                label="Confirmar Contrase??a" 
                                size='small'
                            />                         

                            <LoadingButton
                                type='submit'
                                variant='contained'
                                loading={loading}
                            >
                                Registrar
                            </LoadingButton>

                        </Stack>
                    </form>
                    
                    <Stack direction='row' spacing={1} justifyContent='center'>
                        <Typography variant='caption'>
                            ??Ya eres usuario?
                        </Typography>
                        <Link 
                            variant='caption' 
                            textAlign='center' 
                            sx={{cursor: 'pointer'}}
                            onClick={() => navigate('/login')}
                        >Ingresa</Link>
                    </Stack>

                </Stack>

            </Paper>
        </Container>
    )
}