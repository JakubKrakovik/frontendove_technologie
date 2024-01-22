<template>
  <button @click="$router.push({ name: 'Kava' })" class="tlacitlo btn btn-primary"><<< Späť na ponuku kávy</button>
  <div class="uvod" v-if="produkt">
    <h1 class="nadpis">{{ produkt.nazov }}</h1>

    <img :src="produkt.image" :alt="produkt.nazov" class="podrobnosti-image"/>
    <div class="main-container">
    <article class="popisky">
      <p><strong>Chuťový profil:</strong> {{ produkt.profil }}</p>
      <p><strong>Popis:</strong> {{ produkt.popis }}</p>
      <p><strong>Krajina pôvodu:</strong> {{ produkt.krajina }}</p>
      <p><strong>Popis:</strong> {{ produkt.popis }} </p>
    </article>
    <span class="objednavka-popis">
      <p class="velky-popis" ><strong>Hmotnosť balíčka:</strong> {{ produkt.hmotnost }} </p>
      <p class="velky-popis"><strong>Cena:</strong> {{produkt.cena}}</p>
      <button @click="" class="btn btn-success">Vlož do košíka</button>
    </span>
  </div>
  </div>
  <div v-else>
    <p>Produkt nebol nájdený.</p>
  </div>
</template>

<script>
import { nacitaj_kavu } from '../stores/kava_produkt.js';

export default {
  data() {
    return {
      produkt: null,

    };
  },
  mounted() {
    const store = nacitaj_kavu();
    const id = parseInt(this.$route.params.id, 10);
    this.produkt = store.data.find(p => p.id === id);
  }
};
</script>

<style scoped>
.uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;

}

.popisky {
  border: 2px solid #584B53;
  width: 50%;
  margin: 1em;
  padding: 2em;
  border-radius: 1rem;
  text-align: left;

}
.objednavka-popis{

  width: 50%;
  margin: 1em;
  padding: 2em;
  text-align: left;
}

.velky-popis{
  font-size: 1.5rem;
}

.main-container{
  display: flex;
  flex-direction: row;
}

.podrobnosti-image{
  width: 50em;
  margin: 1rem;
}
a {
  color: #584B53;
}

button {
 margin: 0.5rem;
padding: 1em;

}
button:hover {
  font-size: 15px;
}
.nadpis {
  font-weight: bolder;

  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}

@media (max-width: 800px) {
  .main-container {
    flex-direction: column;
  }
  .popisky {
    width: 100%;
  }
  .objednavka-popis{

    width: 100%;
    text-align: center;
  }

  .podrobnosti-image{
    width: 25em;
  }

}

.tlacitlo{
  margin-left: 1rem;
}


</style>

