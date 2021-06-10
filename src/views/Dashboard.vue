<template>
	<div class="followed-container">
		<h2 class="text-3xl font-bold mt-10">Paises en seguimiento</h2>
		<div v-if="followedCountriesData.length > 0">
			<ul>
				<li
					v-for="(followedCountry, index) in followedCountriesData"
					:key="followedCountry.ID"
				>
					<FollowedCountry
						:countryJsonID="followedCountry.id"
						:countryData="followedCountry.country"
					/>
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
	data() {
		return {
			followedCountriesData: [],
		};
	},
	async created() {
		const data = await this.$store.getters.getCountries;
		this.followedCountriesData = data;
	},
};
</script>

<style scoped>
.charts-container {
	border: 1px solid red;
	height: 300px;
}
</style>
