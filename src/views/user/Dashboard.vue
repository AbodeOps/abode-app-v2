<template>
	<div class="flex flex-col">
		<div class="grid grid-cols-4 gap-4">
			<div class="h-36 w-36 bg-black"></div>
			<div class="h-36 w-36 bg-black"></div>
			<div class="h-36 w-36 bg-black"></div>
			<div class="h-36 w-36 bg-black"></div>
			<div class="h-36 w-36 bg-black"></div>
			<div>
				<SubscriptionCard class="h-[344px] w-[344px]" />
			</div>
			<WalletCard class="h-[344px] w-[344px]" />
			<NetworthCard class="h-[344px] w-[344px]" />
		</div>
	</div>
</template>

<script setup lang="ts">
import SubscriptionCard from '@/components/dashboard/SubscriptionCard.vue';
import WalletCard from '@/components/dashboard/WalletCard.vue';
import NetworthCard from '@/components/dashboard/NetworthCard.vue';
</script>
