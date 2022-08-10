import React, { useState, useContext, useEffect } from 'react'
import { Container, Stack, Paper} from '@mui/material'
import { Computadora, emptyComputadora } from '../../../models/Computadora';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { URLSContext } from '../../../context/URLs.context';
import { ActualizacionForm } from './ActualizacionForm';


export const ActualizacionPage = () => {

    const URLS = useContext( URLSContext )

    const { id } = useParams();

    const { data, error } = useFetch<Computadora>(`${URLS.computadoras}/${id}`)

    const [compuCambios, setCompuCambios] = useState<Computadora>(emptyComputadora)

    useEffect( ()=>{
      setCompuCambios(data || emptyComputadora)
    }, [data])
    
    
    if (error) return ( <div>no encontrado</div> )
    if (!data) return ( <div>cargando</div> )


    return ( 
      <Container>
        <ActualizacionForm equipo={compuCambios!} setEquipo={ setCompuCambios } /> 
      </Container>
    )
}
