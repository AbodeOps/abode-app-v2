import { setupIntercom } from '@/helpers/functions';
import toast from '@/helpers/toast';
import { useAuthStore } from '@/stores/auth';
import type { RouteLocation } from 'vue-router';
import { ROUTES } from './routes';

export const mustBeLoggedIn = (_: RouteLocation, __: RouteLocation, next: Function) => {
	const authStore = useAuthStore();
	if (authStore.isLoggedIn) {
		const user = authStore.currentUser;
		if (user) setupIntercom(user);

		return next();
	}

	toast.info('You must be logged in to access this page');

	return next({ name: ROUTES.AUTH_LOGIN });
};
