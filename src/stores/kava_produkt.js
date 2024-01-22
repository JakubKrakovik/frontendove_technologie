import { defineStore } from 'pinia';
import data from '../data.json';

export const nacitaj_kavu = defineStore('produkt_kava', {
  state: () => ({
    data: data.zoznam_kava_produktov,
  }), 
});
