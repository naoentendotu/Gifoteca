<template>
  <q-page padding>
    <div class="q-mx-auto" style="max-width: 1024px">
      <div class="q-mx-auto text-left">
        <h2 class="titulo" style="letter-spacing: 2px;">CATEGORIAS</h2>
        <q-separator class="q-my-md" />
        <!-- OPÇÕES DE CATEGORIAS -->
        <div class="flex flex-wrap justify-start q-pa-md q-gutter-sm">
          <q-btn v-for="categoria in store.categorias" :key="categoria.name" clickable color="primary"
            text-color="white" @click="selecionarCategoria(categoria.name)" size="md"
            class="m-2 shadow-md hover:shadow-lg transition-shadow duration-300 ">
            {{ categoria.name }}
          </q-btn>
        </div>

        <q-separator class="q-my-md" />

        <q-spinner v-if="store.carregando" color="primary" size="2em" class="my-4" />

        <!-- CARDS DOS GIFS-->
        <div class="flex flex-wrap justify-center q-gutter-md">
          <GifCard v-for="gif in store.gifs" :key="gif.id" :gif="gif" :favoritado="store.Favoritado(gif.id)"
            @toggleFavorito="store.toggleFavorito" class="w-60 md:w-72" />
        </div>
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

<style>
.titulo {
  font-weight: 650;
  letter-spacing: 2px;
  color: var(--q-primary);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
