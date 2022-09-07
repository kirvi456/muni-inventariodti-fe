import React, { useState } from 'react'
import { Button, Stack } from '@mui/material'
import { SedesSelect } from '../Registrar/SedesSelect';
import { UnidadesSelect } from '../Registrar/UnidadesSelect';
import { useNavigate } from 'react-router-dom';

type BuscadorHeaderProps = {
    sedeID: string,
    unidadID: string
}

export const BuscadorHeader : React.FC<BuscadorHeaderProps> = React.memo( ({ sedeID, unidadID }) => {

    const navigate = useNavigate();

    const [ sede, setSede ] = useState<string>(sedeID);
    const [ unidad, setUnidad ] = useState<string>(unidadID);

    const handleSedeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSede(e.target.value)
    }

    const handleUnidadChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUnidad(e.target.value)
    }

    const handleBusqueda = () => {
        navigate(`/computadoras?sedeID=${sede}&unidadID=${unidad}`, { replace: true })
    }

    return (
        <Stack spacing={2}>
            <SedesSelect 
                value={ sede || '' }
                onChange={ handleSedeChange }
                name='ubicacion'
                label='Ubicación'
                size='small'
                fullWidth
            />

            <UnidadesSelect 
                value={ unidad || ''}
                onChange={ handleUnidadChange }
                name='unidad'
                label='Unidad/Dirección'
                size='small'
                fullWidth
            />

            <Button 
                variant='contained'
                onClick={ handleBusqueda }
            >
                Buscar
            </Button>
        </Stack>
    )
})
