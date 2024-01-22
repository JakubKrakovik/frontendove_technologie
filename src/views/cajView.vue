<template>
  <main>
    <h1 class="nadpis">Ponuka čaju</h1>
    <div class="uvod">
      <div class="karta" v-for="item in produkty.data" :key="item.id">
        <zobrazenie_caju :data="item" />
      </div>
    </div>
  </main>
</template>

<script>
import Zobrazenie_caju from "@/components/zobrazenie_caju.vue";
import { nacitaj_caj } from "@/stores/caj_produkt.js";

export default {
  components: {
    Zobrazenie_caju,
  },
  data() {
    return {
      produkty: nacitaj_caj(),
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
