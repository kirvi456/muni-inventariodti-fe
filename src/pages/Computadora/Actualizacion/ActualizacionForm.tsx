import React, { useState, useContext } from 'react'
import { Box, Container, Stack, Paper, TextField, Typography, Divider, FormControlLabel, MenuItem, Switch, Button, Grid} from '@mui/material'
import { Computadora } from '../../../models/Computadora';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { URLSContext } from '../../../context/URLs.context';
import { StringList } from '../../../components';
import { SedesSelect } from '../Registrar/SedesSelect';
import { UnidadesSelect } from '../Registrar/UnidadesSelect';
import { FormularioPersona } from '../Registrar/FormularioPersona';
import { FormularioEquipo } from '../Registrar/FormularioEquipo';
import { FormularioRed } from '../Registrar/FormularioRed';

type ActualizacionFormProps = {
    equipo : Computadora, 
    setEquipo : React.Dispatch<React.SetStateAction<Computadora>>
}

export const ActualizacionForm : React.FC<ActualizacionFormProps> = ({equipo, setEquipo}) => {

    const handleChangeRes = (e: any) => {
        equipo.responsable[e.target.id as ('nombre')] = e.target.value;
        setEquipo({...equipo});
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        equipo[e.target.name as 'nombreEquipo'] = e.target.value;
        setEquipo({...equipo});
    }

    const handleChangeBoolean = (e : React.ChangeEvent<HTMLInputElement>) => {
        equipo[e.target.name as 'activo'] = e.target.checked;
        setEquipo({...equipo});
    }    

    const handleArrayChange = (name :string, stringList : string[]) => {
        equipo[name as 'almacenamiento'] = [...stringList];
        setEquipo({...equipo});
    }

    const handleChangeInternet = (e : React.ChangeEvent<HTMLInputElement>) => {
        equipo.internet = e.target.checked;
        setEquipo({...equipo});
    }

    return (
        <Stack spacing={2}  sx={{ maxWidth: 'sm', margin: 'auto', mt: 2, mb: 6}}>          
            <Paper sx={{p: 2}}>
                <FormularioPersona
                    equipo={equipo}
                    setEquipo={setEquipo}
                />
            </Paper>
            <Paper sx={{p: 2}}>
                <FormularioEquipo
                    equipo={equipo}
                    setEquipo={setEquipo}
                />
            </Paper>
            <Paper sx={{p: 2}}>
                <FormularioRed
                    equipo={equipo}
                    setEquipo={setEquipo}
                />
            </Paper>

            <Grid container direction='row'>
                <Grid item xs={6} sx={{p: 1}}>
                    <Button variant='outlined' color='error' fullWidth>
                        Eliminar
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{p: 1}}>
                    <Button variant='contained' fullWidth>
                        Actualizar
                    </Button>
                </Grid>
            </Grid>

        </Stack>
    )
}
