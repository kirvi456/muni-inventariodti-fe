import React from 'react'
import {  Container, Typography   } from '@mui/material';
import  StepperForm  from './StepperForm';




export const RegistrarPCPage = () => {
    return (
        <Container maxWidth='xl' sx={{margin: '12px auto'}}>   
                <Typography variant="h3" align='center' sx={{ marginBottom: '12px', color: 'text.primary'}}>    
                    Registro Equipo
                </Typography>         
                <StepperForm />
        </Container>  
    )
}
