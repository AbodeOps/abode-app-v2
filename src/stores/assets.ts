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

			this.assets = res.data.map((asset: any) => ({
				...asset,
				totalUnits: asset.expected_slots,
				percentFunded: Number(asset.percent_funded),
				potentialGrowth: asset.potential_growth,
			})
			);

			return res;
		},

		async fetchAllOffers() {
			const res = await ProjectService.fetchAllOffers();

			return res;
		},

		async fetchSubscriptions() {
			const res = await ProjectService.fetchFundedProjects();

			this.subscriptions = res.data.map((subscription: any) => ({
				...subscription,
				userId: subscription.user_id,
				project: {
					...subscription.project,
					totalUnits: subscription.project.expected_slots,
					potentialGrowth: subscription.project.potential_growth,
					percentFunded: Number(subscription.project.percent_funded),
				}
			})
			);;

			return res;
		},

		async fetchAssetById(id: number) {
			const res = await ProjectService.fetchProjectById(id);

			return res;
		},

		async fetchSubscriptionById(id: number) {
			const res = await ProjectService.fetchSubscriptionById(id);

			return res;
		},

		async fetchOfferById(id: number) {
			const res = await ProjectService.fetchOfferById(id);

			return res;
		},

		async buyAsset(payload: any) {
			const res = await ProjectService.fundProject(payload);
			console.log('buying', res);
			return res;
		},

		async createOffer(payload: any) {
			const res = await ProjectService.createOffer(payload);

			return res;
		},

		async createBid(payload: any) {
			const res = await ProjectService.createBid(payload);

			return res;
		},

		async fetchBids({ offerId }: any) {
			const res = await ProjectService.fetchBids(offerId);

			return res;
		},

		async fetchMyBids() {
			const res = await ProjectService.fetchUserBids();

			return res;
		},

		async sellAsGroup({ fundId, action }: any) {
			const res = await ProjectService.sellAsGroup({
				id: fundId,
				action,
			});

			return res;
		},

		async acceptBid({ bidId }: any) {
			const res = await ProjectService.acceptBid({
				id: bidId,
			});

			return res;
		},

		async rejectBid({ bidId }: any) {
			const res = await ProjectService.rejectBid({
				id: bidId,
			});

			return res;
		},

		async payBid(payload: any) {
			const res = await ProjectService.payBid(payload);

			return res;
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAssetStore, import.meta.hot));
}
