import { defineStore, acceptHMRUpdate } from 'pinia';
import axios, { AxiosError } from 'axios';

export const useAuthStore = defineStore({
	id: 'auth',
	persist: true,
	state: () => ({
		user: null as UserModel | null,
		token: null as String | null,
	}),
	getters: {
		isLoggedIn: (state) => !!state.token,
		currentUser: (state) => {
			return {};
		},
	},
	actions: {},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
