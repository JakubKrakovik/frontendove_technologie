<template>
  <div>
    <header>
      <header_navbar />
    </header>
    <router-view />
    <footer>
      <footer_spodok />
    </footer>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import footer_spodok from '@/components/footer_spodok.vue';
import header_navbar from "@/components/header_navbar.vue";

export default {
  components: {
    RouterView,
    footer_spodok,
    header_navbar
  }
};
</script>

<style scoped>
</style>
