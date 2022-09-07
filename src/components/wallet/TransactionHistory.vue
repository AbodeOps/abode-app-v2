<template>
	<div class="mt-5 rounded-xl border border-gray-25">
		<div class="text-md border-b border-gray-25 px-8 pt-4 pb-3">Transaction History</div>

		<div class="mt-3 flex flex-col">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full py-2 align-middle md:px-4 lg:px-4">
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
						<BaseTable :headers="headers" :items="items" show-pagination />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseTable from '@/components/common/BaseTable.vue';

const headers = ref([
	{ label: 'Date', key: 'date' },
	{ label: 'Type', key: 'type' },
	{ label: 'Amount', key: 'amount' },
	{ label: 'Status', key: 'status' },
]);

const items = ref([
	{
		date: '2022-03-08 18:50:51',
		amount: 'N20,000',
		type: 'WIthdrawal',
		status: 'Approved',
	},
	{
		date: '2022-03-08 18:50:51',
		type: 'Deposit',
		amount: 'N25,000',
		status: 'Pending',
	},
	{
		date: '2022-03-08 18:50:51',
		type: 'WIthdrawal',
		amount: 'N20,000',
		status: 'Rejected',
	},
]);
</script>
