import React, { useState } from 'react'
import { Stack, Paper } from '@mui/material'
import { Computadora } from '../../../models/Computadora';
import { FormularioPersona } from '../Registrar/FormularioPersona';
import { FormularioEquipo } from '../Registrar/FormularioEquipo';
import { FormularioRed } from '../Registrar/FormularioRed';
import { FormMovitoActualizacion } from './FormMovitoActualizacion';
import { LoadingButton } from '@mui/lab';
import { updateComputadora } from '../../../services/computadora/computadora';
import { useNotification } from '../../../hooks/useNotification';
import { Actualizacion, emptyActualizacion } from '../../../models/Actualizacion';

type ActualizacionFormProps = {
    equipo : Computadora, 
    setEquipo : React.Dispatch<React.SetStateAction<Computadora>>
}

export const ActualizacionForm : React.FC<ActualizacionFormProps> = ({equipo, setEquipo}) => {
    
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ motivo, setMotivo ] = useState<Actualizacion>( emptyActualizacion )


    const { openErrorNotification, openSuccessNotification } = useNotification();
    
    const guardarPC = async () => {

        setLoading(true);


        const pc = await updateComputadora( equipo, motivo );

        if( !pc.response ){
            openErrorNotification( pc.message! );
            setLoading( false );
            return ;
        }

        openSuccessNotification('Computadora registrada');
        
        setLoading( false );
    }

    return (
        <Stack spacing={2}  sx={{ maxWidth: 'sm', margin: 'auto', mt: 2, mb: 6}}>
            
            <Paper sx={{p: 2}}>
                <FormularioPersona
                    equipo={equipo}
                    setEquipo={setEquipo}
                />
            </Paper>

            <Paper sx={{p: 2}}>
                <FormularioEquipo
                    equipo={equipo}
                    setEquipo={setEquipo}
                />
            </Paper>

            <Paper sx={{p: 2}}>
                <FormularioRed
                    equipo={equipo}
                    setEquipo={setEquipo}
                />
            </Paper>

            <FormMovitoActualizacion motivo={motivo} setMotivo={setMotivo} />

            <LoadingButton 
                variant='contained' 
                fullWidth 
                loading={ loading }
                onClick={ guardarPC }
            > 
                Actualizar
            </LoadingButton>

        </Stack>
    )
}
