<template>
  <div class="p-4">
    <q-page padding>
      <div class="q-mx-auto" style="max-width: 1024px">

        <div class="text-left">

          <h2 class="titulo" style="letter-spacing: 2px;">GIFs FAVORITOS</h2>
          <q-separator class="q-my-md" />
          <div class="row q-gutter-md justify-center q-pa-md">
            <GifCard v-for="gif in store.favoritos" :key="gif.id" :gif="gif" :favoritado="true"
              @toggleFavorito="store.toggleFavorito" />
          </div>

          <div v-if="store.favoritos.length === 0" class="text-grey">
            Você ainda não favoritou nenhum GIF
          </div>
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

<style>
.titulo {
  font-weight: 650;
  letter-spacing: 2px;
  color: var(--q-primary);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
