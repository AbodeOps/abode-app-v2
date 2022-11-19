<template>
	<div class="w-full rounded-lg border border-gray-40 p-6 md:p-8">
		<div class="text-2xl font-bold">Asset Details</div>
		<div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
			<AssetField :value="`${asset.totalUnits}`" label="Total Units" />
			<AssetField :value="`${asset.available_units}`" label="Available Units" />
			<AssetField value="June-24-2022" label="Collection Date" />
			<AssetField value="15% (Every 3 years)" label="Rental Appreciation" />
			<AssetField :value="`${asset.potentialGrowth}`" label="Potential Capital Appreciation" />

			<AssetField value="September-24-2022" label="Start Date" />
		</div>

		<!-- <div class="mt-5 mb-4 flex text-lg">
			<div>Title:</div>
			<div class="ml-1 text-primary">Global C of O</div>
		</div> -->

		<div class="my-4 text-sm" v-html="asset.description" />

		<div class="mt-8" v-if="false">
			<div class="text-lg font-bold">Features</div>
			<div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
				<ul class="list-inside list-disc">
					<li class="mb-3 text-sm" v-for="(feature, i) in features.slice(0, 4)" :key="i">{{ feature }}</li>
				</ul>
				<ul class="list-inside list-disc">
					<li class="mb-3 text-sm" v-for="(feature, i) in features.slice(4, features.length)" :key="i">{{ feature }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Asset } from '@/types';
import { ref } from 'vue';
import AssetField from './AssetField.vue';

defineProps<{
	asset: Asset;
}>();

const features = ref([
	'2 bedroom ensuite',
	'Pointing (Internal and External)',
	'Electrical and Plumbing channels with fittings',
	'Doors (Internal and External )',
	'Kitchen with cabinet',
	'Tiles and POP',
	'Ample car parking space (Interlock)',
	'24 hours security',
	'Fenced and gated',
]);
</script>
