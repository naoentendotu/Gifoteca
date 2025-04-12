<template>
  <q-card class="gif-card">
    <q-img :src="gif.images.fixed_height.url" :alt="gif.title" height="200px" class="rounded-t" />

    <q-card-section class="text-subtitle2 ellipsis text-center q-py-xs">
      {{ gif.title || 'Sem título' }}
    </q-card-section>

    <q-btn flat round icon="favorite" :color="favoritado ? 'red' : 'grey-5'" class="absolute-top-right q-ma-sm"
      @click="emit('toggleFavorito', gif)" />
  </q-card>
</template>

<script lang="ts" setup>
import type { Gif } from 'src/tipos/Gif'

defineProps<{
  gif: Gif
  favoritado: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleFavorito', gif: Gif): void
}>()
</script>

<style scoped>
.gif-card {
  width: 200px;
  position: relative;
  transition: transform 0.2s ease;
}

.gif-card:hover {
  transform: scale(1.03);
  cursor: pointer;
}
</style>
