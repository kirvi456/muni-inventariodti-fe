import React from 'react'

import { Typography, TextField, Stack } from '@mui/material';

import { Computadora } from '../../../models/Computadora';



export const FormularioPersona = ({equipo, setEquipo} : {equipo: Computadora, setEquipo: any}) => {


    const handleChange = (e: any) => {
        equipo.responsable[e.target.id as ('nombre')] = e.target.value;
        setEquipo({...equipo});
    }

    return (
        <>
            <Stack spacing={2} sx={{padding: '16px 0'}}>   
                <Typography variant='h6' color='primary.main' textAlign='center'>
                    Información Personal
                </Typography>         
                <TextField 
                    id='nombre' 
                    value={equipo.responsable.nombre} 
                    onChange={handleChange} 
                    label="Nombre Completo" 
                    variant="outlined" 
                    size='small'
                />
                <TextField 
                    id='puesto' 
                    value={equipo.responsable.puesto} 
                    onChange={handleChange} 
                    label="Puesto" 
                    variant="outlined" 
                    size='small'
                />
                <TextField 
                    id='telefono' 
                    value={equipo.responsable.telefono} 
                    onChange={handleChange} 
                    label="Número de Teléfono" 
                    variant="outlined" 
                    size='small'
                />
            </Stack>
        </>
    )
}
