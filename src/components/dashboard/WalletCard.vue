<template>
	<Pattern1Card @click="goToWallet" class="cursor-pointer" bgColor="#FDEBE3" patternColor="#FAE9E2">
		<div class="flex h-full w-full flex-col items-start justify-center text-xl text-black">
			<DashboardWalletIcon class="h-8 w-8" />
			<div class="my-5 text-3xl font-bold">{{ formattedBalance }}</div>
			<div class="text-md">Wallet Balance</div>
		</div>
	</Pattern1Card>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { DashboardWalletIcon } from '@/components/icons/AllIcons';
import { ROUTES } from '@/router/routes';
import { useTransactionStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();

const transactionStore = useTransactionStore();

const { formattedBalance } = storeToRefs(transactionStore);

const goToWallet = () => {
	router.push({
		name: ROUTES.USER_WALLET,
	});
};
</script>
