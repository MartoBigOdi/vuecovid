<template>
	<!-- Para continuar 
	<div class="charts-container">
		<h2>Dashboard</h2>
		<p>Aqui iran charts para mostrar data graficamente</p>
	</div>
	-->
	<div class="followed-container">
		<h2 class="text-3xl font-bold mt-10">Paises en seguimiento</h2>
		<div v-if="followedCountries.length > 0">
			<ul>
				<li v-for="followedCountry in followedCountries">
					<FollowedCountry :countryData="followedCountry" />
				</li>
			</ul>
		</div>
		<div v-else>
			<p>
				Aun no se encuentra siguiendo paises. Puede buscar en "Explorar"
			</p>
		</div>
	</div>
</template>

<script>
import FollowedCountry from '@/components/FollowedCountry';

export default {
	name: 'Dashboard',
	components: {
		FollowedCountry,
	},
	computed: {
		followedCountries() {
			return this.$store.getters.getCountries;
		},
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
};
</script>

<style scoped>
.charts-container {
	border: 1px solid red;
	height: 300px;
}
</style>
