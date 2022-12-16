import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoidmV0ZXJhbm8yMjIiLCJhIjoiY2t0ZHJ0cjluMmloNDJwcjVpeHdlbG9vOCJ9.TzJJTJHUZ8mqHRD3sLYRaA'
    }
});


export default directionsApi;