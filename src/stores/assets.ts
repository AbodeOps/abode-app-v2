import { defineStore, acceptHMRUpdate } from 'pinia';
import { ProjectService, TransactionService } from '@/services';
import { formatMoney } from '@/utils/helpers';
import type { Asset, Subscription } from '@/types';

export const useAssetStore = defineStore({
	id: 'assets',
	persist: true,
	state: () => ({
		assets: [] as Asset[],
		subscriptions: [] as Subscription[],
	}),
	getters: {},
	actions: {
		async fetchAssets() {
			const res = await ProjectService.fetchProjects();

			this.assets = res.data;

			return res;
		},

		async fetchAllOffers() {
			const res = await ProjectService.fetchAllOffers();

			return res;
		},

		async fetchSubscriptions() {
			const res = await ProjectService.fetchFundedProjects();

			return res;
		},

		async fetchProjectById(_, id) {
			const res = await ProjectService.fetchProjectById(id);

			return res;
		},

		async fetchSubscriptionById(_, id) {
			const res = await ProjectService.fetchSubscriptionById(id);

			return res;
		},

		async fetchOfferById(_, id) {
			const res = await ProjectService.fetchOfferById(id);

			return res;
		},

		async fundProject(_, payload) {
			const res = await ProjectService.fundProject(payload);

			return res;
		},

		async createOffer(_, payload) {
			const res = await ProjectService.createOffer(payload);

			return res;
		},

		async createBid(_, payload) {
			const res = await ProjectService.createBid(payload);

			return res;
		},

		async fetchBids(_, { offerId }) {
			const res = await ProjectService.fetchBids(offerId);

			return res;
		},

		async fetchMyBids() {
			const res = await ProjectService.fetchUserBids();

			return res;
		},

		async sellAsGroup(_, { fundId, action }) {
			const res = await ProjectService.sellAsGroup({
				id: fundId,
				action,
			});

			return res;
		},

		async acceptBid(_, { bidId }) {
			const res = await ProjectService.acceptBid({
				id: bidId,
			});

			return res;
		},

		async rejectBid(_, { bidId }) {
			const res = await ProjectService.rejectBid({
				id: bidId,
			});

			return res;
		},

		async payBid(_, payload) {
			const res = await ProjectService.payBid(payload);

			return res;
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAssetStore, import.meta.hot));
}
