<template>
	<div @click="viewAsset" class="flex cursor-pointer flex-col rounded-lg border border-gray-20 p-8">
		<div
			class="min-h-40 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:h-40"
		>
			<img
				:src="'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'"
				:alt="'product-15'"
				class="h-full w-full object-cover object-top lg:h-full lg:w-full"
			/>
		</div>
		<div class="mt-6 text-xl font-semibold">Lead Avenue</div>
		<div class="mb-6 mt-1 text-xs font-light text-gray-40">Ikeja Lagos, Nigeria</div>
		<div class="flex w-full justify-between">
			<div class="w-1/2" v-if="!subscribed">
				<div class="text-md text-primary">N100,000</div>
				<div class="mt-1 text-sm font-light text-gray-50">Per unit</div>
			</div>
			<div class="w-1/2" v-if="subscribed">
				<div class="text-md text-primary">N400,000</div>
				<div class="mt-1 text-sm font-light text-gray-50">Amount Invested</div>
			</div>
			<div class="w-1/2" v-if="subscribed">
				<div class="text-md text-primary">12</div>
				<div class="mt-1 text-sm font-light text-gray-50">Co-owners</div>
			</div>

			<div class="w-1/2 text-start" v-if="!subscribed">
				<div>8 Months</div>
				<div class="mt-1 text-sm font-light text-gray-50">Holding Period</div>
			</div>
		</div>
		<div class="mt-5 flex w-full justify-between">
			<div class="w-1/2" v-if="!subscribed">
				<div>12</div>
				<div class="mt-1 text-sm font-light text-gray-50">Available Units</div>
			</div>
			<div class="w-1/2 text-start" v-if="subscribed">
				<div>100% (N100,000)</div>
				<div class="mt-1 text-sm font-light text-gray-50">Current Sales Value</div>
			</div>
			<div class="w-1/2 text-start" v-if="!subscribed">
				<div>12-Dec-2021</div>
				<div class="mt-1 text-sm font-light text-gray-50">Collection Date</div>
			</div>
			<div class="w-1/2 text-start" v-if="subscribed">
				<div>40% (4 Units)</div>
				<div class="mt-1 text-sm font-light text-gray-50">Shares bought</div>
			</div>
		</div>
		<div class="mt-4 flex justify-between" v-if="!subscribed">
			<div class="inline-flex w-1/2">
				<div class="rounded-full bg-green py-1 px-4 text-xs text-white">Available</div>
			</div>
			<div class="inline-flex w-1/2">
				<div class="rounded-full border border-gray-70 bg-white py-1 px-4 text-xs text-gray-70">Own to Earn</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ROUTES } from '@/router/routes';
import { useRouter } from 'vue-router';

const props = defineProps<{
	subscribed?: boolean;
}>();

const router = useRouter();

const viewAsset = () => {
	router.push({
		name: props.subscribed ? ROUTES.USER_SUBSCRIPTIONS_DETAILS : ROUTES.USER_ASSETS_DETAILS,
		params: {
			id: 1,
		},
	});
};
</script>
