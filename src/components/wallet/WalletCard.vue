<template>
	<Pattern1Card bgColor="#DEF0F2" patternColor="#E3F1F3">
		<div class="flex h-full w-full flex-col items-start justify-center text-xl text-black">
			<WalletWalletIcon class="h-8 w-8" />
			<div class="my-5 text-3xl font-bold">₦400,000</div>
			<div class="text-md">Wallet Balance</div>
		</div>
	</Pattern1Card>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { WalletWalletIcon } from '../icons/AllIcons';
</script>
