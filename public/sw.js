const STATIC_CACHE      = 'static-v2';
const DYNAMIC_CACHE     = 'dynamic-v1';
const INMUTABLE_CACHE   = 'inmutable-v1';

const APP_SHELL = [
    '/',
    'index.html',
    'favicon.ico',
    'logo192.png',
    'logo512.png',
    'robots.txt',

    'static/css/main.e6c13ad2.css',

    'static/js/787.7066aac0.chunk.js',
    'static/js/main.401b3b94.js.map',



    'static/media/empty.3f51ea0687fada5bf8d00f05a82e7a5b.svg',
    'static/media/Logo_Muni.2919aeed081474c3fcac.png',
    'static/media/void.8b5a882a1470b1718eab9d3049112baf.svg',
]

const APP_SHEL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
]

self.addEventListener('install', e => {

    const cacheStatic = caches.open( STATIC_CACHE )
    .then(cache => {
        cache.addAll( APP_SHELL );
    })

    const cacheInmutable = caches.open( INMUTABLE_CACHE )
    .then( cache => {
        cache.addAll( APP_SHEL_INMUTABLE );
    })


    e.waitUntil( Promise.all([cacheStatic, cacheInmutable]) );
});

self.addEventListener('activate', e => {

    const borrado = caches.keys()
    .then(keys => {
        keys.forEach(key => {
            if( key !== STATIC_CACHE && key.includes('static') ){
                caches.delete( key )
            }

            if( key !== DYNAMIC_CACHE && key.includes('dynamic') ){
                caches.delete( key )
            }
        });
    })

    e.waitUntil( borrado );
});

self.addEventListener( 'fetch', e => {
    let respuesta;

    if(e.request.url.includes('chrome-extension')) {
        respuesta = fetch(e.request).then(res => res)
    } else {
        respuesta = caches
            .match( e.request )
            .then( res => {

                if( res ) return res;
                else return fetch( e.request )

            });
    }
    e.respondWith( respuesta );
})