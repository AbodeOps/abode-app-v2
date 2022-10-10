<template>
	<div class="w-full rounded-lg border border-gray-40 p-8">
		<div class="text-xl font-bold md:text-2xl">My Shares</div>

		<div class="mt-5 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-3">
			<AssetField :value="`${subscription.units}`" label="Units Bought" />
			<AssetField :value="`${numberOfSharesBought}`" label="Units Sold" />
			<AssetField :value="`${asset.available_units}`" label="Units Available" />
			<AssetField :value="`${percentageOwnership}%`" label="Percentage Ownership" />
			<AssetField :value="`${formatMoney(subscription.amount)}`" label="Amount Invested" />
			<AssetField :value="`${formatMoney(currentSalesValue - subscription.amount)}`" label="Profit" />
			<AssetField value="Income Type" label="Rental Income" />
			<AssetField :value="`${asset.potentialGrowth}`" label="Potential Capital Appreciation" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Asset, Subscription } from '@/types';
import { formatMoney } from '@/utils/helpers';
import { computed } from 'vue';
import AssetField from './AssetField.vue';

const props = defineProps<{ asset: Asset, subscription: Subscription }>();

const numberOfSharesBought = computed(() => props.asset.funds.reduce((prev: number, curr: Subscription) => prev +  curr.units, 0));

const percentageOwnership = computed(() => Number(((props.subscription?.units || 0) / (props.subscription?.project.totalUnits || 1)) * 100).toFixed(2))

const currentSalesValue = computed(() => props.asset.unit_price * (props.subscription?.units || 0));

</script>
