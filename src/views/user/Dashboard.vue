<template>
	<div class="flex flex-col">
		<div class="text-2xl">
			<span class="mr-1 text-gray-80">Howdy,</span>
			<span class="font-bold">Gideon</span>
		</div>
		<div class="-mt-8 grid grid-cols-4 gap-4">
			<div>
				<SubscriptionCard class="h-[344px] w-[100%]" />
			</div>
			<WalletCard class="h-[344px] w-[100%]" />
			<NetworthCard class="h-[344px] w-[100%]" />
			<CoyieldCard class="h-[344px] w-[100%]" />
		</div>
		<div class="grid grid-cols-7 gap-4">
			<Insights class="col-span-4" />
			<ActivityLog class="col-span-3" />
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
</script>
