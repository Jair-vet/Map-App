<script lang="ts" src="./MapView.ts"/>

<template>
  <div  
        v-if="!isUserlocationReady" 
        class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
        <h3>Espere por Favor</h3>
        <span>Localizando...</span>
    </div>
  </div>

  <div 
    v-else
    class="map-container"
    ref="mapElement"
  />

</template>


<style scope>
.loading-map{
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
}
.map-container{
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: red;
}
</style>