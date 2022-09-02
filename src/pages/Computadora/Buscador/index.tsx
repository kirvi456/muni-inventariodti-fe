import React, { useContext, useEffect, useState } from 'react'
import { Container, Stack } from '@mui/material';
import { Computadora } from '../../../models/Computadora';
import { BuscadorHeader } from './BuscadorHeader';
import { ListadoPcs } from './ListadoPcs';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import useFetch from '../../../hooks/useFetch';
import { URLSContext } from '../../../context/URLs.context';

export const BuscadorPC = () => {
    
    const URLS = useContext( URLSContext )
    
    
    const { search } =  useLocation();
    const { sedeID = '', unidadID = '' } = queryString.parse( search );

    const navigate = useNavigate();

    
    const [ sede, setSede ] = useState<string>(typeof sedeID === 'string' ? sedeID : '');
    const [ unidad, setUnidad ] = useState<string>(typeof unidadID === 'string' ? unidadID : '');
    const [ pcs, setPcs ] = useState<Computadora[]>([]);

    const { data, error } = useFetch<Computadora[]>(`${URLS.computadoras}?sedeID=${sede}&unidadID=${unidad}`)

    const handleSedeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSede(e.target.value)
    }

    const handleUnidadChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUnidad(e.target.value)
        console.log(unidad)
    }

    const handleBusqueda = () => {
        navigate(`?sedeID=${sede}&unidadID=${unidad}`)
    }

    useEffect(() => {
        if( data && Array.isArray( data ) ) setPcs([...data])
    }, [data])

    return (
        <Container>
            <Stack spacing={2}>
                <BuscadorHeader 
                    sede={ sede } 
                    unidad={ unidad }
                    handleSedeChange={ handleSedeChange }
                    handleUnidadChange={ handleUnidadChange }
                    handleBusqueda={ handleBusqueda }
                />

                <ListadoPcs 
                    pcs={ pcs }
                />
            </Stack>
            
        </Container>
    )
}
