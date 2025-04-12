<template>
  <q-page padding>
    <div class="text-center">
      <h2 class="text-h5 q-my-md"> GIFs do momento</h2>
      <q-input outlined v-model="termo" label="Buscar GIFs" debounce="500" @keyup.enter="buscar" class="q-mb-lg" />
      <q-spinner v-if="store.carregando" color="primary" size="2em" />
      <div class="row q-gutter-md justify-center">
        <GifCard v-for="gif in store.gifs" :key="gif.id" :gif="gif" :favoritado="store.Favoritado(gif.id)"
          @toggleFavorito="store.toggleFavorito" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useGifStore } from 'src/stores/gifStore'
import GifCard from 'src/components/GifCard.vue'

const store = useGifStore()
const termo = ref('')

onMounted(async () => {
  await store.carregarTrending()
})

const buscar = async () => {
  if (termo.value.trim()) await store.buscar(termo.value.trim())
}
</script>
