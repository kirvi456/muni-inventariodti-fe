import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { isPrefixUnaryExpression } from 'typescript';
import { URLSContext } from '../../../context/URLs.context';
import { FetchRequest } from '../../../utils/MakeRequest';



interface Sede {
    nombre: string,
    direccion: string,
    id: string,
    _id: string,
}

export const SedesSelect = (props : TextFieldProps) => {

    const [ items, setItems ] = useState<Sede[]>([]);
    const URLS = React.useContext(URLSContext);

    useEffect(() => {

        FetchRequest<{result: Sede[]}>(
            `${URLS.sedes}/`,
            'GET',
            undefined          
        ).then(({ data }) => setItems(data ? data.result : []))

        
    }, [URLS.sedes])
    
    

    return (
        <TextField
            select={items.length > 0}
            value = {props.value || ''}
            {...props}
        >
            {
                items.map( sede => (
                    <MenuItem 
                        key={sede._id} 
                        value={sede._id}
                    >{sede.nombre}</MenuItem>
                ))
            }
        </TextField>
    )
}
