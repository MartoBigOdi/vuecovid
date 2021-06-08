<template>
   <select @change="onChange()"
        v-model="selected" 
        class="form-select block mb-4
                w-full border p-3 rounded bg-green-100"> 

   <option value="0"> Seleccionar Pais </option>
   <option v-for="country in countries" :value="country.ID">
   {{country.Country}}
   </option>
   </select>
</template>

<script>
export default {
    name: 'DataPais',
    props: ['countries'],
    data(){
        return {
            selected: 0
        }
    },
    methods:{
        onChange(){
            const country = this.countries
                            .find((item) => item.ID === this.selected)
            //console.log(country)
            this.$emit('get-country', country)
        }
    }
}
</script>