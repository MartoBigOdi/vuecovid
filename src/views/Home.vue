<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" /> 
  </main>

  <main class="flex flex-col align-centrer justify-center
             text-center" v-else>
      <div class="text-gray-500 text-3xl mt-10 mb-6">
      Datos en vivo:
      </div>
      <img :src="loadingImage" class="w-24 m-auto" alt="" />
  </main>

</template>

<script>

import DataTitle from '@/components/DataTitle'


export default {
  name: 'Home',
  components: {
    DataTitle,
  },
  data(){
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/covid.gif')

    }
  },
  methods:{
    
   async fetchCovidData() {
     const res = await fetch('https://api.covid19api.com/summary');
     const data = res.json();
     return data;
     }
   },

  async created(){
    const data = await this.fetchCovidData();

    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
    
  },

}
</script>
