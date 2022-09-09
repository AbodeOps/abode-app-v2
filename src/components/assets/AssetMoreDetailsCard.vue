<template>
	<div class="w-full rounded-lg border border-gray-40 p-8">
		<div class="text-2xl font-bold">Asset Details</div>

		<div class="mt-5 mb-4 flex text-lg">
			<div>Title:</div>
			<div class="ml-1 text-primary">Global C of O</div>
		</div>

		<div class="text-sm">
			Homify Apartment is a 9 unit of 2 bedroom apartment development of Pertinence Properties 15 minutes from the Marital Muhammed
			International Airpot in Lagos.
		</div>

		<div class="mt-8 grid grid-cols-3 gap-4">
			<div>
				<div class="font-semibold">25</div>
				<div class="mt-1 text-sm font-light text-gray-80">Total Units</div>
			</div>
			<div>
				<div class="font-semibold">11</div>
				<div class="mt-1 text-sm font-light text-gray-80">Available Units</div>
			</div>
			<div>
				<div class="font-semibold">June-24-2022</div>
				<div class="mt-1 text-sm font-light text-gray-80">Collection Date</div>
			</div>
			<div>
				<div class="font-semibold">15% (Every 3 years)</div>
				<div class="mt-1 text-sm font-light text-gray-80">Rental Appreciation</div>
			</div>
			<div>
				<div class="font-semibold">September-24-2022</div>
				<div class="mt-1 text-sm font-light text-gray-80">Start Date</div>
			</div>
		</div>

		<div class="mt-8">
			<div class="text-lg font-bold">Features</div>
			<div class="mt-2 grid grid-cols-2 gap-4">
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
import { ref } from 'vue';

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
