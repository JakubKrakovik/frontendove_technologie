import { defineStore } from 'pinia';
import data from '../data.json';

export const nacitaj_caj = defineStore('produkty_caj', {
  state: () => ({
    data: data.zoznam_caj_produktov,
  }), 
});
