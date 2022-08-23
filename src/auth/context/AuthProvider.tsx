import React, { useReducer } from 'react'
import { AuthAction, AuthActionsKind } from '../models/enums'
import { Auth, User } from '../models/usert'
import { loginService } from '../services/login'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

const initialState : Auth = {
    logged: false,
    user: undefined
}

type AuthProviderProps = {
    children : JSX.Element
}

const initSesion = () : Auth => {

    localStorage.getItem('user');

    const user = JSON.parse( localStorage.getItem('user') ?? 'null' ) ?? undefined;

    // TODO: Verificar que el usuario tenga estructura correcta
    //TODO: Verificar que el token no haya expirado


    return {
        logged: !!user,
        user: user
    }

}

export const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState, initSesion )


    const login = async ( url: string, user : string, pw : string) : Promise<string> => {

        //Hacer la peticion al BE 
        const loginResponse = await loginService ( url, user, pw );

        //Cualquier error Reportarlo
        if( !loginResponse.response ) return loginResponse.message || '[ERROR]: Contacte con el administrador.';

        // Generar el payload a guardar con el reducer
        const respUser = loginResponse.data!;

        const userInfo : User = {
            ...respUser.usuarioInstancia,
            token: respUser.token,
            img : ''
        }

        // Definir la accion
        const action : AuthAction = {
            type: AuthActionsKind.login,
            payload: userInfo
        }

        // Disparar el cambio
        dispatch( action )

        // Grabar el usuario en el local storage
        window.localStorage.setItem( 'user', JSON.stringify( userInfo ) )

        return '';

    }

    const logout = ()  => {        

        
        // Definir la accion
        const action : AuthAction = {
            type: AuthActionsKind.logout,
            payload: undefined
        }

        // Disparar el cambio
        dispatch( action )

        // Grabar el usuario en el local storage
        window.localStorage.removeItem( 'user' )

    }

    return (
        <AuthContext.Provider 
            value = {{ 
                authState, 
                login,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
