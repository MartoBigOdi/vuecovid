import { createStore } from 'vuex';

const store = createStore({
    state: {
        followedCountries: [],
    },
    mutations: {
        addCountry(state, country) {
            // Chequear que el item no exista. Si existe no lo agrega
            const tmpFollowedCountrires = state.followedCountries.filter(
                (item) => item.ID === country.ID
            );

            if (tmpFollowedCountrires.length === 0) {
                state.followedCountries.push(country);
            }
        },
        async removeCountry(state, countryID) {
            //console.log('on erasing...');
            //console.log(state.followedCountries);
            //const tmpFollowedCountrires =
            const tmpFollowedCountrires = state.followedCountries.filter(
                (item) => item.ID !== countryID
            );
            //console.log(tmpFollowedCountrires);

            state.followedCountries = tmpFollowedCountrires;
        },
    },
    getters: {
        getCountries: (state) => state.followedCountries,
    },
});

export default store;