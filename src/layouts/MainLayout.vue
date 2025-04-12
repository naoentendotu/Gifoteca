<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen" :mini="miniState" show-if-above bordered behavior="desktop" :width="250"
      :mini-width="100" @mouseover="miniState = false" @mouseleave="miniState = true" class="bg-white shadow-md">
      <q-list class="q-pt-md">
        <div class="flex flex-center q-pb-md">
          <q-img src="/icons/logoGifoteca.png" width="70px" height="70px" contain />
        </div>

        <q-item to="/" exact active-class="text-primary" clickable v-ripple>
          <q-item-section avatar class="items-center">
            <div :class="iconClasses('/').circleClass">
              <q-icon name="home" :color="iconClasses('/').color" :class="iconClasses('/').text" size="26px" />
            </div>
          </q-item-section>
          <q-item-section v-if="!miniState" class="font-semibold">Home</q-item-section>
        </q-item>

        <q-item to="/favoritos" active-class="text-primary" clickable v-ripple>
          <q-item-section avatar class="items-center">
            <div :class="iconClasses('/favoritos').circleClass">
              <q-icon name="favorite_border" :color="iconClasses('/favoritos').color"
                :class="iconClasses('/favoritos').text" size="26px" />
            </div>
          </q-item-section>
          <q-item-section v-if="!miniState" class="font-semibold">Favoritos</q-item-section>
        </q-item>

        <q-item to="/categorias" active-class="text-primary" clickable v-ripple>
          <q-item-section avatar class="items-center">
            <div :class="iconClasses('/categorias').circleClass">
              <q-icon name="grid_view" :color="iconClasses('/categorias').color"
                :class="iconClasses('/categorias').text" size="26px" />
            </div>
          </q-item-section>
          <q-item-section v-if="!miniState" class="font-semibold">Categorias</q-item-section>
        </q-item>

        <q-item to="/sobre" active-class="text-primary" clickable v-ripple>
          <q-item-section avatar class="items-center">
            <div :class="iconClasses('/sobre').circleClass">
              <q-icon name="info" :color="iconClasses('/sobre').color" :class="iconClasses('/sobre').text"
                size="26px" />
            </div>
          </q-item-section>
          <q-item-section v-if="!miniState" class="font-semibold">Sobre</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-header elevated class="bg-blue-800 text-white shadow-lg header-custom-height">
      <q-toolbar class="px-20 flex items-center justify-end h-full">
        <div class="flex items-center gap-3">
          <div class="q-mr-md text-subtitle1 leading-none">
            Tuliana Andrade
          </div>
          <q-avatar size="50px">
            <img src="icons/tulianaFoto.jpeg">
          </q-avatar>
        </div>
      </q-toolbar>

    </q-header>


    <q-page-container class="bg-gray-50">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const leftDrawerOpen = ref(true)
const miniState = ref(true)
const $route = useRoute()

const iconClasses = (path: string) => {
  if ($route.path === path) {
    return { color: 'white', text: '', circleClass: 'bg-primary rounded-full flex items-center justify-center w-12 h-12' };
  } else {
    return { color: 'primary', text: '', circleClass: '' };
  }
}
</script>

<style scoped>
.q-drawer {
  transition: width 0.3s ease;
}

.header-custom-height {
  height: 80px;
}
</style>
