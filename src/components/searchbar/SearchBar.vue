<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input 
        class="form-control"
        type="text"
        placeholder="Buscar Lugares..."
        v-model="searchTerm"
    >

    <SearchResults />

  </div>
</template>


<style scoped>
.searchbar-container{
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: rgba(0, 0, 0, 0);
    z-index: 999;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px !important;
    width: 250px;
    overflow: hidden;
    border: none;
    padding: 10px;
}

</style>