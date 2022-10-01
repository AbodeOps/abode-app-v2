<template>
	<AssetCard
		subscribed
		v-for="subscription in subscriptions"
		:subscription="subscription"
		:asset="subscription.project"
		:key="subscription.id"
	/>
</template>

<script lang="ts" setup>
import AssetCard from '@/components/assets/AssetCard.vue';
import { useAssetStore } from '@/stores/assets';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const assetStore = useAssetStore();

const isLoadingAssets = ref(false);

const { subscriptions } = storeToRefs(assetStore);

const fetchSubscriptions = async () => {
	isLoadingAssets.value = true;
	await assetStore.fetchSubscriptions().then(() => {
		isLoadingAssets.value = false;
	});
};

onMounted(() => {
	fetchSubscriptions();
});
</script>
