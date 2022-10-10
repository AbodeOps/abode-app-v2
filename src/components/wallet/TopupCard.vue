<template>
	<div class="flex">
		<Pattern1Card class="flex h-full w-full cursor-pointer" @click="isOpen = true" bgColor="#FDEBE3"
			patternColor="#FAE9E2">
			<div class="flex h-full w-full flex-col items-center justify-center text-xl text-black">
				<WalletTopupIcon class="h-8 w-8" />
				<div class="text-md mt-5">Top Up</div>
			</div>
		</Pattern1Card>

		<TopupModal :isOpen="isOpen" @closed="isOpen = false" @completed="handleProceed" />
		<BankTransferModal @goBack="isBankTransferOpen = false; isOpen = true" :isLoading="isLoading"
			:isOpen="isBankTransferOpen" @closed="isBankTransferOpen = false" @completed="submit" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PaymentOption, type TopUpForm } from '@/types';
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { WalletTopupIcon } from '../icons/AllIcons';
import TopupModal from '@/components/wallet/TopupModal.vue';
import BankTransferModal from '@/components/common/BankTransferModal.vue';

import { useTransactionStore } from '@/stores/transactions';
import toast from '@/helpers/toast';

const isOpen = ref(false);
const isLoading = ref(false);
const isBankTransferOpen = ref(false);

const transactionStore = useTransactionStore();

const handleProceed = (selectedPaymentMethod: PaymentOption) => {
	if (selectedPaymentMethod === PaymentOption.BANK_TRANSFER) { isOpen.value = false; isBankTransferOpen.value = true; }
}

const submit = async (form: TopUpForm) => {
	isLoading.value = true;

	await transactionStore.topup({
		amount: form.amount,
		reference: form.reference,
		bankCode: form.bankCode,
		proof: form.proof,
		type: PaymentOption.BANK_TRANSFER
	}).then((res: any) => {
		if (res.status) {
			toast.success(res.message);
			isBankTransferOpen.value = false;
		}
		isLoading.value = false;
	}).catch(() => {
		isLoading.value = false;

	})
}
</script>
