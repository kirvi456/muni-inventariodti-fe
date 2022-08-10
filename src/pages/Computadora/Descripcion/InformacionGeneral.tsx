import { Typography, Stack, Grid, Paper } from '@mui/material'
import React from 'react'
import { Computadora } from '../../../models/Computadora'
import PersonIcon from '@mui/icons-material/Person';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import LanIcon from '@mui/icons-material/Lan';


export const InformacionGeneral  : React.FC<{pc: Computadora}> = ({pc}) => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={12} sm={12} md={12} lg={6} sx={{mt: 2}}>
                <Paper elevation={8}>                
                    <Stack 
                        direction='row' 
                        spacing={1} 
                        alignItems='end' 
                        sx={{
                            borderBottom: '1px solid', 
                            borderBottomColor: 'divider',
                            justifyContent: 'center',
                            padding: '6px 0'
                        }}                        
                    >
                        <PersonIcon sx={{fontSize: 48}} />
                        <Typography variant='h5'>Usuario</Typography>                
                    </Stack>
                    <Stack sx={{pl: '2em', margin: '1em 0', height: '160px', maxHeight: '160px', overflowY: 'auto', p: 2}}>

                        <Typography>
                            <strong>Nombre: </strong> { pc.responsable.nombre }
                        </Typography>
                        <Typography>
                            <strong>Dirección/Unidad: </strong> { pc.unidad!.nombre }
                        </Typography>
                        <Typography>
                            <strong>Puesto: </strong> { pc.responsable.puesto }
                        </Typography>

                    </Stack>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} sx={{mt: 2}}>
                <Paper elevation={8}>                
                    <Stack 
                        direction='row' 
                        spacing={1} 
                        alignItems='end' 
                        sx={{
                            borderBottom: '1px solid', 
                            borderBottomColor: 'divider',
                            justifyContent: 'center',
                            padding: '6px 0'
                        }}                        
                    >
                        <DesktopMacIcon sx={{fontSize: 48}} />
                        <Typography variant='h5'>Especificaciones</Typography>                
                    </Stack>
                    <Stack  sx={{pl: '2em', margin: '1em 0', height: '160px', maxHeight: '160px', overflowY: 'auto', p: 2}}>

                        <Typography>
                            <strong>Tipo: </strong> { pc.tipo }
                        </Typography>
                        <Typography>
                            <strong>Sistema Operativo: </strong> { pc.SO }
                        </Typography>
                        <Typography>
                            <strong>Sistema Operativo Descripción: </strong> { pc.SODesc }
                        </Typography>
                        <Typography>
                            <strong>Sistema Operativo Original: </strong> { pc.SOoriginal ? 'Si' : 'No' }
                        </Typography>
                        <Typography>
                            <strong>Herramienta de Ofimática: </strong> { pc.ofimaticaDesc }
                        </Typography>
                        <Typography>
                            <strong>Ofimática Original: </strong> { pc.ofimaticaOriginal ? 'Si' : 'No' }
                        </Typography>
                        <Typography>
                            <strong>Almacenamiento: </strong>
                        </Typography>
                        {
                            pc.almacenamiento.map( (almacenamiento : string, index : number) => (
                                <Typography sx={{ pl: '1em' }} key={'almacenamiento' + index}>
                                    - { almacenamiento }
                                </Typography>
                            ))
                        }
                        <Typography>
                            <strong>RAM: </strong>
                        </Typography>
                        {
                            pc.RAM.map( (ram : string, index : number) => (
                                <Typography sx={{ pl: '1em' }} key={'ram' + index}>
                                    - { ram }
                                </Typography>
                            ))
                        }
                        <Typography>
                            <strong>Procesador: </strong> { pc.procesador }
                        </Typography>
                        <Typography>
                            <strong>Video: </strong> 
                        </Typography>
                        {
                            pc.video.map( (video : string, index : number) => (
                                <Typography sx={{ pl: '1em' }} key={'video' + index}>
                                    - { video }
                                </Typography>
                            ))
                        }
                        <Typography>
                            <strong>Monitor: </strong> { `${pc.marcaMonitor} - ${pc.serieMonitor} - ${pc.tamMonitor}''` }
                        </Typography>
                        <Typography>
                            <strong>Teclado: </strong> { pc.teclado }
                        </Typography>
                        <Typography>
                            <strong>Mouse: </strong> { pc.mouse }
                        </Typography>
                        <Typography>
                            <strong>Otros Periféricos: </strong> 
                        </Typography>
                        {
                            pc.otrosPerifericos.map( (periferico : string, index : number) => (
                                <Typography sx={{ pl: '1em' }} key={'periferico' +  index}>
                                    - { periferico }
                                </Typography>
                            ))
                        }
                        <Typography>
                            <strong>UPS: </strong> { pc.ups ? pc.upsDesc : 'Sin UPS'}
                        </Typography>

                    </Stack>
                </Paper>
            </Grid>

            {

                pc.internet && (
                    <Grid item xs={12} sm={12} md={12} lg={6} sx={{mt: 2}}>
                        <Paper elevation={8}>                
                            <Stack 
                                direction='row' 
                                spacing={1} 
                                alignItems='end' 
                                sx={{
                                    borderBottom: '1px solid', 
                                    borderBottomColor: 'divider',
                                    justifyContent: 'center',
                                    padding: '6px 0'
                                }}                        
                            >
                                <LanIcon sx={{fontSize: 48}} />
                                <Typography variant='h5'>Internet</Typography>                
                            </Stack>
                            <Stack  sx={{pl: '2em', margin: '1em 0', height: '160px', maxHeight: '160px', overflowY: 'auto', p: 2}}>

                                <Typography>
                                    <strong>Interfaz: </strong> { pc.interfazInternet }
                                </Typography>
                                <Typography>
                                    <strong>IP: </strong> { pc.ip }
                                </Typography>
                                <Typography>
                                    <strong>MAC: </strong> { pc.mac }
                                </Typography>
                                <Typography>
                                    <strong>Permisos: </strong> { pc.permisos }
                                </Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                )
            }

            

        </Grid>
    )
}
