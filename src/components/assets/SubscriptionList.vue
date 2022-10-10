<template>
	<div>
		<AbodeLoader v-if="isLoadingAssets" />
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3" v-else>
			<AssetCard
				subscribed
				v-for="subscription in subscriptions"
				:subscription="subscription"
				:asset="subscription.project"
				:key="subscription.id"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import AssetCard from '@/components/assets/AssetCard.vue';
import { useAssetStore } from '@/stores/assets';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import AbodeLoader from '@/components/common/AbodeLoader.vue';

const assetStore = useAssetStore();

const isLoadingAssets = ref(false);

const { subscriptions } = storeToRefs(assetStore);

const fetchSubscriptions = async () => {
	isLoadingAssets.value = true;
	await assetStore.fetchSubscriptions().then(() => {
		isLoadingAssets.value = false;
	}).catch(() => {
		isLoadingAssets.value = false;
	});
};

onMounted(() => {
	fetchSubscriptions();
});
</script>
