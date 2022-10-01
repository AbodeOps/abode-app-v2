<template>
	<div class="flex flex-col">
		<div class="mb-4 text-2xl">
			<span class="mr-1 text-gray-80">Howdy,</span>
			<span class="font-bold">Gideon</span>
		</div>
		<div class="flex w-full max-w-full overflow-x-scroll">
			<SubscriptionCard class="mr-5 h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
			<WalletCard class="mr-5 h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
			<NetworthCard class="mr-5 h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
			<CoyieldCard class="mr-5 h-[250px] w-[250px] min-w-[250px] max-w-[250px]" />
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
</script>
