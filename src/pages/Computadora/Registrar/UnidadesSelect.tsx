import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { URLSContext } from '../../../context/URLs.context';
import { FetchRequest } from '../../../utils/MakeRequest';



interface Unidad {
    nombre: string,
    abreviatura: string,
    id: string,
    _id: string,
}

export const UnidadesSelect = (props : TextFieldProps) => {

    const [ items, setItems ] = useState<Unidad[]>([]);
    const URLS = React.useContext(URLSContext);

    useEffect(() => {

        FetchRequest<{result: Unidad[]}>(
            `${URLS.unidades}/`,
            'GET',
            undefined          
        ).then(({ data }) => setItems(data ? data.result : []))

        
    }, [URLS.unidades])
    

    return (
        <TextField
            select={ items.length > 0}
            {...props}
        >
            {
                items.map( unidad => (
                    <MenuItem key={unidad._id} value={unidad._id}>{`${unidad.nombre} (${unidad.abreviatura})`}</MenuItem>
                ))
            }
        </TextField>
    )
}
