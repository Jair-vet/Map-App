import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoidmV0ZXJhbm8yMjIiLCJhIjoiY2t0ZHJ0cjluMmloNDJwcjVpeHdlbG9vOCJ9.TzJJTJHUZ8mqHRD3sLYRaA'
    }
});


export default searchApi;
