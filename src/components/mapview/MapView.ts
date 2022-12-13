import { defineComponent } from "vue";
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: 'MapView',
    setup() {

        const { isLoading, userLocation, isUserlocationReady } =  usePlacesStore()

        return {
            isLoading,
            userLocation,
            isUserlocationReady,
        }
    }
})