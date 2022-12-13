import { defineComponent, ref } from "vue";
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserlocationReady } =  usePlacesStore()

        return {
            isUserlocationReady,
            mapElement,
        }
    }
})