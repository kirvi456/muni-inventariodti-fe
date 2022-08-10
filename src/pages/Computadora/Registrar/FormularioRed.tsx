import React from 'react'

import { Typography, TextField, Stack, FormControlLabel, Switch, MenuItem } from '@mui/material';

import { Computadora } from '../../../models/Computadora';


export const FormularioRed = ({equipo, setEquipo} : {equipo: Computadora, setEquipo: any}) => {

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        equipo[e.target.name as 'nombreEquipo'] = e.target.value;
        setEquipo({...equipo});
    }

    const handleChangeInternet = (e : React.ChangeEvent<HTMLInputElement>) => {
        equipo.internet = e.target.checked;
        setEquipo({...equipo});
    }

    return (
        <>
            <Stack spacing={2} sx={{padding: '16px 0', alignItems: 'start'}} > 
                <Typography variant='h6' color='primary.main' textAlign='center' sx={{width: '100%'}}>
                    Configuración de Red
                </Typography> 
                <FormControlLabel 
                    sx={{margin: '0'}}
                    control={<Switch color="primary" checked={equipo.internet} onChange={handleChangeInternet} />}
                    label="Tiene Internet"
                    labelPlacement="start"
                />

                <TextField 
                    select
                    value={equipo.interfazInternet}
                    onChange={handleChange}
                    name='interfazInternet'
                    label="Interfaz" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                >
                    <MenuItem value='Cable'>Cable</MenuItem>
                    <MenuItem value='Wifi'>Wifi</MenuItem>
                </TextField>

                <TextField 
                    value={equipo.ip}
                    onChange={handleChange}
                    name='ip'
                    label="IP Estática" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                    disabled={!equipo.internet} 
                />              
                <TextField 
                    value={equipo.mac}
                    onChange={handleChange}
                    name='mac'
                    label="MAC" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                    disabled={!equipo.internet} 
                />                 
                <TextField 
                    value={equipo.permisos}
                    onChange={handleChange}
                    name='permisos'
                    label="Permisos de Internet" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}                    
                    multiline
                    disabled={!equipo.internet} 
                />
            </Stack>
        </>
    )
}
