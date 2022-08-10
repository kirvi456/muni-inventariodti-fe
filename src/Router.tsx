
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterLayout } from './common/RouterLayout';
import { ActualizacionPage } from './pages/Computadora/Actualizacion';
import { PCDescriptionPage } from './pages/Computadora/Descripcion';
import { LectorPage } from './pages/Computadora/Lector';
import { RegistrarPCPage } from './pages/Computadora/Registrar';
import { LoginPage } from './pages/Login';
import { MenuPage } from './pages/Menu';
import { RegistrarPage } from './pages/Registrar';


export const AppRouter : React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path='/' element={<MenuPage />} />
                
                <Route path='/computadora/actualizar/:id' element={<ActualizacionPage />} />
                <Route path='/computadora/registrar' element={<RegistrarPCPage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/registro' element={<RegistrarPage />} />
            <Route path='/Equipo/lector' element={<LectorPage />}></Route>
            <Route path='/Equipo' element={<PCDescriptionPage />}></Route>
        </Routes>
    )
}