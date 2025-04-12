<template>
  <q-page padding>
    <div class="q-mx-auto" style="max-width: 1024px">
      <div class="text-left q-mb-lg">

        <h2 class="titulo" style="letter-spacing: 2px;">
          TRENDING GIFs
        </h2>
        <q-separator class="q-my-md" />
        <q-input outlined v-model="termo" label="Encontre aqui seus GIFs favoritos..." debounce="500"
          @keyup.enter="buscar" class="q-mb-lg" />

        <q-spinner v-if="store.carregando" color="primary" size="2em" class="q-my-md" />
        <!-- Mostrar GIFs -->
        <div class="row q-gutter-md justify-center">
          <GifCard v-for="gif in store.gifs" :key="gif.id" :gif="gif" :favoritado="store.Favoritado(gif.id)"
            @toggleFavorito="store.toggleFavorito" class="max-w-xs" />
        </div>

        <!-- Se não retornar GIFs -->
        <div v-if="store.gifs.length === 0" class="q-mt-xl text-grey">
          Nenhum GIF encontrado. Tente buscar por algo diferente!
        </div>
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

<style>
.titulo {
  font-weight: 650;
  letter-spacing: 2px;
  color: var(--q-primary);
  margin-top: 1rem;
  margin-bottom: 0.3rem;
}
</style>
