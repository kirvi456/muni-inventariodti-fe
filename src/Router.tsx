
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoAuthLayout, AuthLayout, AnyAuthLayout } from './common/Layouts';
import { BuscadorPC } from './pages/Computadora/Buscador';
import { ActualizacionPage } from './pages/Computadora/Actualizacion';
import { PCDescriptionPage } from './pages/Computadora/Descripcion';
import { RegistrarPCPage } from './pages/Computadora/Registrar';
import { LoginPage } from './pages/Login';
import { MenuPage } from './pages/Menu';
import { RegistrarPage } from './pages/Registrar';
import { QRPCPage } from './pages/Computadora/QR';
import { ReporteResponsabilidadPage } from './pages/Computadora/Reportes/Responsabilidad';


export const AppRouter : React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<AuthLayout />}>
                <Route path='/' element={<MenuPage />} />
                
                <Route path='/computadoras' element={<BuscadorPC />} />
                <Route path='/computadora/actualizar' element={<ActualizacionPage />} />
                <Route path='/computadora/registrar' element={<RegistrarPCPage />} />
                <Route path='/computadora/responsabilidad-reporte' element={<ReporteResponsabilidadPage />} />
                <Route path='/computadora/qr' element={<QRPCPage />} />
            </Route>

            <Route path='/' element={<NoAuthLayout />}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registro' element={<RegistrarPage />} />
                <Route path='/equipo' element={<PCDescriptionPage />}></Route>
            </Route>

            <Route path='/' element={<AnyAuthLayout  navbar={false} />}>
                <Route path='/equipo' element={<PCDescriptionPage />}></Route>
            </Route>
        </Routes>
    )
}