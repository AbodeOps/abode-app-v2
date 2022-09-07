<template>
	<div class="grid h-full grid-cols-7 gap-10">
		<div class="col-span-4">
			<div class="flex">
				<WalletCard class="h-[344px] w-[50%]" />
				<TopupCard class="mx-3 h-[344px] w-[25%]" />
				<WithdrawCard class="h-[344px] w-[25%]" />
			</div>
			<TransactionHistory />
		</div>
		<div class="col-span-3">
			<Insights />
			<BankCard />
		</div>
	</div>
</template>

<script lang="ts" setup>
import WalletCard from '@/components/wallet/WalletCard.vue';
import TopupCard from '@/components/wallet/TopupCard.vue';
import WithdrawCard from '@/components/wallet/WithdrawCard.vue';
import TransactionHistory from '@/components/wallet/TransactionHistory.vue';
import Insights from '@/components/wallet/Insights.vue';
import BankCard from '@/components/wallet/BankCard.vue';
</script>
