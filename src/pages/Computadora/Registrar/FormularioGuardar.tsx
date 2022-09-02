import { Stack, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNotification } from '../../../hooks/useNotification'
import { Computadora } from '../../../models/Computadora'
import { getQR, saveComputadora } from '../../../services/computadora/computadora'

import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

type FormularioGuardarProps = {
    equipo : Computadora,
    limpiarComputadora : () => void
}

export const FormularioGuardar : React.FC<FormularioGuardarProps> = ({ equipo, limpiarComputadora }) => {

    const [showQR, setShowQR] = useState<boolean>(false);
    const [img, setImg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const { openErrorNotification, openSuccessNotification } = useNotification();

    const guardarPC = async () => {
        setLoading(true);
        const pc = await saveComputadora( equipo );

        if( !pc.response ){
            openErrorNotification( pc.message! );
            setLoading( false );
            return ;
        }

        openSuccessNotification('Computadora registrada')


        const resultImg = await getQR(pc.payload?._id || '')


        if( !resultImg.payload || resultImg.payload === '' ){
            openErrorNotification( '[Error]: No se generó el QR, pruebe generarlo luego.' );
            setLoading( false );
            return;
        }
        setShowQR( true );
        setImg( resultImg.payload ?? '' )
        setLoading( false );
    }


    if( showQR ) return (
        <Stack  spacing={2} sx={{m: '12px 0'}}>
            <Typography variant='h6' textAlign='center'>
                QR Generado
            </Typography>
            <img
                src={img}
                alt='QR'
                style={{
                    width: '200px',
                    margin: '12px auto'
                }}
            />
            <Typography textAlign='center'>
                Guarde la imagen haciendo click derecho sobre ella.
            </Typography>
            <Button
                onClick={limpiarComputadora}
            >Aceptar</Button>
        </Stack>
    )

    return (
        <Stack spacing={2} sx={{m: '12px 0'}}>
            <Typography variant='h6' textAlign='center'>
                Requistrar Equipo
            </Typography>
            <Typography textAlign='justify'>
                Se esta por registrar una computadora dentro del inventario de equipo de computo
                de la Dirección de Tecnología de la Información de la Municipalidad de San Jose Pinula. 
                Se debe estar seguro que este equipo no esta registrado anteriormente y que todo lo descrito
                sea verídico.
            </Typography>
            <LoadingButton 
                loading={loading}
                variant='contained'
                onClick={guardarPC}
                loadingPosition="start"
                startIcon={<SaveIcon />}
            > 
                Guardar y Generar QR 
            </LoadingButton>
        </Stack>
    )
}
