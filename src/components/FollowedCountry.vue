<template>
	<table class="bg-green-100 shadow-xl">
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
			<tr class="font-bold">
				<td>{{ countryData.Country }}</td>
				<td>{{ countryData.TotalConfirmed }}</td>
				<td>{{ countryData.TotalDeaths }}</td>
				<td>{{ countryData.TotalRecovered }}</td>
				<td>
					<button class="bg-blue-500 font-bold p-4 mb-4">📈</button>
					<button
						@click="stopFollowing(countryData.ID)"
						class="bg-red-500 font-bold p-4 mb-4"
					>
						❌
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: 'FollowedCountry',
	props: ['countryData'],
	//Removemos el objeto del array
	methods: {
		stopFollowing(countryDataID) {
			this.$store.commit('removeCountry', countryDataID);
		},
	},
};
</script>

<style scoped>
table {
	width: 100%;
	border-radius: 30px;
	text-align: center;
	padding: 20px 0;
	margin: 30px 0;
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
	border-radius: 30px;
	font-size: 12px;
	outline: none;
}
</style>
