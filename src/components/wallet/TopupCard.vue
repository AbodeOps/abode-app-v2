<template>
	<div class="flex">
		<Pattern1Card class="flex h-full w-full cursor-pointer" @click="isOpen = true" bgColor="#FDEBE3" patternColor="#FAE9E2">
			<div class="flex h-full w-full flex-col items-center justify-center text-xl text-black">
				<WalletTopupIcon class="h-8 w-8" />
				<div class="text-md mt-5">Top Up</div>
			</div>
		</Pattern1Card>

		<TopupModal :isOpen="isOpen" @closed="isOpen = false" />
	</div>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { WalletTopupIcon } from '../icons/AllIcons';
import TopupModal from '@/components/wallet/TopupModal.vue';

import { ref } from 'vue';

const isOpen = ref(false);
</script>
