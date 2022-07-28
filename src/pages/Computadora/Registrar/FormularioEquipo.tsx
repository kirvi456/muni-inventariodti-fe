import React from 'react'
import { Typography, TextField, Stack, FormControlLabel, Switch, MenuItem } from '@mui/material';
import Divider from '@mui/material/Divider';


import { Computadora } from '../../../models/Computadora';
import { StringList } from '../../../components/StringList';
import { SedesSelect } from './SedesSelect';
import { UnidadesSelect } from './UnidadesSelect';




export const FormularioEquipo = ({equipo, setEquipo} : {equipo: Computadora, setEquipo: any}) => {

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

    return (
        <>
            <Stack spacing={2} sx={{padding: '16px 0', alignItems: 'start', width: '100%'}}>
                
                <Typography variant='h6' color='primary.main' textAlign='center' sx={{width: '100%'}}>
                    Información Equipo
                </Typography> 

                <SedesSelect 
                    value={equipo.ubicacion}
                    onChange={ handleChange }
                    name='ubicacion'
                    label='Ubicación'
                    size='small'
                    fullWidth
                />

                <UnidadesSelect 
                    value={equipo.unidad}
                    onChange={ handleChange }
                    name='unidad'
                    label='Unidad/Dirección'
                    size='small'
                    fullWidth
                />

                <TextField 
                    select
                    value={equipo.tipo}
                    onChange={handleChange}
                    name='tipo'
                    label="Tipo de Computadora" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                >
                    <MenuItem value='All In One'>All In One</MenuItem>
                    <MenuItem value='Desktop'>Desktop</MenuItem>
                    <MenuItem value='Laptop'>Laptop</MenuItem>
                </TextField>

                <TextField 
                    value={equipo.nombreEquipo}
                    onChange={handleChange}
                    name='nombreEquipo'
                    label="Nombre Equipo" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                /> 
                <Divider 
                    textAlign='center' 
                    variant='fullWidth' 
                    sx={{width: '100%'}}>
                    <Typography variant='subtitle2'>Licencias</Typography>
                </Divider>         
                <TextField 
                    select
                    value={equipo.SO}
                    onChange={handleChange}
                    name='SO'
                    label="Sistema Operativo" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                >
                    <MenuItem value='Linux'>Linux</MenuItem>
                    <MenuItem value='Windows'>Windows</MenuItem>
                    <MenuItem value='Mac'>Mac</MenuItem>
                </TextField>
                <TextField 
                    value={equipo.SODesc}
                    onChange={handleChange}
                    name='SODesc'
                    label="Descripcion Sistema Operativo" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />
                <FormControlLabel 
                    sx={{margin: '0'}}
                    control={
                        <Switch 
                            color="primary" 
                            checked={equipo.SOoriginal} 
                            onChange={handleChangeBoolean} 
                            name='SOoriginal'
                        />}
                    label="SO Original"
                    labelPlacement="start"
                />  
                <TextField 
                    value={equipo.ofimaticaDesc}
                    onChange={handleChange}
                    name='ofimaticaDesc'
                    label="Herramienta de Ofimática" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />
                <FormControlLabel
                    control={
                        <Switch 
                            color="primary" 
                            checked={equipo.ofimaticaOriginal} 
                            onChange={handleChangeBoolean}
                            name='ofimaticaOriginal'
                        />}
                    label="Ofimática Original"
                    labelPlacement="start"
                />
                <Divider 
                    textAlign='center' 
                    variant='fullWidth' 
                    sx={{width: '100%'}}>
                    <Typography variant='subtitle2'>Características</Typography>
                </Divider>
                

                
                <StringList 
                    stringList={equipo.almacenamiento}
                    handleArrayChange={ handleArrayChange }
                    name='almacenamiento'
                    label='Almacenamiento'
                />
                
                <StringList 
                    stringList={equipo.RAM}
                    handleArrayChange={ handleArrayChange }
                    name='RAM'
                    label='Memoria RAM'
                />

                <TextField 
                    value={equipo.procesador}
                    onChange={handleChange}
                    name='procesador'
                    label="Procesador" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />

                <StringList 
                    stringList={equipo.video}
                    handleArrayChange={ handleArrayChange }
                    name='video'
                    label='Video'
                />
                
                
                <Divider 
                    textAlign='center' 
                    variant='fullWidth' 
                    sx={{width: '100%'}}>
                    <Typography variant='subtitle2'>Monitor</Typography>
                </Divider>
                <TextField 
                    value={equipo.marcaMonitor}
                    onChange={handleChange}
                    name='marcaMonitor'
                    label="Marca Monitor" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />
                <TextField 
                    value={equipo.serieMonitor}
                    onChange={handleChange}
                    name='serieMonitor'
                    label="Serie Monitor" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />
                <TextField 
                    value={equipo.tamMonitor}
                    onChange={handleChange}
                    name='tamMonitor'
                    label="Tamaño Monitor" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />
                <Divider 
                    textAlign='center' 
                    variant='fullWidth' 
                    sx={{width: '100%'}}>
                    <Typography variant='subtitle2'>Periféricos</Typography>
                </Divider> 
                <TextField 
                    value={equipo.teclado}
                    onChange={handleChange}
                    name='teclado'
                    label="Teclado" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />
                <TextField 
                    value={equipo.mouse}
                    onChange={handleChange}
                    name='mouse'
                    label="Mouse" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                />
                

                <StringList 
                    stringList={equipo.otrosPerifericos}
                    handleArrayChange={ handleArrayChange }
                    name='otrosPerifericos'
                    label='Otros Periféricos'
                />
                
                <Divider 
                    textAlign='center' 
                    variant='fullWidth' 
                    sx={{width: '100%'}}>
                    <Typography variant='subtitle2'>UPS</Typography>
                </Divider> 
                <FormControlLabel 
                    sx={{margin: '0'}}
                    control={
                        <Switch 
                            color="primary" 
                            checked={equipo.ups} 
                            onChange={handleChangeBoolean} 
                            name='ups'
                        />}
                    label="Tiene UPS"
                    labelPlacement="start"
                />
                <TextField 
                    value={equipo.upsDesc}
                    onChange={handleChange}
                    name='upsDesc'
                    label="Descripcion UPS" 
                    variant="outlined" 
                    size='small' 
                    sx={{width: '100%'}}
                    disabled={!equipo.ups}
                />
                
            </Stack>
        </>
    )
}
