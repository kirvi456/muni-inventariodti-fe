import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { URLSContext } from '../../../../context/URLs.context'

import useFetch from '../../../../hooks/useFetch'
import { Computadora } from '../../../../models/Computadora'
import { ReporteResponsabilidad } from './Responsabilidad'

import { Stack, Container, Button } from '@mui/material'

import QueryString from 'query-string'
import { jsPDF } from "jspdf";

import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';

export const ReporteResponsabilidadPage = () => {

    const URLS = useContext( URLSContext )

    const { search } = useLocation();

    const { equipoid = '' } = QueryString.parse( search )

    const { data, error } = useFetch<Computadora>(`${URLS.computadoras}/${equipoid}`)

    const generarPDF = (option : number) => {
        const doc = new jsPDF({
                orientation: 'p', // landscape
                unit: 'mm', // points, pixels won't work properly
                format: [215, 279] // set needed dimensions for any element
        });

        const pdfjs = document.querySelector<HTMLDivElement>('#divImprimir');

        // Convert HTML to PDF in JavaScript
        doc.html(pdfjs || 'Error Interno', {
            html2canvas:{
                scale: 0.25
            },
            x: 8,
            y: 8,
            callback: function(doc) {
                
                if( option === 1 ) doc.save("output.pdf");
                else doc.output('dataurlnewwindow')
            },
        });
    }



    if (error) return ( <div>no encontrado {equipoid}</div> )
    if (!data) return ( <div>cargando. . . </div> )

    return (
        <Container>
            <Stack alignItems='center' spacing={2}>
                <Stack sx={{width: '800px'}} spacing={1} direction='row' justifyContent='end'>  
                    <Button 
                        variant='contained'
                        startIcon={ <DownloadIcon /> }
                        onClick={ () => generarPDF(1) }
                    >
                        Descargar
                    </Button>
                    <Button 
                        variant='contained'
                        startIcon={ <PrintIcon /> }
                        onClick={ () => generarPDF(2) }
                    >
                        Imprimir
                    </Button>
                </Stack>
                <ReporteResponsabilidad equipo={data} />

            </Stack>
        </Container>
    )
}
