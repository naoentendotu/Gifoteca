import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { getTrendingGifs, searchGifs, getCategories, getByCategory } from 'src/api/giphy';

interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

interface Categoria {
  name: string;
}

export const useGifStore = defineStore('gifStore', {
  state: () => ({
    gifs: [] as Gif[],
    favoritos: (LocalStorage.getItem('favoritos') as Gif[]) || [],
    categorias: [] as Categoria[],
    carregando: false,
  }),
  getters: {
    Favoritado: (state) => (gifId: string) => {
      return state.favoritos.some((g) => g.id === gifId);
    },
  },
  actions: {
    async carregarTrending() {
      this.carregando = true;
      try {
        const res = await getTrendingGifs();
        this.gifs = res.data.data;
      } catch (error) {
        console.error('Erro ao carregar trending:', error);
      } finally {
        this.carregando = false;
      }
    },
    async buscar(term: string) {
      this.carregando = true;
      try {
        const res = await searchGifs(term);
        this.gifs = res.data.data;
      } finally {
        this.carregando = false;
      }
    },
    async carregarCategorias() {
      try {
        const res = await getCategories();
        this.categorias = res.data.data;
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    },
    async carregarPorCategoria(term: string) {
      this.carregando = true;
      try {
        const res = await getByCategory(term);
        this.gifs = res.data.data;
      } catch (error) {
        console.error('Erro ao carregar gifs por categoria:', error);
      } finally {
        this.carregando = false;
      }
    },
    toggleFavorito(gif: Gif) {
      const existe = this.favoritos.find((g) => g.id === gif.id);
      if (existe) {
        this.favoritos = this.favoritos.filter((g) => g.id !== gif.id);
      } else {
        this.favoritos.push(gif);
      }
      LocalStorage.set('favoritos', this.favoritos);
    },
  },
});
