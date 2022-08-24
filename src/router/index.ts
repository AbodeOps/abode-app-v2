import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
	scrollBehavior (to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
			  resolve({ left: 0, top: 0 })
			}, 500)
		})
	}
});

export default router;
