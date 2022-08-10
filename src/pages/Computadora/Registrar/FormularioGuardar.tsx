import { Stack, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNotification } from '../../../hooks/useNotification'
import { Computadora } from '../../../models/Computadora'
import { getQR, saveComputadora } from '../../../services/computadora/computadora'

type FormularioGuardarProps = {
    equipo : Computadora
}

export const FormularioGuardar : React.FC<FormularioGuardarProps> = ({ equipo }) => {

    const [showQR, setShowQR] = useState<boolean>(false);
    const [img, setImg] = useState<string>('');

    const { openErrorNotification, openSuccessNotification } = useNotification();

    

    const guardarPC = async () => {
        const pc = await saveComputadora( equipo );

        if( !pc.response ){
            openErrorNotification( pc.message! );
            return ;
        }

        openSuccessNotification('Computadora registrada')

        debugger;
        const resultImg = await getQR(pc.payload?._id || '')


        if( !resultImg.payload || resultImg.payload === '' ){
            openErrorNotification( '[Error]: No se generó el QR, pruebe generandolo luego.' );
            return;
        }
        setShowQR( true );
        setImg( resultImg.payload ?? '' )
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
            <Button 
                variant='contained'
                onClick={guardarPC}
            > 
                Guardar y Generar QR 
            </Button>
        </Stack>
    )
}
