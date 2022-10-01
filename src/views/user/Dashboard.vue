<template>
	<div class="flex flex-col">
		<div class="mb-4 text-2xl">
			<span class="mr-1 font-bold text-gray-80 opacity-40">Howdy,</span>
			<span class="font-bold">{{ user.client.firstName }}</span>
		</div>
		<div class="-ml-4 flex w-screen overflow-x-scroll px-4">
			<SubscriptionCard class="mr-5 h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
			<WalletCard class="mr-5 h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
			<NetworthCard class="mr-5 h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
			<CoyieldCard class="h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
		</div>
		<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-7">
			<Insights class="col-span-1 md:col-span-4" />
			<ActivityLog class="col-span-1 md:col-span-3" />
		</div>
	</div>
</template>

<script setup lang="ts">
import SubscriptionCard from '@/components/dashboard/SubscriptionCard.vue';
import WalletCard from '@/components/dashboard/WalletCard.vue';
import NetworthCard from '@/components/dashboard/NetworthCard.vue';
import CoyieldCard from '@/components/dashboard/CoyieldCard.vue';
import ActivityLog from '@/components/dashboard/ActivityLog.vue';
import Insights from '@/components/dashboard/Insights.vue';
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useTransactionStore } from '@/stores/transactions';

const authStore = useAuthStore();
const transactionStore = useTransactionStore();

const { user } = storeToRefs(authStore);

const isLoadingActivityLogs = ref(false);
const isLoadingWalletData = ref(false);

const fetchActivityLogs = async () => {
	isLoadingActivityLogs.value = true;
	await authStore.fetchActivityLogs().then(() => {
		isLoadingActivityLogs.value = false;
	});
};

const fetchWalletData = async () => {
	isLoadingWalletData.value = true;
	await transactionStore.fetchWallet().then(() => {
		isLoadingWalletData.value = false;
	});
};

onMounted(() => {
	fetchActivityLogs();
	fetchWalletData();
});
</script>
