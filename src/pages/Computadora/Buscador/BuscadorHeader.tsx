import React, { useState } from 'react'
import { Button, Stack } from '@mui/material'
import { SedesSelect } from '../Registrar/SedesSelect';
import { UnidadesSelect } from '../Registrar/UnidadesSelect';

type BuscadorHeaderProps = {
    sede: string,
    unidad: string,
    handleSedeChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleUnidadChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleBusqueda: () => void
}


export const BuscadorHeader : React.FC<BuscadorHeaderProps> = ({sede, unidad, handleSedeChange, handleUnidadChange, handleBusqueda}) => {

    

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
}
