<template>
	<header class="text-center bg-green-700 text-white mb-10">
		<div class="heading p-8">
			<div class="text-3xl md:text-5xl font-bold mb-3">
				<i class="fa fa-viruses"></i> COVID-19 Seguimiento
			</div>
			<p>
				API by
				<a
					class="text-blue-300"
					href="http://covid19api.com"
					target="_blank"
					>covid19api.com</a
				>
			</p>
		</div>
		<nav class="space-x-4 bg-green-900 p-1">
			<ul class="flex justify-end">
				<li class="px-4">
					<router-link
						to="/"
						class="inline-block cursor-pointer transition duration-700 ease-in-out hover:text-gray-400 font-bold p-3"
					>
						Dashboard
					</router-link>
				</li>
				<li class="px-4">
					<router-link
						to="/explorar"
						class="inline-block cursor-pointer transition duration-700 ease-in-out hover:text-gray-400 font-bold p-3"
					>
						Explorar
					</router-link>
				</li>
				<li class="px-4">
					<router-link
						to="/mercosur"
						class="inline-block cursor-pointer transition duration-700 ease-in-out hover:text-gray-400 font-bold p-3"
					>
						Mercosur
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style scoped>
.router-link-active {
	text-decoration: underline;
	color: #b3b3b3;
}
</style>
