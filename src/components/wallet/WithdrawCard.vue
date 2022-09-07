<template>
	<Pattern1Card bgColor="#FDEBE3" patternColor="#FAE9E2">
		<div class="flex h-full w-full flex-col items-center justify-center text-xl text-black">
			<WalletWithdrawIcon class="h-8 w-8" />
			<div class="text-md mt-5">Withdraw</div>
		</div>
	</Pattern1Card>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { WalletWithdrawIcon } from '../icons/AllIcons';
</script>
