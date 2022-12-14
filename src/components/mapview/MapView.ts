import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import Mapboxgl from 'mapbox-gl';



export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserlocationReady } =  usePlacesStore()

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no existe')
            if ( !userLocation.value ) throw new Error('User Location no Existe')

            await Promise.resolve() // Deliga todos los procesos y despues hace esto

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, 
                zoom: 15, 
            
            });
        } 
            

        onMounted( () => {
            if( isUserlocationReady.value ) 
                return initMap()
        });

        watch( isUserlocationReady, ( newVal ) => {
            if( isUserlocationReady.value ) initMap()
        })

        return {
            isUserlocationReady,
            mapElement,
        }
    }
})