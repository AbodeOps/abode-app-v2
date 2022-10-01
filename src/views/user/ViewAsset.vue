<template>
	<div class="px-4 md:px-12">
		<BaseGoBack />
		<div class="grid grid-cols-1 gap-4 md:grid-cols-8 md:gap-10">
			<div class="col-span-1 md:col-span-3">
				<BaseCarousel :images="[{ src: `${asset?.image_url}`, alt: `Asset ${asset?.id}` }]" />

				<div class="mt-8 mb-8 md:mt-10 md:mb-0">
					<div class="text-lg font-semibold text-black md:text-2xl">Tell your friends</div>
					<div class="mt-2 flex md:mt-5">
						<WhatsappIcon class="mr-4 h-5 w-5 cursor-pointer text-gray-90 md:h-8 md:w-8" />
						<FacebookIcon class="mr-4 h-5 w-5 cursor-pointer text-gray-90 md:h-8 md:w-8" />
						<InstagramIcon class="mr-4 h-5 w-5 cursor-pointer text-gray-90 md:h-8 md:w-8" />
						<TwitterIcon class="h-5 w-5 cursor-pointer text-gray-90 md:h-8 md:w-8" />
					</div>
				</div>
			</div>
			<div class="col-span-1 md:col-span-5" v-if="asset && !isLoading">
				<AssetDetailsCard :asset="asset" />
				<AssetMoreDetailsCard class="my-10" :asset="asset" />
				<AssetInsights :asset="asset" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseCarousel from '@/components/common/BaseCarousel.vue';
import { FacebookIcon, InstagramIcon, TwitterIcon, WhatsappIcon } from '@/components/icons/AllIcons';
import AssetDetailsCard from '@/components/assets/AssetDetailsCard.vue';
import AssetMoreDetailsCard from '@/components/assets/AssetMoreDetailsCard.vue';
import AssetInsights from '@/components/assets/AssetInsights.vue';
import BaseGoBack from '@/components/common/BaseGoBack.vue';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAssetStore } from '@/stores/assets';
import type { Asset } from '@/types';

const isLoading = ref(false);
const route = useRoute();

const assetStore = useAssetStore();

const asset = ref<Asset>();

const fetchAssetById = async () => {
	try {
		isLoading.value = true;
		const projectId = route.params.id;

		const res = await assetStore.fetchAssetById(Number(projectId));

		asset.value = { ...res.data, totalUnits: res.data.expected_slots };
	} finally {
		isLoading.value = false;
	}
};

onBeforeMount(async () => {
	await fetchAssetById();
});
</script>
