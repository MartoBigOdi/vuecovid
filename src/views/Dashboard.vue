<template>
	<ul>
		<li v-for="followedCountry in this.$store.state.followedCountries">
			{{ followedCountry.Country }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'Dashboard',
	data() {
		return {
			loading: true,
			title: 'GLOBAL',
			dataDate: '',
			stats: {},
			countries: [],
			loadingImage: require('../assets/covid.gif'),
			followedCountries: [],
		};
	},
	async created() {},
};
</script>
