import React, { useState, useContext, useEffect } from 'react'
import { Container } from '@mui/material'
import { Computadora, emptyComputadora } from '../../../models/Computadora'
import useFetch from '../../../hooks/useFetch';
import { URLSContext } from '../../../context/URLs.context';
import { ActualizacionForm } from './ActualizacionForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const ActualizacionPage = () => {

    const URLS = useContext( URLSContext )


    // obtener el id del equipo
    const location = useLocation();
    const { equipoid = ''} = queryString.parse( location.search );

    const { data, error } = useFetch<Computadora>(`${URLS.computadoras}/${equipoid}`)

    const [compuCambios, setCompuCambios] = useState<Computadora>(emptyComputadora)

    useEffect( ()=>{
      setCompuCambios( data || emptyComputadora )
    }, [data] )
    
    
    if (error) return ( <div>no encontrado {equipoid}</div> )
    if (!data) return ( <div>cargando</div> )


    return ( 
      <Container>
        <ActualizacionForm equipo={ compuCambios! } setEquipo={ setCompuCambios } /> 
      </Container>
    )
}
