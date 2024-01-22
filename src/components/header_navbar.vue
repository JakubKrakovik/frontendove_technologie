<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg bg-dark navbar-light sticky-top p-0">
          <img :src="logo" alt="logo" class="logo">
            <h1 class="m-5 text-white "><i class="Logo-nazov"></i>Kava</h1>
          <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

            <ul class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto p-0 p-lg-0">
                <li v-for="link in links" :key="link.path" class="nav-item nav-link ">
                    <router-link :to="link.path" class="nav-item nav-link text-light">{{ link.name }}</router-link>
                </li>
              </div>
            </ul>

        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Domov', path: '/' },
                { name: 'O nás', path: '/o_nas' },
                { name: 'Káva', path: '/kava' },
                { name: 'Čaj', path: '/caj' },
                { name: 'Kontakt', path: '/kontakt' },
            ],
          logo: 'logo.png',
        };
    },
};
</script>

<style scoped >
.navbar-toggler{
  background-color: darkgray;
}

.navbar-toggler-icon{
  background-color: darkgray ;
}
.logo{
  height: 6rem;
  width: 6rem;
  margin: 1em;
}


</style>




