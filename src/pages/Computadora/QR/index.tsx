import React, { useEffect, useState } from 'react'
import { getQR } from '../../../services/computadora/computadora'

import queryString from 'query-string';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Stack, Grid, Button } from '@mui/material';

import PrintIcon from '@mui/icons-material/Print';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Void from '../../../assets/svgs/empty.svg'

export const QRPCPage = () => {

    const navigate = useNavigate();

    const [ qr, setQR ] = useState<string>('')

    const { search = '' } = useLocation();
    const { equipoid = '' } = queryString.parse( search );
    
    const obtenerQRImage = async () => {
        try {

            const id = typeof equipoid === 'string' ? equipoid : '';

            const resultImg = await getQR( id );

            if( !resultImg.payload || resultImg.payload === '' ){
                setQR( '' );
                return;
            }

            setQR( resultImg.payload )

        } catch( error ) {
            setQR('')
        }
    }

    useEffect( () => {
        obtenerQRImage();
    }, [])


    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = qr;
        link.download = "image.png";
        link.click();
    }

    const handlePrint = () => {
        const win = window.open(qr, '_blank')
        win!.print()
    }

    if( qr === '' ) return (
        <Container>
            <Stack spacing={2} alignItems='center'>
                <Typography variant='h6'>
                    No se pudo generar el código QR
                </Typography>
                <Typography variant='caption'>
                    Verifique su conexión a internet o hable con el administrador
                </Typography>
                <img 
                    src={ Void }
                    alt='QR Imagen'
                    style={{
                        width: '180px'
                    }}
                />
                <Button variant='contained'
                    onClick={ () => navigate(-1)}
                >Regresar</Button>
            </Stack>
        </Container>
    )

    return (
        <Container>
            <Stack spacing={2} alignItems='center'>
                <Typography variant='h6'>
                    Código QR Generado
                </Typography>
                <img 
                    src={qr}
                    alt='QR Imagen'
                    style={{
                        width: '180px'
                    }}
                />
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Button 
                            startIcon={<SaveAltIcon />}
                            variant='contained' 
                            fullWidth
                            onClick={ handleDownload }
                        >
                            Descargar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button 
                            startIcon={<PrintIcon />}
                            fullWidth
                            variant='contained'
                            onClick={ handlePrint }
                        >
                            Imprimir
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    )
}
