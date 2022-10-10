<template>
	<div>
		<AbodeLoader v-if="isLoadingAssets" />
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3" v-else>
			<AssetCard v-for="asset in assets" :asset="asset" :key="asset.id" />
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

const { assets } = storeToRefs(assetStore);

const fetchAssets = async () => {
	isLoadingAssets.value = true;
	await assetStore.fetchAssets().then(() => {
		isLoadingAssets.value = false;
	}).catch(() => {
		isLoadingAssets.value = false;
	});
};

onMounted(() => {
	fetchAssets();
});
</script>
