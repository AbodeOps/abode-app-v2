<template>
	<div class="w-full rounded-lg border border-gray-40 p-8">
		<div class="text-xl font-bold md:text-2xl">My Shares</div>

		<div class="mt-5 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-3">
			<AssetField value="04" label="Units Bought" />
			<AssetField value="00" label="Units Sold" />
			<AssetField value="04" label="Units Available" />
			<AssetField value="10%" label="Percentage Ownership" />
			<AssetField value="N400,000" label="Amount Invested" />
			<AssetField value="N200,000" label="Profit" />
			<AssetField value="Income Type" label="Rental Income" />
			<AssetField value="N3,000,000" label="Potential Capital Appreciation" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import AssetField from './AssetField.vue';
</script>
