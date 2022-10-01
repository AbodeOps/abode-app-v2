import { defineStore, acceptHMRUpdate } from 'pinia';
import { AuthService } from '@/services';
import type { User } from '@/types';

export const useAuthStore = defineStore({
	id: 'auth',
	persist: true,
	state: () => ({
		user: {} as User,
		token: null as String | null,
	}),
	getters: {
		isLoggedIn: (state) => !!state.token,
		currentUser: (state) => {
			return {};
		},
	},
	actions: {
		async signup(_, payload) {
			const res = await AuthService.signup(payload);

			return res;
		},
		async login({ loginId, password }) {
			const res = await AuthService.login({
				loginId,
				password,
			});

			if (res.status) {
				AuthService.authenticateUser(res.data.token);
				this.fetchProfile();
			}

			// commit('openSnackbar', res.message, { root: true });
			return res;
		},
		async checkUsername(_, { username }) {
			const res = await AuthService.checkUsername({
				username,
			});

			return res;
		},
		async resolveReferrer(_, { referrer }) {
			const res = await AuthService.resolveReferrer({
				referrer,
			});

			return res;
		},
		async fetchActivityLogs() {
			const res = await AuthService.fetchActivityLogs();

			return res;
		},
		async fetchProfile() {
			const res = await AuthService.fetchProfile();

			this.user = res.data;
			return res;
		},
		async editProfile(_, payload) {
			const res = await AuthService.editProfile(payload);

			return res;
		},
		async fetchReferrals() {
			const res = await AuthService.fetchReferrals();

			return res;
		},
		async collectInterests(_, payload) {
			const res = await AuthService.collectInterests(payload);

			return res;
		},
		async logout() {
			localStorage.clear();
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
