<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader title="Withdraw" @closed="$emit('closed')" />

			<div class="mt-8 flex flex-col px-4">
				<div class="text-2xl font-semibold text-primary">{{ formattedBalance }}</div>
				<div class="text-md mt-1">Available for withdrawal</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center px-8">
				<BaseInput
					type="number"
					placeholder="Amount"
					hint="You must specify a minimum of N2000 for withdrawal"
					v-model="form.amount"
				/>
				<BaseInput type="text" placeholder="Select a Bank" v-model="form.bank" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" @click="proceed">Withdraw to Bank</BaseButton>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { useTransactionStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import type { WithdrawalForm } from '@/types';

defineProps<{
	isOpen: boolean;
}>();

const proceed = () => {};

const form = ref<WithdrawalForm>({
	amount: '0',
	bank: '1',
});

const transactionStore = useTransactionStore();

const { formattedBalance } = storeToRefs(transactionStore);
</script>
