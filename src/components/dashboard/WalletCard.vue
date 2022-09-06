<template>
	<Pattern1Card bgColor="#FDEBE3" patternColor="#FAE9E2">
		<div class="flex h-full w-full flex-col items-start justify-center text-xl text-black">
			<DashboardWalletIcon class="h-8 w-8" />
			<div class="my-5 text-3xl font-bold">₦400,000</div>
			<div class="text-md">Wallet Balance</div>
		</div>
	</Pattern1Card>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { DashboardWalletIcon } from '../icons/AllIcons';
</script>
