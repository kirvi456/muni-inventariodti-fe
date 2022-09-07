import React from 'react'

import { Typography, Stack, Paper, Box } from '@mui/material';
import Logo_Muni from '../../../../assets/imgs/logo_light.jpg';
import { Computadora } from '../../../../models/Computadora';

export const ReporteResponsabilidad = ({equipo} : {equipo: Computadora}) => {
    const date = new Date();

    const getMonth = () : string => {
        switch(date.getMonth()){
            case 0: return 'enero';
            case 1: return 'febrero';
            case 2: return 'marzo';
            case 3: return 'abril';
            case 4: return 'mayo';
            case 5: return 'junio';
            case 6: return 'julio';
            case 7: return 'agosto';
            case 8: return 'septiembre';
            case 9: return 'octubre';
            case 10: return 'noviembre';
            case 11: return 'diciembre';
            default: return 'undefined';
        }
    }

    return (
        <Paper elevation={4} sx={{p: 1, width: '832px', margin: 'auto', bgcolor: 'white', color: 'black'}}>
        <Box sx={{width: '800px', paddingTop: 3, margin: 'auto', color: 'black'}} id="divImprimir">        
            <Typography variant='caption' textAlign='right' component='div'>
                San José Pinula {date.getDate()} de {getMonth()} de 2022
            </Typography>
            <Stack direction='row' sx={{justifyContent: 'space-around', margin: 'auto', alignItems: 'center', marginBottom: '16px'}}>                
                <img src={Logo_Muni} style={{height: '80px'}} alt="Muni SJP"/>
                <Typography variant="h4" align='center' sx={{ marginBottom: '12px'}}>
                    Inventario Equipo de Computo
                </Typography>        
            </Stack>            
            <Box sx={{height: '12px'}}></Box>
            <Typography variant='body2' textAlign='justify'>
                En el municipio de San José Pinula a los {date.getDate()} días del mes de {getMonth()} del año 2022, por 
                parte de la Dirección de Tecnología de la Información se realizó una auditoria del equipo 
                descrito en este documento con el fin de establecer una base de datos del equipo de computo del 
                que se esta haciendo uso dentro de la Municipalidad de San José Pinula. 
            </Typography>
            <Box sx={{height: '24px'}}></Box>
            <Typography variant='body2' textAlign='justify'>
                Todos lo descrito se encuentran en un estado funcional. Se deja constancia que el equipo tiene carácter de responsabilidad
                y por lo tanto firman el pie de presente el responsable del equipo y quien realizó la verificación.
            </Typography>            
            <Box sx={{height: '24px'}}></Box>
            <Box sx={{paddingLeft: '24px'}}>
                <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                    Responsable del Equipo
                </Typography>                 
                <Box sx={{height: '12px'}}></Box>  
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Nombre:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.responsable.nombre}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Puesto:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.responsable.puesto}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Unidad/Dirección:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.unidad?.nombre || 'N/A'}
                    </Typography>  
                </Stack> 
            </Box>
            <Box sx={{height: '12px'}}></Box>
            <Box sx={{paddingLeft: '24px'}}>
                <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                    Caracteristicas del Equipo
                </Typography>                 
                <Box sx={{height: '12px'}}></Box>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Nombre del Equipo:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.nombreEquipo}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Sistema Operativo:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.SO + ' ' + equipo.SODesc}
                    </Typography>  
                </Stack>    
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Sistema Operativo Original:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.SOoriginal ? 'SI' : 'NO'}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Herramienta de Ofimática:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.ofimaticaDesc}
                    </Typography>  
                </Stack>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Office Original:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.ofimaticaOriginal ? 'SI' : 'NO'}
                    </Typography>  
                </Stack>                  
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Disco Duro:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.almacenamiento.join(', ')}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        RAM:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.RAM.join(', ')}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Procesador:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.procesador}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Video :
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.video.join(', ')}
                    </Typography>  
                </Stack>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Monitor:
                    </Typography>     
                    <Typography variant="caption">
                        {`${equipo.marcaMonitor}  (${equipo.tamMonitor}) ${equipo.serieMonitor}`}
                    </Typography>  
                </Stack>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Teclado:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.teclado}
                    </Typography>  
                </Stack>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Mouse:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.mouse}
                    </Typography>  
                </Stack>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Otros Perifericos:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.otrosPerifericos.length > 0 ? equipo.otrosPerifericos.join(', ') : 'Sin periféricos extra'}
                    </Typography>  
                </Stack>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        UPS:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.ups ? equipo.upsDesc : 'Sin UPS'}
                    </Typography>  
                </Stack>
            </Box>
            <Box sx={{height: '12px'}}></Box>
            <Box sx={{paddingLeft: '24px'}}>
                <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                    Configuracion Red
                </Typography>                 
                <Box sx={{height: '12px'}}></Box>
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Tiene Internet:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.internet ? 'SI' : 'NO'}
                    </Typography>  
                </Stack>    
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Interfaz:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.internet ? equipo.interfazInternet : 'Sin interfaz de internet'}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        IP (estatica):
                    </Typography>     
                    <Typography variant="caption">
                    {equipo.internet ? equipo.ip : '0.0.0.0'}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        MAC:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.internet ? equipo.mac : 'No es necesaria'}
                    </Typography>  
                </Stack> 
                <Stack direction='row' spacing={2}>  
                    <Typography variant="caption" sx={{fontWeight: 'bold', paddingLeft: '32px'}}>
                        Permisos:
                    </Typography>     
                    <Typography variant="caption">
                        {equipo.internet ? equipo.permisos : 'No son necesario'}
                    </Typography>  
                </Stack> 
            </Box>
            <Box sx={{height: '64px', justifyContent: 'center'}} ></Box>
            <Stack direction='row' spacing={10} sx={{justifyContent: 'center',}}>  
                <Typography variant="caption" sx={{fontWeight: 'bold',  textAlign:'center'}}>
                    ____________________________________
                </Typography>     
                <Typography variant="caption">
                    ____________________________________
                </Typography>                  
            </Stack> 
            <Stack direction='row' spacing={30} sx={{paddingLeft: '160px',}}>  
                <Typography variant="caption" sx={{fontWeight: 'bold', textAlign:'center'}}>
                    Revisor: 
                </Typography>     
                <Typography variant="caption" sx={{fontWeight: 'bold', textAlign:'center'}}>
                    Responsable:
                </Typography>                  
            </Stack> 
        </Box>
        </Paper>
    )
}