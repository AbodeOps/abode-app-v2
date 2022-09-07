<template>
	<div class="mt-5 rounded-xl border border-gray-25">
		<div class="border-b border-gray-25 px-8 pt-4 pb-3">
			<div class="text-md">Referrals</div>
		</div>

		<div class="mt-3 flex flex-col">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full py-2 align-middle md:px-4 lg:px-4">
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
						<BaseTable :headers="headers" :items="items" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<BasePagination />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseTable from '@/components/common/BaseTable.vue';
import BasePagination from '@/components/common/BasePagination.vue';

const headers = ref([
	{ label: 'Date', key: 'date' },
	{ label: 'Name', key: 'name' },
	{ label: 'Email Address', key: 'email' },
	{ label: 'Phone Number', key: 'phone_number' },
	{ label: 'status', key: 'status' },
	{ label: 'Amount Earned', key: 'amount_earned' },
]);

const items = ref([
	{
		date: '2022-03-12',
		name: 'John Doe',
		email: 'ogunkolagideon@gmail.com',
		phone_number: '08106744642',
		status: 'Active',
		amount_earned: 'N3,000',
	},
	{
		date: '2022-03-12',
		name: 'John Doe',
		email: 'ogunkolagideon@gmail.com',
		phone_number: '08106744642',
		status: 'Inactive',
		amount_earned: 'N3,000',
	},
	{
		date: '2022-03-12',
		name: 'John Doe',
		email: 'ogunkolagideon@gmail.com',
		phone_number: '08106744642',
		status: 'Inactive',
		amount_earned: 'N3,000',
	},
	{
		date: '2022-03-12',
		name: 'John Doe',
		email: 'ogunkolagideon@gmail.com',
		phone_number: '08106744642',
		status: 'Active',
		amount_earned: 'N3,000',
	},
	{
		date: '2022-03-12',
		name: 'John Doe',
		email: 'ogunkolagideon@gmail.com',
		phone_number: '08106744642',
		status: 'Active',
		amount_earned: 'N3,000',
	},
]);
</script>
