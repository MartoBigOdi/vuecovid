<template>
	<table class="bg-green-500 shadow-xl">
		<thead>
			<tr>
				<th>Pais</th>
				<th>Total confirmados</th>
				<th>Total de muertes</th>
				<th>Total recuperados</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{{ countryData.Country }}</td>
				<td>{{ countryData.TotalConfirmed }}</td>
				<td>{{ countryData.TotalDeaths }}</td>
				<td>{{ countryData.TotalRecovered }}</td>
				<td>
					<button class="bg-blue-500">Ver gráfica</button>
					<button @click="stopFollowing" class="bg-red-500">
						Dejar de seguir
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import moment from 'moment';
import store from '../store';

export default {
	name: 'FollowedCountry',
	props: ['countryData'],
	data() {
		return {
			country: {},
		};
	},
	methods: {
		stopFollowing() {
			store.commit('removeCountry', this.country.ID);
		},
	},
	async created() {
		this.country = this.countryData;
	},
};
</script>

<style scoped>
table {
	width: 100%;
	border-radius: 30px;
	text-align: center;
	padding: 20px 0;
	margin: 20px 0;
}
table th {
	padding: 5px 0;
	width: 20%;
}
table td {
	padding-bottom: 15px;
	width: 20%;
}
table td button {
	margin: 0 5px;
	padding: 5px 10px;
	border-radius: 30px;
	font-size: 12px;
	outline: none;
}
</style>
