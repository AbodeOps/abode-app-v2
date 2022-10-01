import { defineStore, acceptHMRUpdate } from 'pinia';
import { AuthService } from '@/services';
import type { User, ActivityLog, Client } from '@/types';

export const useAuthStore = defineStore({
	id: 'auth',
	persist: true,
	state: () => ({
		user: null as User | null,
		token: null as String | null,
		activityLogs: [] as ActivityLog[],
		referrals: [] as Client[],
	}),
	getters: {
		isLoggedIn: (state) => !!state.token,
		currentUser: (state) => {
			return state.user || null;
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
			this.activityLogs = res.data;
			return res;
		},
		async fetchProfile() {
			const res = await AuthService.fetchProfile();
			console.log(res);
			const user = res.data;
			this.user = {
				...user,
				client: {
					...user.client,
					firstName: user.client.first_name,
					lastName: user.client.last_name,
					phoneNumber: user.client.phone_number,
					createdAt: user.client.created_at,
				} as Client,
			} as User;

			return res;
		},
		async editProfile(_, payload) {
			const res = await AuthService.editProfile(payload);

			return res;
		},
		async fetchReferrals() {
			const res = await AuthService.fetchReferrals();

			this.referrals = res.data.map(
				(referral) =>
					({
						firstName: referral.first_name,
						lastName: referral.last_name,
						phoneNumber: referral.phone_number,
						createdAt: referral.created_at,
					} as Client)
			);

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
