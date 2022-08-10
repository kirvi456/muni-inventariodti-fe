import React, { useState, useContext } from 'react'
import { Container, Stack } from '@mui/material'
import { Computadora } from '../../../models/Computadora';
import { PCHeader } from './PCHeder';
import { PCEtiqueta } from './PCEtiqueta';
import { PCOptionShow } from './PCOptionShow';
import { InformacionGeneral } from './InformacionGeneral';
import { ActividadesList } from './ActividadesList';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { URLSContext } from '../../../context/URLs.context';
import { NotFound } from './NotFound';
import { EquipoSkeleton } from './Skeleton';
import queryString from 'query-string';


type SelectionOptions = 'info' | 'actividades';

export const PCDescriptionPage = () => {


    const URLS = useContext( URLSContext )

    const location = useLocation();
    const { equipoid = ''} = queryString.parse( location.search );


    const [option, setOption] = useState<SelectionOptions>('info');


    const handleOption = (
        event: React.MouseEvent<HTMLElement>,
        option: SelectionOptions,
    ) => {
        setOption(option);
    };

    const { data, error } = useFetch<Computadora>(`${URLS.computadoras}/${equipoid}`)
    
    if (error) return ( <NotFound /> )
    if (!data) return ( <EquipoSkeleton />)

    return (
        <Container>
            <Stack sx={{position: 'relative'}}>

                <PCEtiqueta 
                    pc={data}
                />

                <PCHeader
                    pc={data}
                    url={URLS.computadoras + '/imagen/' + equipoid}
                />

                <PCOptionShow 
                    option={option}
                    handleOption={handleOption}
                />

                {
                    option === 'info'

                    ? (
                        <InformacionGeneral 
                            pc={data}             
                        />
                    )
                    : (
                        <ActividadesList 
                        
                        />
                    )
                }


            </Stack>
        </Container>
    )
}
