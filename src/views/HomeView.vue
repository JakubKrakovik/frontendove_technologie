<template>
  <div class="main-home">
    <h1 class="main-heading">Najlepšia káva a stránka na svete</h1>

    <div class="main-container">
      <article class="main-article">
        Naša misia je jednoduchá - prinášať vám kvalitnú kávu, ktorá prebúdza vaše zmysly a poteší váš každodenný rituál. V srdci našej pražiarne tkvie láska k detailom a oddanosť ku kvalite. Neustále sledujeme najnovšie trendy, no zároveň si zachovávame tradičné postupy, aby sme vytvárali kávu, ktorá oslovuje každého kávičkára.
      </article>
      <router-link :to="links.path"><img :src="uvod" alt="uvod" class="main-img"></router-link>
    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      links: { name: 'Domov', path: '/akcia' },
      uvod: 'balik_akcia.jpg'
    }
  }
}
</script>
<style scoped>
.main-home {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em;
  flex-direction: column;
  background-image: url("pozadie.jpg");
  background-repeat: no-repeat;
  background-size: cover;

}

.main-heading {
  font-weight: bolder;
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 3rem;
  background-color: rgba(255, 255, 255, 0.32);
  border-radius: 1rem;
}

.main-container{
  display: flex;
  flex-direction: row;
}
@media (max-width: 800px){
  .main-container{
    flex-direction: column;}
  .main-article{
    width: 100%;
  }
}

.main-article{
  padding: 20px;
  margin: 10px;
  font-size: 2em;
  background-color: rgba(255, 255, 255, 0.32);
  border-radius: 1rem;
}

.main-img {
  border-radius: 1rem;
  width: 40rem;
}
.main-img:hover{
  width: 39rem;
}



</style>
