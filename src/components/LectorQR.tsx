import {  Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { QrReader } from './QRReader';

type LectorQRProps = {
    setData: React.Dispatch<React.SetStateAction<string>>
}

export const LectorQR : React.FC<LectorQRProps> = ( { setData } ) => {

    return (
        <>
        
            <Stack
                sx={{
                    width:'250px',
                    margin: 'auto',                    
                    borderRadius: '0.5em',
                    overflow: 'hidden'
                }}
            >
                <QrReader
                    onResult={
                        (result : any, error : Error | null | undefined) => {
                            if(!!result && !!result.text && result.text !== ''){
                                console.log('hola',result)
                                setData(result.text)
                            }

                            if(!!error && error.name !== 'NotFoundException'){
                                console.log(error)
                            }
                        }
                    }
                    constraints={{facingMode : {ideal: 'environment'}}}
                />
            </Stack>         
        </>
    )
}
