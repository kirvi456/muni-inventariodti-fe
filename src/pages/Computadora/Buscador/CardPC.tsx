import React, { useContext } from 'react'
import { Grid, Paper, Typography, Stack, Box, Divider, IconButton, Tooltip } from '@mui/material'
import { Computadora } from '../../../models/Computadora'
import { URLSContext } from '../../../context/URLs.context'


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SummarizeIcon from '@mui/icons-material/Summarize';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useNavigate } from 'react-router-dom';

type CardPcProps = {
    pc : Computadora
}

export const CardPC : React.FC<CardPcProps> = ({pc}) => {

    const navigate = useNavigate();

    const URLS = useContext( URLSContext )
    const url = URLS.computadoras + '/imagen/' + pc._id

    const handleShowQr = () => {
        navigate( '/computadora/qr?equipoid=' + pc._id )
    }
    
    const handleEdit = () => {
        navigate( '/computadora/actualizar?equipoid=' + pc._id )
    }

    const handleRespReport = () => {
        navigate( '/computadora/responsabilidad-reporte?equipoid=' + pc._id )
    }

    return (
        <Paper 
            sx={{
                pt: 2, 
                pl: 2, 
                pr: 2, 
                position: 'relative', 
                overflow: 'hidden', 
                maxWidth: '500px'
            }}
        >
            <Stack>            
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        top: 0, 
                        right: 0,
                        p: 1,
                        bgcolor: 'primary.main',
                        borderRadius: '0 0 0 8px'
                    }}
                >
                    { pc.unidad?.abreviatura || 'N/A' }
                </Box>
                <Grid container sx={{alignItems: 'center'}}>
                    <Grid item xs={4}>
                        <img 
                            src={ url } 
                            alt='imagen equipo'
                            style={{
                                maxWidth: '100px', 
                                borderRadius: '4px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Stack>
                            <Typography  variant='h6' component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                {pc.responsable.puesto.toUpperCase()}
                            </Typography>
                            <Typography component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                {pc.responsable.nombre}
                            </Typography>
                            <Typography variant='caption' component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                {pc.nombreEquipo }
                            </Typography>
                            <Typography variant='caption' component='span' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                {pc.ip || '0.0.0.0'}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider />
                <Stack direction='row' justifyContent='end' spacing={1} sx={{mt: 1, mb: 1}}>

                    <Tooltip title="Registrar Actividad">
                        <IconButton aria-label='actividad pc' size='small'>
                            <AppRegistrationIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Generar QR">
                        <IconButton 
                            aria-label='generar qr' 
                            size='small'
                            onClick={ handleShowQr }
                        >
                            <QrCodeIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Gemerar Reporte">
                        <IconButton 
                            aria-label='reporte responsabilidad' 
                            size='small'
                            onClick={ handleRespReport }
                        >
                            <SummarizeIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Editar">
                        <IconButton 
                            aria-label='editar pc' 
                            size='small'
                            onClick={ handleEdit }
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Eliminar">
                        <IconButton aria-label='delete pc' size='small'>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>

                </Stack>
            </Stack>
        </Paper>
    )
}
