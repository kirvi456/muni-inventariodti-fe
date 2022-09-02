import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { NavBar } from '../NavBar/NavBar';


export const AuthLayout : React.FC<{}> = () =>{
    
    const { authState } = useContext( AuthContext );

    return (        
        authState.logged
        ? ( <> <NavBar /> <Outlet /> </> )
        : <Navigate to='/login' />        
    )
}