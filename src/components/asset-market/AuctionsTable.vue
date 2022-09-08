<template>
	<div class="mt-5 rounded-xl border border-gray-25">
		<div class="border-b border-gray-25 px-8 pt-4 pb-3">
			<div class="text-md">All Listings</div>
		</div>

		<div class="mt-3 flex flex-col">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full py-2 align-middle md:px-4 lg:px-4">
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
						<BaseTable :headers="headers" :items="items" show-pagination>
							<template #cell(asset)="item">
								<div class="flex items-center">
									<div
										class="min-h-8 aspect-w-1 aspect-h-1 lg:aspect-none w-10 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:h-8"
									>
										<img
											:src="'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'"
											:alt="'product-15'"
											class="h-full w-full object-cover object-top lg:h-full lg:w-full"
										/>
									</div>
									<div class="ml-2">{{ item.asset }}</div>
								</div>
							</template>
							<template #cell(actions)>
								<BaseMenu iconOnly :items="['View Details', 'Cancel Auction']">
									<template #icon>
										<MoreIcon class="h-4 w-4 cursor-pointer text-black" />
									</template>
								</BaseMenu>
							</template>
						</BaseTable>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <BasePagination /> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseTable from '@/components/common/BaseTable.vue';
import { MoreIcon } from '@/components/icons/AllIcons';
import BaseMenu from '../common/BaseMenu.vue';

const headers = ref([
	{ label: 'Date', key: 'date' },
	{ label: 'Asset', key: 'asset' },
	{ label: 'Buyer', key: 'buyer' },
	{ label: 'Selling Price/Unit', key: 'rate' },
	{ label: 'Units', key: 'units' },
	{ label: 'Bids', key: 'bids' },
	{ label: 'Status', key: 'status' },
	{ label: '', key: 'actions' },
]);

const items = ref([
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Open',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Open',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Closed',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Closed',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Open',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Open',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Open',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Open',
	},
	{
		date: '2022-03-12',
		asset: 'Homify Apartment',
		image: '',
		buyer: 'John Doe',
		rate: 'N200,000',
		units: '10',
		bids: '12',
		status: 'Open',
	},
]);
</script>
