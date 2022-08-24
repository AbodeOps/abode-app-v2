import { useAuthStore } from './../stores/auth';
import HomeView from '../views/HomeView.vue';
import { mustBeLoggedIn } from './routeGuards';
import type { RouteLocation, RouteRecordRaw } from 'vue-router';

export const ROUTES = {
	HOME: 'home',
	// Auth
	AUTH_LOGIN: 'auth-login',
	AUTH_USER_REGISTER: 'auth-user-register',
	AUTH_VENDOR_REGISTER: 'auth-vendor-register',
	AUTH_ACTIVATE_EMAIL: 'auth-activate-email',
	// Auth - Password
	AUTH_PASSWORD_FORGOT: 'auth-password-forgot',
	AUTH_PASSWORD_RESET: 'auth-password-reset',
	AUTH_PASSWORD_RESET_DONE: 'auth-password-reset-done',
	// User
	USER_DASHBOARD: 'user-dashboard',
	USER_WALLET: 'user-wallet',
	USER_ASSETS: 'user-assets',
	USER_ASSET_MARKET: 'user-asset-market',
	USER_REFERRALS: 'user-referrals',
	USER_PROFILE: 'user-profile',
};

export default [
	{
		path: '/',
		name: ROUTES.HOME,
		component: HomeView,
		redirect: (to: RouteLocation) => {
			const authStore = useAuthStore();
			// if (authStore.isLoggedIn && authStore.currentUser) {
			// 	if (authStore.currentUser.role == 'user') {
			// 		return { name: ROUTES.USER_HOME };
			// 	}
			// 	if (authStore.currentUser.role == 'vendor') {
			// 		return { name: ROUTES.VENDOR_HOME };
			// 	}
			// }
			return { name: ROUTES.AUTH_LOGIN };
		},
	},
	{
		path: '/auth',
		name: 'auth',
		component: () => import('../views/AuthView.vue'),
		children: [
			{
				path: 'signin',
				name: ROUTES.AUTH_LOGIN,
				component: () => import('../views/auth/LoginView.vue'),
			},
			{
				path: 'user/signup',
				name: ROUTES.AUTH_USER_REGISTER,
				component: () => import('../views/auth/UserRegisterView.vue'),
			},
			{
				path: 'vendor/signup',
				name: ROUTES.AUTH_VENDOR_REGISTER,
				component: () => import('../views/auth/VendorRegisterView.vue'),
			},
			{
				path: 'signup/activate-email',
				name: ROUTES.AUTH_ACTIVATE_EMAIL,
				component: () => import('../views/auth/ActivateEmail.vue'),
			},
			// adding this as a fallback
			{
				path: 'reset-password/:token',
				name: ROUTES.AUTH_PASSWORD_RESET,
				component: () => import('../views/auth/password/ResetPassword.vue'),
			},
			{
				path: 'password',
				children: [
					{
						path: 'forgot',
						name: ROUTES.AUTH_PASSWORD_FORGOT,
						component: () => import('../views/auth/password/ForgotPassword.vue'),
					},
					// {
					// 	path: 'reset/:token',
					// 	name: ROUTES.AUTH_PASSWORD_RESET,
					// 	component: () => import('../views/auth/password/ResetPassword.vue'),
					// },
					{
						path: 'reset/done',
						name: ROUTES.AUTH_PASSWORD_RESET_DONE,
						component: () => import('../views/auth/password/ResetPasswordDone.vue'),
					},
				],
			},
		],
	},
] as RouteRecordRaw[];
