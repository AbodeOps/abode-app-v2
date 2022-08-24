import { defineStore, acceptHMRUpdate } from 'pinia';
import { HomeIcon, JobsIcon, ProfileIcon, HelpIcon } from '@/components/icons/AllIcons';

export const useAppStore = defineStore({
	id: 'auth',
	persist: true,
	state: () => ({
		navigation: [
			{ name: 'Dashboard', routeName: ROUTES.USER_DASHBOARD, icon: JobsIcon },
			{ name: 'Wallet', routeName: ROUTES.USER_WALLET, icon: ProfileIcon },
			{ name: 'Assets', routeName: ROUTES.USER_ASSETS, icon: ProfileIcon },
			{ name: 'Asset Market', routeName: ROUTES.USER_ASSET_MARKET, icon: ProfileIcon },
			{ name: 'Referrals', routeName: ROUTES.USER_REFERRALS, icon: ProfileIcon },
			{ name: 'Profile', routeName: ROUTES.USER_PROFILE, icon: ProfileIcon },
		],
	}),
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
