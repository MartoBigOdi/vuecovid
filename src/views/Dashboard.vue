<template>
	<main v-if="!loading">
		<DataTitle :text="title" :dataDate="dataDate" />

		<DataBoxes :stats="stats" />

		<button
			@Click="refrescarDatos"
			class="bg-green-800 text-white rounded p-3 
          mt-6 mb-4 focus:uotline-none hover:bg-red-900"
		>
			Refrescar Datos
		</button>
	</main>
	<!-- Loading -->
	<main
		class="flex flex-col align-centrer justify-center
             text-center"
		v-else
	>
		<div class="text-gray-500 text-3xl mt-10 mb-6">
			Esperando Datos:
		</div>
		<img :src="loadingImage" class="w-24 m-auto" alt="" />
	</main>
</template>

<script>

import DataTitle from '@/components/DataTitle';
import DataBoxes from '@/components/DataBoxes';


export default {
	name: 'Dashboard',
	components: {
		DataTitle,
		DataBoxes,
		
	},
	data() {
		return {
			loading: true,
			title: 'GLOBAL',
			dataDate: '',
			stats: {},
			countries: [],
			loadingImage: require('../assets/covid.gif'),
		};
	},
	methods: {
		async fetchCovidData() {
			const res = await fetch('https://api.covid19api.com/summary');
			const data = await res.json();
			console.log(data);
			return data;
		},

		getCountrydata(country) {
			this.stats = country;
			this.title = country.Country;
		},

		async refrescarDatos() {
			this.loading = true;
			const data = await this.fetchCovidData();
			this.title = 'GLOBAL';
			this.stats = data.Global;
			this.loading = false;
		},
	},
	async created() {
		const data = await this.fetchCovidData();
		this.dataDate = data.Date;
		this.stats = data.Global;
		this.countries = data.Countries;
		this.loading = false;
	},
};
</script>
