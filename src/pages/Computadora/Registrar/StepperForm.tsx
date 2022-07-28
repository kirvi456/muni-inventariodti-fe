import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


import { Computadora, emptyComputadora } from '../../../models/Computadora';


import { FormularioPersona }  from './FormularioPersona';
import { FormularioEquipo }  from './FormularioEquipo';
import { FormularioRed }  from './FormularioRed';


const steps = ['Información Personal', 'Información Equipo', 'Configuracion Red'];

export default function StepperForm() {
    
    const [equipo, setEquipo] = useState<Computadora>(emptyComputadora);

    
    const [activeStep, setActiveStep] = useState(0);

    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
    <>
    <Paper sx={{width: '700px', maxWidth: '90%', margin: 'auto'}} elevation={4}>


        <Stepper activeStep={activeStep} alternativeLabel sx={{backgroundColor: 'action.selected', padding: '16px 0'}}>
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>

        <Box sx={{padding: '0 16px 16px 16px'}}>   
                    {activeStep === 0 && <FormularioPersona equipo={equipo} setEquipo={setEquipo} />}                
                    {activeStep === 1 && <FormularioEquipo equipo={equipo} setEquipo={setEquipo} />}                
                    {activeStep === 2 && <FormularioRed equipo={equipo} setEquipo={setEquipo} />}


                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'end' }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Anterior
                        </Button>            
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </Button>
                        <Button onClick={() => console.log(JSON.stringify(equipo))} >imprimir</Button>
                    </Box>
            
        </Box>
    </Paper>
    </>
    );
}