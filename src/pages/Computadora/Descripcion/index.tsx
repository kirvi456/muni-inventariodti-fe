import React, { useState, useContext } from 'react'
import { Container, Stack } from '@mui/material'
import { ComputadoraExtendida } from '../../../models/Computadora';
import { PCHeader } from './PCHeder';
import { PCEtiqueta } from './PCEtiqueta';
import { PCOptionShow } from './PCOptionShow';
import { InformacionGeneral } from './InformacionGeneral';
import { ActividadesList } from './ActividadesList';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { URLSContext } from '../../../context/URLs.context';
import { NotFound } from './NotFound';

type SelectionOptions = 'info' | 'actividades';

export const PCDescriptionPage = () => {

    const URLS = useContext( URLSContext )

    const { id } = useParams();


    const [option, setOption] = useState<SelectionOptions>('info');


    const handleOption = (
        event: React.MouseEvent<HTMLElement>,
        option: SelectionOptions,
    ) => {
        setOption(option);
    };

    const { data, error } = useFetch<ComputadoraExtendida>(`${URLS.computadoras}/${id}`)
    
    if (error) return <NotFound></NotFound>
    if (!data) return <p>Loading...</p>

    return (
        <Container>
            <Stack sx={{position: 'relative'}}>

                <PCEtiqueta 
                    pc={data}
                />

                <PCHeader
                    pc={data}
                    url={URLS.computadoras + '/imagen/' + id}
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
