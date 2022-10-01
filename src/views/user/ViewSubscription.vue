<template>
	<div class="px-4 md:px-12">
		<BaseGoBack />
		<div class="grid grid-cols-1 gap-10 md:grid-cols-8">
			<div class="col-span-1 md:col-span-3">
				<BaseCarousel :images="[{ src: `${subscription?.project?.image_url}`, alt: `Asset ${subscription?.project?.id}` }]" />

				<BaseShare class="mt-10" />
			</div>
			<div class="col-span-1 md:col-span-5" v-if="subscription && !isLoading">
				<AssetDetailsCard subscribed :subcription="subscription" :asset="subscription.project" />
				<SubscriptionDetailsCard class="my-10" :subcription="subscription" />
				<AssetMoreDetailsCard class="mb-10" :asset="subscription.project" />
				<AssetInsights />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseCarousel from '@/components/common/BaseCarousel.vue';
import AssetDetailsCard from '@/components/assets/AssetDetailsCard.vue';
import AssetMoreDetailsCard from '@/components/assets/AssetMoreDetailsCard.vue';
import AssetInsights from '@/components/assets/AssetInsights.vue';
import BaseGoBack from '@/components/common/BaseGoBack.vue';
import SubscriptionDetailsCard from '@/components/assets/SubscriptionDetailsCard.vue';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAssetStore } from '@/stores/assets';
import type { Subscription } from '@/types';
import BaseShare from '../../components/common/BaseShare.vue';

const isLoading = ref(false);
const route = useRoute();

const assetStore = useAssetStore();

const subscription = ref<Subscription>();

const fetchSubscriptionById = async () => {
	try {
		isLoading.value = true;
		const subscriptionId = route.params.id;

		const res = await assetStore.fetchSubscriptionById(Number(subscriptionId));

		subscription.value = { ...res.data, project: { ...res.data.project, totalUnits: res.data.expected_slots } };
	} finally {
		isLoading.value = false;
	}
};

onBeforeMount(async () => {
	await fetchSubscriptionById();
});
</script>
