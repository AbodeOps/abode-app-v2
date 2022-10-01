<template>
	<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
		<AssetCard v-for="asset in assets" :asset="asset" :key="asset.id" />
	</div>
</template>

<script lang="ts" setup>
import AssetCard from '@/components/assets/AssetCard.vue';
import { useAssetStore } from '@/stores/assets';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const assetStore = useAssetStore();

const isLoadingAssets = ref(false);

const { assets } = storeToRefs(assetStore);

const fetchAssets = async () => {
	isLoadingAssets.value = true;
	await assetStore.fetchAssets().then(() => {
		isLoadingAssets.value = false;
	});
};

onMounted(() => {
	fetchAssets();
});
</script>
