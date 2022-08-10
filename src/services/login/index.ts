import { FetchRequest } from "../../utils/MakeRequest";

type LoginReturn = {
    response : boolean,
    message?: string
};

type LoginResponseBad = { msg : string };

type LoginResponseOK = {
    usuarioInstancia: {
        nombre: string,
        usuario: string,
        correo: string,
        rol: string,
        estado: string,
        uid: string,
        mongoID: string
    },
    token: string
};

type LoginResponse = LoginResponseOK | LoginResponseBad;

export const login = async ( url : string, usuario : string, pw : string ) : Promise<LoginReturn> => {
    
    try{
        const response = await FetchRequest<LoginResponse>( url, 'POST', { usuario, pw } );
    
        window.localStorage.setItem( 'sesion-jwt', (response.data as LoginResponseOK).token )
        return { response: true, message: 'Logueado correctamente' }
        
    }catch ( error : any ){
        return {response: false, message: error.error }        
    }
    

}