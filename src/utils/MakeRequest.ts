import { requestOptions } from "../config/request-config"

type RequestResponse<T> = {
    data?: T
    error?: Error
}

export const FetchRequest = <T = unknown> (
    url : string, 
    method : 'GET' | 'POST' | 'PUT' | 'DELETE', 
    body : any
    ) : Promise<RequestResponse<T>> => {
    return new Promise ((resolve, reject) => {
        const headers : HeadersInit = {
            'Content-Type': 'application/json',
            Accept: 'application/json, text/javascript, */*;'
        }

        fetch(
            url, {
            method, 
            headers,           
            body: JSON.stringify(body),
            ...requestOptions 
        })
        .then(async (result) => {
            if(!result.ok){
                console.log(result)
                throw new Error( ( await result.json() ).msg )
            }
            return result.json();
        })
        .then((data) => {
            resolve({data});
        })
        .catch(error => {
            console.log(error);
            error instanceof Error 
            ? reject( error )
            : reject( new Error(`No se pudo ralizar la petición a ${url}`) );
        });
    }) 

    
    
    
}
