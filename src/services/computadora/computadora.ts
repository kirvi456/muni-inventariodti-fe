import { Computadora } from "../../models/Computadora";
import { FetchRequest, FetchRequestImg } from "../../utils/MakeRequest";
import { BasicResponse } from "../types";


export const saveComputadora = async (pc : Computadora) : Promise<BasicResponse<Computadora>> => {
    try {
        const compu = await FetchRequest<Computadora>( `${ process.env.REACT_APP_BASE_URL }api/PCS`,'POST', pc );
        
        return { response: true, message: 'Computadora guardada.', payload: compu.data };

    } catch( error : any ){

        return { response: false, message: error.error };

    }

}

export const getQR = async ( id : string ) : Promise<BasicResponse<string>> => {
    try{
        const compu = await FetchRequestImg<string>( `${ process.env.REACT_APP_BASE_URL }api/PCS/codebar/${ id }`,'GET', undefined );
        

        return { response: true, message: 'Computadora guardada.', payload: compu.data };
    } catch (error : any ){
        return { response: false, message: error.error };
    }
}