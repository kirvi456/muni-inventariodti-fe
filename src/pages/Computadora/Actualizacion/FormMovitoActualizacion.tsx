import React from 'react'
import { Typography, Paper, TextField, Stack, Divider } from '@mui/material'
import { Actualizacion } from '../../../models/Actualizacion'

type FormMovitoActualizacionProps  = {
    motivo: Actualizacion,
    setMotivo: React.Dispatch<React.SetStateAction<Actualizacion>>
}

export const FormMovitoActualizacion : React.FC<FormMovitoActualizacionProps> = ({ motivo, setMotivo }) => {


    const handleMotivoChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        motivo[e.target.name as 'motivo'] = e.target.value;

        setMotivo({...motivo})
    }

    return (
        <Paper sx={{p: 2}}>
            <Stack spacing={2}>            
                <Typography variant='h6' color='primary.main' textAlign='center'>
                    Información de Actualización
                </Typography>
                <TextField 
                    value={motivo.nombreComponente}
                    onChange={handleMotivoChange}
                    name='nombreComponente'
                    label="Nombre Componente"
                    placeholder='Ram, Disco duro, etc.' 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                /> 
                <TextField 
                    value={motivo.descAnterior}
                    onChange={handleMotivoChange}
                    name='descAnterior'
                    label="Componente Actual" 
                    placeholder='4GB DDR3 2400Ghz'
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                /> 
                <Divider />
                <TextField 
                    value={motivo.descNuevo}
                    onChange={handleMotivoChange}
                    name='descNuevo'
                    label="Componente Nuevo" 
                    placeholder='8GB DDR3 2400Ghz'
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                /> 
                <TextField 
                    value={motivo.motivo}
                    onChange={handleMotivoChange}
                    name='motivo'
                    label="Motivo del Cambio" 
                    placeholder='Se realizó una actualizacion de harware'
                    variant="outlined" 
                    size='small' 
                    multiline
                    rows={5}
                    sx={{width: '100%'}}
                /> 
            </Stack>
        </Paper>
    )
}
