export interface Actualizacion {
    nombreComponente : string,
    descAnterior : string,
    descNuevo : string,
    motivo : string,
    equipo : string,
}

export const emptyActualizacion : Actualizacion = {
    nombreComponente: '',
    descAnterior: '',
    descNuevo: '',
    motivo: '',
    equipo: ''
}