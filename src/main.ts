import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoidmV0ZXJhbm8yMjIiLCJhIjoiY2t0ZHJ0cjluMmloNDJwcjVpeHdlbG9vOCJ9.TzJJTJHUZ8mqHRD3sLYRaA';

if ( !navigator.geolocation ){
    alert('Tu navegador no soporta Geolocation')
    throw new Error('Tu navegador no soporta Geolocation')
}


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
