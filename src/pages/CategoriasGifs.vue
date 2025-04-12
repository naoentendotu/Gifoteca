<template>
  <q-page padding>
    <div class="text-center">
      <h2 class="text-h5 q-my-md">CATEGORIAS</h2>

      <div class="row justify-left q-pa-md q-gutter-md">
        <q-chip square v-for="categoria in store.categorias" :key="categoria.name" clickable color="primary"
          text-color="white" @click="selecionarCategoria(categoria.name)" size="md">
          {{ categoria.name }}
        </q-chip>
      </div>

      <q-separator class="q-my-md" />

      <q-spinner v-if="store.carregando" color="primary" size="2em" />

      <div class="row q-gutter-md justify-center">
        <GifCard v-for="gif in store.gifs" :key="gif.id" :gif="gif" :favoritado="store.Favoritado(gif.id)"
          @toggleFavorito="store.toggleFavorito" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useGifStore } from 'src/stores/gifStore'
import GifCard from 'src/components/GifCard.vue'

const store = useGifStore()

onMounted(async () => {
  await store.carregarCategorias()
})

const selecionarCategoria = async (nome: string) => {
  await store.carregarPorCategoria(nome)
}
</script>
