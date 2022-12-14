<template>
  <button 
    v-if="isBtnReady"
    @click="onMyLocationClicked"
    class="btn btn-primary">
    Ir a mi Ubicación
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';

export default defineComponent({
    name: 'MyLocationsBtn',
    setup(){

        const { userLocation, isUserlocationReady } = usePlacesStore()
        const { map, isMapReady } = useMapStore()


        return {
            isBtnReady: computed<boolean>( () => isUserlocationReady.value && isMapReady.value ),

            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 15
                })
            }
        }
    }
})
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}

</style>
