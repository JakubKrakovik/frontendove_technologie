<template>
  <main>
    <h1 class="nadpis">Ponuka kavicky</h1>
    <div class="uvod">
      <div class="karta" v-for="item in produkty.data" :key="item.id">
        <zobrazenie_kavy :data="item" />
      </div>
    </div>
  </main>
</template>

<script>
import Zobrazenie_kavy from '@/components/zobrazenie_kavy.vue';
import { nacitaj_kavu } from "../stores/kava_produkt.js";

export default {
  components: {
    Zobrazenie_kavy,
  },
  data() {
    return {
      produkty: nacitaj_kavu(),
    };
  },
};
</script>

<style scoped>
.uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
}

.nadpis {
  font-weight: bolder;
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}

.karta {
  width: 300px;
  margin: 10px;
}


</style>
