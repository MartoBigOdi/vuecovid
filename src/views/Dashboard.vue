<template>
	Dashboard
</template>

<script>
export default {
	name: 'Dashboard',
	components: {},
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
