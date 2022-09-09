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
	USER_ASSETS_DETAILS: 'user-assets-details',
	USER_SUBSCRIPTIONS_DETAILS: 'user-subscriptions-details',
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
	{
		path: '/main',
		component: () => import('@/views/UserView.vue'),
		children: [
			{
				path: 'dashboard',
				name: ROUTES.USER_DASHBOARD,
				meta: {
					title: 'Dashboard',
				},
				component: () => import('@/views/user/Dashboard.vue'),
			},
			{
				path: 'wallet',
				name: ROUTES.USER_WALLET,
				meta: {
					title: 'Wallet',
				},
				component: () => import('@/views/user/Wallet.vue'),
			},
			{
				path: 'assets',
				name: ROUTES.USER_ASSETS,
				meta: {
					title: 'Assets',
				},
				component: () => import('@/views/user/Assets.vue'),
			},
			{
				path: 'assets/:id',
				name: ROUTES.USER_ASSETS_DETAILS,
				meta: {
					title: 'Assets',
				},
				component: () => import('@/views/user/ViewAsset.vue'),
			},
			{
				path: 'subscriptions/:id',
				name: ROUTES.USER_SUBSCRIPTIONS_DETAILS,
				meta: {
					title: 'Assets',
				},
				component: () => import('@/views/user/ViewSubscription.vue'),
			},
			{
				path: 'asset-market',
				name: ROUTES.USER_ASSET_MARKET,
				meta: {
					title: 'Asset Market',
				},
				component: () => import('@/views/user/AssetMarket.vue'),
			},
			{
				path: 'referrals',
				name: ROUTES.USER_REFERRALS,
				meta: {
					title: 'Referrals',
				},
				component: () => import('@/views/user/Referrals.vue'),
			},
			{
				path: 'profile',
				name: ROUTES.USER_PROFILE,
				meta: {
					title: 'Dashboard',
				},
				component: () => import('@/views/user/Profile.vue'),
			},
		],
	},
] as RouteRecordRaw[];
