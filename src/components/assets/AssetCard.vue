<template>
	<div @click="viewAsset" class="relative flex cursor-pointer flex-col rounded-lg border border-gray-20 p-8">
		<div class="h-[10rem] w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 md:h-40">
			<img
				:src="asset.image_url"
				:alt="'product-15'"
				class="h-full w-full object-cover object-top lg:h-full lg:w-full"
				@error="onImageFail"
			/>
		</div>
		<div class="mt-6 text-xl font-semibold">{{ asset.name }}</div>
		<div class="mb-6 mt-1 text-xs font-light text-gray-40">{{ asset.location }}</div>
		<div class="flex w-full justify-between">
			<div class="w-1/2" v-if="!subscribed">
				<div class="text-md text-primary">{{ formatMoney(asset.unit_price) }}</div>
				<div class="mt-1 text-sm font-light text-gray-50">Per {{ asset.unit_measurement }}</div>
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
				<div>{{ asset.max_duration }} Months</div>
				<div class="mt-1 text-sm font-light text-gray-50">Holding Period</div>
			</div>
		</div>
		<div class="mt-5 flex w-full justify-between">
			<div class="w-1/2" v-if="!subscribed">
				<div>{{ asset.available_units }}</div>
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
				<div>40% ({{ subscription?.units }} Units)</div>
				<div class="mt-1 text-sm font-light text-gray-50">Shares bought</div>
			</div>
		</div>
		<div class="absolute -top-3 left-0 flex justify-between" v-if="!subscribed">
			<div class="flex">
				<div class="mr-2 inline-flex" v-if="!asset.status">
					<div class="rounded-full bg-red py-1 px-4 text-xs text-white">Sold Out</div>
				</div>
				<div class="inline-flex">
					<div class="rounded-full border border-gray-70 bg-white py-1 px-4 text-xs text-gray-70">Own to Earn</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ROUTES } from '@/router/routes';
import type { Asset, Subscription } from '@/types';
import { useRouter } from 'vue-router';
import { formatDate, formatMoney } from '@/utils/helpers';

const props = defineProps<{
	subscribed?: boolean;
	asset: Asset;
	subscription?: Subscription;
}>();

const router = useRouter();

const viewAsset = () => {
	router.push({
		name: props.subscribed ? ROUTES.USER_SUBSCRIPTIONS_DETAILS : ROUTES.USER_ASSETS_DETAILS,
		params: {
			id: props.subscribed ? props.subscription?.id : props.asset.id,
		},
	});
};

const onImageFail = (event: Event) => {
	if (event.target instanceof HTMLImageElement) {
		event.target.src = 'https://api.abode.ng/storage/htsBVPzKXGLzBSplzRonHBz5ZV9AqNMBtZMCcw7I.jpg';
	}
};
</script>
