<template>
  <main class="main-home">
    <h1>Akčné ponuky!!!</h1>
    <div class="akcna-ponuka">
      <akcia :data="najdiProduktPodlaId(idProduktu)" />
    </div>
  </main>
</template>

<script>
import akcia from '@/components/akcia.vue';
import { nacitaj_kavu } from '../stores/kava_produkt.js';

export default {
  components: {
    akcia,
  },
  data() {
    return {
      produkty: nacitaj_kavu().data,
      idProduktu: '7',
    };
  },
  methods: {
    najdiProduktPodlaId(id) {
      return this.produkty.find(item => item.id === 7);
    },
  },
};
</script>

<style scoped>
.akcna-ponuka {
  width: 30em;
  height: auto;
  background-color: rgba(255, 32, 32, 0.76);
  border-radius: 2em;
}

.main-home {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  background-image: url("super-sale.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;
}
</style>
