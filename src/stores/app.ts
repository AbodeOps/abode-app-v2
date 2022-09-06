import { defineStore, acceptHMRUpdate } from 'pinia';
import { AssetsIcon, AssetMarketIcon, DashboardIcon, ProfileIcon, ReferralsIcon, WalletIcon } from '@/components/icons/AllIcons';
import { ROUTES } from '@/router/routes';
import { shallowRef } from 'vue';

export const useAppStore = defineStore({
	id: 'app',
	persist: true,
	state: () => ({
		navigation: [
			{ name: 'Dashboard', routeName: ROUTES.USER_DASHBOARD, icon: shallowRef(DashboardIcon) },
			{ name: 'Wallet', routeName: ROUTES.USER_WALLET, icon: shallowRef(WalletIcon) },
			{ name: 'Assets', routeName: ROUTES.USER_ASSETS, icon: shallowRef(AssetsIcon) },
			{ name: 'Asset Market', routeName: ROUTES.USER_ASSET_MARKET, icon: shallowRef(AssetMarketIcon) },
			{ name: 'Referrals', routeName: ROUTES.USER_REFERRALS, icon: shallowRef(ReferralsIcon) },
			{ name: 'Profile', routeName: ROUTES.USER_PROFILE, icon: shallowRef(ProfileIcon) },
		],
	}),
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
