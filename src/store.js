import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
	state: {
		followedCountries: [],
	},
	mutations: {
		async addCountry(state, country) {
			// Chequear que el item no exista. Si existe no lo agrega
			const tmpFollowedCountrires = state.followedCountries.filter(
				(item) => item.ID === country.ID
			);

			if (tmpFollowedCountrires.length === 0) {
				const { data } = await axios.post(
					'http://localhost:3000/followedCountries',
					{
						country,
					}
				);
				state.followedCountries = [...state.followedCountries, data];
			}
		},
		async removeCountry(state, countryJsonID) {
			await axios.delete(
				`http://localhost:3000/followedCountries/${countryJsonID}`
			);

			const { data } = await axios.get(
				'http://localhost:3000/followedCountries'
			);

			state.followedCountries = [...data];
		},
	},
	getters: {
		getCountries: async () => {
			const { data } = await axios.get(
				'http://localhost:3000/followedCountries'
			);

			return data;
		},
	},
});

export default store;
