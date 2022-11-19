<template>
	<div class="grid grid-cols-1 gap-10 px-4 md:grid-cols-7 md:px-12">
		<div class="col-span-1 md:col-span-4">
			<div class="flex flex-col md:flex-row md:items-center">
				<WalletCard class="w-full md:h-[18rem] md:w-[30rem]" />
				<div class="mt-5 flex w-full md:mt-0">
					<TopupCard class="mr-3 h-[10rem] w-1/2 md:mx-3 md:h-[12rem] md:w-full" />
					<WithdrawCard class="h-[10rem] w-1/2 md:h-[12rem] md:w-full" />
				</div>
			</div>
			<TransactionHistory class="hidden md:block" />
		</div>
		<div class="col-span-1 md:col-span-3">
			<Insights />
			<BankCard @refresh="fetchBankAccounts" />
		</div>
		<div class="col-span-1">
			<TransactionHistory class="block md:hidden" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import WalletCard from '@/components/wallet/WalletCard.vue';
import TopupCard from '@/components/wallet/TopupCard.vue';
import WithdrawCard from '@/components/wallet/WithdrawCard.vue';
import TransactionHistory from '@/components/wallet/TransactionHistory.vue';
import Insights from '@/components/wallet/Insights.vue';
import BankCard from '@/components/wallet/BankCard.vue';
import { useTransactionStore } from '@/stores/transactions';
import { onMounted, ref } from 'vue';

const isLoading = ref(false);

const transactionStore = useTransactionStore();

const fetchWalletBalance = async () => {
	isLoading.value = true;
	await transactionStore.fetchWallet().then(() => {
		isLoading.value = false;
	});
};

const fetchTransactions = async () => {
	isLoading.value = true;
	await transactionStore.fetchTransactions().then(() => {
		isLoading.value = false;
	});
};

const fetchBankAccounts = async () => {
	isLoading.value = true;
	await transactionStore.fetchBankAccounts().then(() => {
		isLoading.value = false;
	});
};

onMounted(() => {
	fetchWalletBalance();
	fetchTransactions();
	fetchBankAccounts();
});
</script>
