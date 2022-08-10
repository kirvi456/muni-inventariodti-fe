import React from 'react';

type URLSList = {
    auth: string;
    usuario: string;
    sedes: string;
    unidades: string;
    computadoras: string;
}


const myURLS : URLSList = {
    auth:           `${process.env.REACT_APP_BASE_URL}api/auth`,
    usuario:        `${process.env.REACT_APP_BASE_URL}api/usuarios`,
    sedes:          `${process.env.REACT_APP_BASE_URL}api/sedes`,
    unidades:       `${process.env.REACT_APP_BASE_URL}api/unidades`,
    computadoras:   `${process.env.REACT_APP_BASE_URL}api/PCS`,
}


export const URLSContext = React.createContext<URLSList >(myURLS);

export const URLSProvider : React.FC<{children : JSX.Element}> = ({children}) => {

    const value = myURLS;

    return (
        <URLSContext.Provider value={value}>
            { children }
        </URLSContext.Provider>
    )
}