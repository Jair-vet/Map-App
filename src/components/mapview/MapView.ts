import { defineComponent, ref, onMounted, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';;

import { usePlacesStore, useMapStore } from '@/composables';


export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserlocationReady } =  usePlacesStore()
        const { setMap } = useMapStore()

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no existe')
            if ( !userLocation.value ) throw new Error('User Location no Existe')

            await Promise.resolve() // Deliga todos los procesos y despues hace esto

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/dark-v10', // style URL
                center: userLocation.value, 
                zoom: 15, 
            
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Aquí estoy</h4>
                    <p>Actualmente en Jardines de la Paz</p>
                    <p>${ userLocation.value }</p>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map )
            
            // Establecer el mapa en VUEx
            setMap( map )
        
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