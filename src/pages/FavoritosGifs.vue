<template>
  <div class="p-4">
    <q-page padding>
      <div class="text-center">
        <h2 class="text-h5 q-my-md">Seus GIFs favoritos</h2>
        <div class="text-h5 q-my-md justify-center">
          <GifCard v-for="gif in store.favoritos" :key="gif.id" :gif="gif" :favoritado="true"
            @toggleFavorito="store.toggleFavorito" />
        </div>
        <div v-if="store.favoritos.length === 0" class="q-mt-xl text-grey">
          Você ainda não favoritou nenhum GIF
        </div>
      </div>
    </q-page>

  </div>
</template>

<script lang="ts" setup>
import { useGifStore } from 'src/stores/gifStore'
import GifCard from 'src/components/GifCard.vue'

const store = useGifStore()

</script>
