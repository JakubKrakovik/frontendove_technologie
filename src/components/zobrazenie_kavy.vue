<template> 
    <div class="main-produkt">
      <router-link :to="{ name: 'kava-detail', params: { id: data.id } }" class="link-obrazok"><img :src="data.image" :alt="data.nazov" class="nahlad-image"/> </router-link>
      <h2>{{ data.nazov }}</h2>
  
      <div class="popis-produkt">
        <div> <strong>Hmotnost: </strong>{{ data.hmotnost }}</div>
        <div><strong>Cena: </strong>{{ data.cena }}</div>
      </div>
      <router-link :to="{ name: 'kava-detail', params: { id: data.id } }" class="link-podrobnosti"> Zobraziť podrobnosti...</router-link>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink,
    },
  
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
<style  scoped>
.main-produkt{
  margin: 20px;
  text-align: center;
}

.nahlad-image{
  width: 15rem;
  height: auto;
}
.popis-produkt{
  text-align: center;
}

.link-podrobnosti{
  color: #181818;
  font-style: oblique;
  text-decoration: none;
}

.link-podrobnosti:hover{
  width: 14em;
  height: auto;
  cursor: pointer;
}
.nahlad-image:hover{
  width: 14em;
  height: auto;
  cursor: pointer;
}
</style>
  