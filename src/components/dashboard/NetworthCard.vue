<template>
	<Pattern1Card class="cursor-pointer" bgColor="#E1EAF9" patternColor="#DDE8FA">
		<div class="flex h-full w-full flex-col items-start justify-center text-xl text-black">
			<DashboardNetworthIcon class="h-8 w-8" />
			<div class="my-5 text-3xl font-bold">{{ formattedActualNetworth }}</div>
			<div class="text-md">Networth</div>
			<div class="mt-0 text-xs text-gray-80">Portfolio value</div>
		</div>
	</Pattern1Card>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { useTransactionStore } from '@/stores/transactions';
import { DashboardNetworthIcon } from '@/components/icons/AllIcons';
import { storeToRefs } from 'pinia';

const transactionStore = useTransactionStore();

const { formattedActualNetworth } = storeToRefs(transactionStore);
</script>
