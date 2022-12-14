import { Actualizacion } from "../../models/Actualizacion";
import { Computadora } from "../../models/Computadora";
import { FetchRequest, FetchRequestImg } from "../../utils/MakeRequest";
import { BasicResponse } from "../types";


export const saveComputadora = async (pc : Computadora) : Promise<BasicResponse<Computadora>> => {
    try {

        const equipo = { 
            ...pc,
            ubicacion: pc.ubicacion?._id ? pc.ubicacion?._id : pc.ubicacion, 
            unidad: pc.unidad?._id ? pc.unidad?._id : pc.unidad 
        }

        const compu = await FetchRequest<Computadora>( `${ process.env.REACT_APP_BASE_URL }api/PCS`,'POST', equipo );
        
        return { response: true, message: 'Computadora guardada.', payload: compu.data };

    } catch( error : any ){

        return { response: false, message: error.error };

    }

}

export const updateComputadora = async (pc : Computadora, actualizacion: Actualizacion) : Promise<BasicResponse<Computadora>> => {
    try {

        const equipo = { 
            ...pc,
            ubicacion: pc.ubicacion?._id ? pc.ubicacion?._id : pc.ubicacion, 
            unidad: pc.unidad?._id ? pc.unidad?._id : pc.unidad 
        }

        const compu = await FetchRequest<Computadora>( `${ process.env.REACT_APP_BASE_URL }api/PCS`,'PUT', equipo );
        await FetchRequest<Actualizacion>( `${ process.env.REACT_APP_BASE_URL }api/actualizaciones`,'POST', { ...actualizacion, equipo: pc._id } );
        
        return { response: true, message: 'Computadora actualizada.', payload: compu.data };

    } catch( error : any ){

        return { response: false, message: error.error };

    }

}

export const getQR = async ( id : string ) : Promise<BasicResponse<string>> => {
    try{

        const compu = await FetchRequestImg( `${ process.env.REACT_APP_BASE_URL }api/PCS/codebar/${ id }`,'GET', undefined );        

        return { response: true, message: 'Computadora guardada.', payload: compu.data };

    } catch (error : any ){
        return { response: false, message: error.error };
    }
}