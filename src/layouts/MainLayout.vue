<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Nav Bar -->
    <q-drawer v-model="leftDrawerOpen" :mini="miniState" show-if-above bordered behavior="desktop" :width="200"
      :mini-width="70" @mouseover="miniState = false" @mouseleave="miniState = true" class="bg-white">
      <q-list class="q-pt-md">
        <div class="flex flex-center q-pb-md">
          <q-img src="src/assets/logoGifoteca.png" width="60px" height="60px" contain />
        </div>

        <!-- Menu -->
        <q-item to="/" exact active-class="text-primary" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" :color="$route.path === '/' ? 'primary' : 'black'" />
          </q-item-section>
          <q-item-section v-if="!miniState">Home</q-item-section>
        </q-item>

        <q-item to="/favoritos" active-class="text-primary" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="favorite_border" :color="$route.path === '/favoritos' ? 'primary' : 'black'" />
          </q-item-section>
          <q-item-section v-if="!miniState">Favoritos</q-item-section>
        </q-item>

        <q-item to="/categorias" active-class="text-primary" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="grid_view" :color="$route.path === '/categorias' ? 'primary' : 'black'" />
          </q-item-section>
          <q-item-section v-if="!miniState">Categorias</q-item-section>
        </q-item>

        <q-item to="/sobre" active-class="text-primary" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info" :color="$route.path === '/sobre' ? 'primary' : 'black'" />
          </q-item-section>
          <q-item-section v-if="!miniState">Sobre</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Header -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="justify-between">
        <div></div>
        <div class="q-mr-md text-subtitle2">
          Desenvolvido por Tuliana Andrade
        </div>
      </q-toolbar>
    </q-header>

    <!-- Conteúdo -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
const miniState = ref(true)
</script>
