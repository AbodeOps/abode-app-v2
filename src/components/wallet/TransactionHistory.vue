<template>
	<div class="mt-5 rounded-xl border border-gray-25">
		<div class="text-md border-b border-gray-25 px-8 pt-4 pb-3">Transaction History</div>

		<div class="mt-3 flex flex-col">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full py-2 align-middle md:px-4 lg:px-4">
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
						<BaseTable :headers="headers" :items="transactions" show-pagination>
							<template #cell(createdAt)="item">
								{{ formatDate(item.createdAt) }}
							</template>
							<template #cell(amount)="item">
								{{ formatMoney(item.amount) }}
							</template>
							<template #cell(type)="item">
								<div class="capitalize">
									{{ item.type }}
								</div>
							</template>
						</BaseTable>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseTable from '@/components/common/BaseTable.vue';
import { storeToRefs } from 'pinia';
import { useTransactionStore } from '@/stores/transactions';
import { formatDate, formatMoney } from '@/utils/helpers';

const headers = ref([
	{ label: 'Date', key: 'createdAt' },
	{ label: 'Type', key: 'type' },
	{ label: 'Amount', key: 'amount' },
	{ label: 'Description', key: 'description' },
]);

const transactionStore = useTransactionStore();

const { transactions } = storeToRefs(transactionStore);
</script>
