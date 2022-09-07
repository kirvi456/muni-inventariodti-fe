import React, { useContext, useEffect, useState } from 'react'
import { Container, Stack } from '@mui/material';
import { Computadora } from '../../../models/Computadora';
import { BuscadorHeader } from './BuscadorHeader';
import { ListadoPcs } from './ListadoPcs';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useFetch from '../../../hooks/useFetch';
import { URLSContext } from '../../../context/URLs.context';

export const BuscadorPC = () => {
    
    const URLS = useContext( URLSContext )
    
    
    const { search } =  useLocation();
    const { sedeID = '', unidadID = '' } = queryString.parse( search );

    
    const [ pcs, setPcs ] = useState<Computadora[]>([]);

    const { data, error } = useFetch<Computadora[]>(`${URLS.computadoras}?sedeID=${sedeID}&unidadID=${unidadID}`)



    useEffect(() => {
        if( data && Array.isArray( data ) ) setPcs([...data]);
        if( error ) setPcs([]); 
    }, [data])

    return (
        <Container>
            <Stack spacing={2}>
                <BuscadorHeader 
                    sedeID={typeof sedeID === 'string' ? sedeID : ''}
                    unidadID={typeof unidadID === 'string' ? unidadID : ''}
                />

                <ListadoPcs 
                    pcs={ pcs }
                />
            </Stack>
            
        </Container>
    )
}
