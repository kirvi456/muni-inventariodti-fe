import { Stack, Typography } from '@mui/material'
import React from 'react'
import Empty from '../../../assets/svgs/empty.svg';


export const ActividadesList = () => {
    return (
        <Stack alignItems='center'>
            <img 
                src={ Empty } 
                alt='fdjskla' 
                style={{
                width: '300px',
                maxWidth: '80%'
            }}></img>
            <Typography variant='h6'>Sin actividades registradas</Typography>
        </Stack>
    )
}
