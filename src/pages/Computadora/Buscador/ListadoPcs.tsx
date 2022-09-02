import { Grid } from '@mui/material'
import React from 'react'
import { Computadora } from '../../../models/Computadora'
import { CardPC } from './CardPC'

type ListadoPcsProps = {
    pcs : Computadora[]
}

export const ListadoPcs : React.FC<ListadoPcsProps> = ({pcs}) => {
    return (
        <Grid container sx={{justifyContent: 'center'}}>
            {
                
                pcs.map(pc => 
                    (
                        <Grid item sx={{p: 1}} key={pc._id}>
                            <CardPC  pc={ pc }  />
                        </Grid>
                    )
                )
            }
        </Grid>
    )
}
