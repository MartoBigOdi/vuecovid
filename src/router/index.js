import { createRouter, createWebHistory } from 'vue-router';
import Explore from '../views/Explore.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/explorar',
		name: 'Explorar',
		component: Explore,
	},
	{
		path: '/mercosur',
		name: 'Mercosur',
		component: Dashboard,
	},
	{
		path: '/seguimiento',
		name: 'Tracking',
		component: Dashboard,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
