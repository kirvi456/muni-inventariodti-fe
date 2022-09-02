import React from 'react'
import { Stack, Paper, Button, Grid} from '@mui/material'
import { Computadora } from '../../../models/Computadora';
import { FormularioPersona } from '../Registrar/FormularioPersona';
import { FormularioEquipo } from '../Registrar/FormularioEquipo';
import { FormularioRed } from '../Registrar/FormularioRed';
import { FormMovitoActualizacion } from './FormMovitoActualizacion';

type ActualizacionFormProps = {
    equipo : Computadora, 
    setEquipo : React.Dispatch<React.SetStateAction<Computadora>>
}

export const ActualizacionForm : React.FC<ActualizacionFormProps> = ({equipo, setEquipo}) => {

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

            <FormMovitoActualizacion />

            <Button variant='contained' fullWidth>
                Actualizar
            </Button>

        </Stack>
    )
}
