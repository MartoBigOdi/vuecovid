<template>
    <div class="grid md:grid-cols-2 gap-4">
    <!-- Box  -->
    <div class="shadow-md bg-green-100 p-10 text-center rounded">
    <h3 class="text-3xl text-green-900 font-bold mb-4">
    Casos
    </h3>
        <div class="text-2xl mb-4">
            <span class="font-bold"> Nuevos: </span>
            {{ numerosConComa(stats.NewConfirmed) }} 
        </div>
        <div class="text-2xl mb-4">
          <span class="font-bold"> Total: </span>
            {{ numerosConComa(stats.TotalConfirmed) }}
        </div>    
    </div>
    <!-- Fin Box -->

    <!-- Box  -->
    <div class="shadow-md bg-green-100 p-10 text-center rounded">
    <h3 class="text-3xl text-green-900 font-bold mb-4">
    Fallecidos
    </h3>
        <div class="text-2xl mb-4">
            <span class="font-bold"> Hoy: </span>
            {{ numerosConComa(stats.NewDeaths) }} 
        </div>
        <div class="text-2xl mb-4">
          <span class="font-bold"> Total: </span>
            {{ numerosConComa(stats.TotalDeaths) }}
        </div>    
    </div>
    <!-- Fin Box -->

    <!-- Box  -->
    <div class="shadow-md bg-green-100 p-10 text-center rounded mb-4">
    <h3 class="text-3xl text-green-900 font-bold mb-4">
    Recuperados
    </h3>
        <div class="text-2xl mb-4">
            <span class="font-bold"> Hoy: </span>
            {{ numerosConComa(stats.NewRecovered) }} 
        </div>
        <div class="text-2xl mb-4">
          <span class="font-bold"> Total: </span>
            {{ numerosConComa(stats.TotalRecovered) }}
        </div>    
    </div>
    <!-- Fin Box -->

    

    </div>
</template>


<script>
export default {
   name: 'DataBoxes',
   props: ['stats'],
   methods:{
       //Lo usamos para manejar la vista del dato
       numerosConComa(x){
           //Stack Overlow Claro
           return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
       }
   }
}
</script>