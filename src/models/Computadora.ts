import { Responsable } from "./Responsable";

export interface Computadora {
    _id : string,
    ID : string,
    imgCodigoBarras: string,
    nombreEquipo: string,
    img: string,
    unidad: string,
    ubicacion: string, //palacio, santa ines, etc
    activo: boolean,
    responsable : Responsable,
    tipo: 'Desktop' | 'Laptop' | 'All In One',
    SO: 'Linux' | 'Windows' | 'Mac',
    SODesc: string,
    SOoriginal: boolean,
    ofimaticaDesc: string,
    ofimaticaOriginal: boolean,
    almacenamiento: string[],
    RAM: string[],
    procesador: string,
    video: string[],
    marcaMonitor: string,
    serieMonitor: string,
    tamMonitor: number,
    teclado: string,
    mouse: string,
    otrosPerifericos: string[],
    ups: boolean,
    upsDesc: string,
    internet: boolean,
    interfazInternet: 'Cable' | 'Wifi',
    ip: string,
    mac: string,
    permisos: string,
    creadoFecha: number,
    usuarioCreo: string,
}


export const emptyComputadora : Computadora = {
    _id : '',
    ID : '',
    imgCodigoBarras: '',
    nombreEquipo: '',
    img: '',
    unidad: '',
    ubicacion: '', //palacio, santa ines, etc
    activo: true,
    responsable : {
        nombre: '',
        puesto: '',
        telefono: ''
    },
    tipo: 'Desktop',
    SO: 'Windows' ,
    SODesc: '',
    SOoriginal: false,
    ofimaticaDesc: '',
    ofimaticaOriginal: false,
    almacenamiento: [],
    RAM: [],
    procesador: '',
    video: [],
    marcaMonitor: '',
    serieMonitor: '',
    tamMonitor: 12,
    teclado: '',
    mouse: '',
    otrosPerifericos: [],
    ups: false,
    upsDesc: '',
    internet: false,
    interfazInternet: 'Cable',
    ip: '192.168.0.',
    mac: '',
    permisos: '',
    creadoFecha: 0,
    usuarioCreo: ''
}

export type ComputadoraExtendida = Omit<Computadora, 'ubicacion' | 'unidad'> 
& {ubicacion : { nombre: string }}
& { unidad : { nombre: string, abreviatura: string }}; 

export const emptyComputadoraExtendida : ComputadoraExtendida = 
{
    _id: 'jfkl4jfdklsaj3jkd',
	ID:"",  
	imgCodigoBarras:"",
	nombreEquipo:"DIRECTORDTI",
	img:"https://www.max.com.gt/media/catalog/product/cache/40cff66e483d5074b1ae49efef994171/h/p/hp24df1501la_3.jpg",
	unidad:{
        nombre: 'Direccion de Tecnologia de la Informacion',
        abreviatura: 'DTI'
    },
    activo: true,
	ubicacion: {
        nombre: 'Palacion Municipal'
    },
	responsable:{
		"nombre":"Bryan Otoniel Ordoñez Morales",
		"puesto":"Director",
		"telefono":"50196697"
	},
	tipo:"Desktop",
	SO:"Windows",
	SODesc:"Windows 10 Professional",
	SOoriginal:false,
	ofimaticaDesc:"Microsoft Office 2019",
	ofimaticaOriginal:true,
	almacenamiento:["HDD 1TB Kingstom"],
	RAM:["2GB DDR3 1666hz","2GB DDR3 1666hz"],
	procesador:"Intel Core i3-5560k",
	video:["Intel Graphics"],
	marcaMonitor:"HP",
	serieMonitor:"S/S",
	tamMonitor:12,
	teclado:"HP negro integrado",
	mouse:"Negro generico",
	otrosPerifericos:[
		"MousePad integrado funcional",
		"Bocinas Brocs"
	],
	ups:true,
	upsDesc:"Ups Brocs 12 va",
	internet:true,
	interfazInternet:"Cable",
	ip:"192.168.0.105",
	mac:"H7:12:JF:45:J5:K7",
	permisos:"Sin bloqueos",
    creadoFecha: 0,
    usuarioCreo: 'fsfds'
};


// {
//     _id : '',
//     ID : '',
//     imgCodigoBarras: '',
//     nombreEquipo: '',
//     img: '',
//     unidad: {
//         nombre: '',
//         abreviatura: ''
//     },
//     ubicacion: {
//         nombre: ''
//     }, //palacio, santa ines, etc
//     activo: true,
//     responsable : {
//         nombre: '',
//         puesto: '',
//         telefono: ''
//     },
//     tipo: 'Desktop',
//     SO: 'Windows' ,
//     SODesc: '',
//     SOoriginal: false,
//     ofimaticaDesc: '',
//     ofimaticaOriginal: false,
//     almacenamiento: [],
//     RAM: [],
//     procesador: '',
//     video: [],
//     marcaMonitor: '',
//     serieMonitor: '',
//     tamMonitor: 12,
//     teclado: '',
//     mouse: '',
//     otrosPerifericos: [],
//     ups: false,
//     upsDesc: '',
//     internet: false,
//     interfazInternet: 'Cable',
//     ip: '192.168.0.',
//     mac: '',
//     permisos: '',
//     creadoFecha: 0,
//     usuarioCreo: ''
// }