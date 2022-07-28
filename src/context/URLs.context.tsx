import React from 'react';

type URLSList = {
    auth: string;
    usuario: string;
    sedes: string;
    unidades: string;
    computadoras: string;
}

type URLSType = {
    dev: URLSList;
    prod: URLSList;
}

const myURLS : URLSType = {
    dev: {
        auth: 'https://192.168.0.105:8000/api/auth',
        usuario: 'https://192.168.0.105:8000/api/usuarios',
        sedes: 'https://192.168.0.105:8000/api/sedes',
        unidades: 'https://192.168.0.105:8000/api/unidades',
        computadoras: 'https://192.168.0.105:8000/api/PCS',
    },
    prod: {
        auth: '',
        usuario: '',
        sedes: '',
        unidades: '',
        computadoras: '',
    }
}

const currentURLS = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
? myURLS.dev
: myURLS.prod;

export const URLSContext = React.createContext<URLSList >(currentURLS);

export const URLSProvider : React.FC<{children : JSX.Element}> = ({children}) => {

    const value = currentURLS;

    return (
        <URLSContext.Provider value={value}>
            { children }
        </URLSContext.Provider>
    )
}