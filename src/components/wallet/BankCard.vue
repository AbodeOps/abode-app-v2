<template>
	<div class="mt-5 rounded-xl border border-gray-25">
		<div class="flex items-center justify-between border-b border-gray-25 px-8 pt-4 pb-3">
			<div class="text-md">Bank</div>

			<BaseButton
				@click="isOpen = true"
				class="flex items-center border border-orange"
				bg-color="transparent"
				text-color="orange"
				outlined
			>
				<PlusIcon class="mr-2 mb-1 h-4 w-4 text-orange" />
				Add New Bank
			</BaseButton>
		</div>

		<div class="mt-3 flex flex-col">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full py-2 align-middle md:px-4 lg:px-4">
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
						<BaseTable :headers="headers" :items="bankAccounts">
							<template #cell(actions)>
								<!-- <DeleteIcon class="h-4 w-4 cursor-pointer text-black" /> -->
							</template>
						</BaseTable>
					</div>
				</div>
			</div>
		</div>

		<AddBankModal
			:isOpen="isOpen"
			@closed="isOpen = false"
			@success="
				isOpen = false;
				emit('refresh');
			"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseTable from '@/components/common/BaseTable.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { DeleteIcon, PlusIcon } from '@/components/icons/AllIcons';
import AddBankModal from './AddBankModal.vue';
import { useTransactionStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';

const isOpen = ref(false);

const headers = ref([
	{ label: 'Name', key: 'name' },
	{ label: 'Bank', key: 'bank' },
	{ label: 'Number', key: 'number' },
	{ label: '', key: 'actions' },
]);

const transactionStore = useTransactionStore();

const emit = defineEmits(['refresh']);

const { bankAccounts } = storeToRefs(transactionStore);
</script>
