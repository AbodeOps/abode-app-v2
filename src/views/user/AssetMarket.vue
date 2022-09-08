<template>
	<div>
		<div class="mb-10 flex items-center justify-between">
			<div class="flex items-start">
				<span
					class="cursor-pointer rounded-full px-4 py-1 text-xs"
					:class="{ 'bg-primary text-white': activeTab === tab.key }"
					v-for="(tab, ix) in tabs"
					:key="ix"
					@click="activeTab = tab.key"
				>
					{{ tab.label }}
				</span>
			</div>

			<div class="flex items-center">
				<BaseMenu label="Sort" class="mr-4" :items="['Ascending', 'Descending']">
					<template #append-icon>
						<SortIcon class="ml-8 h-4 w-4 text-black" />
					</template>
				</BaseMenu>
				<BaseMenu label="Filter" :items="['Available', 'Sold Out', 'All']">
					<template #append-icon>
						<FilterIcon class="ml-8 h-4 w-4 text-black" />
					</template>
				</BaseMenu>
			</div>
		</div>
		<AssetMarketTable v-if="activeTab === 'assets'" />
		<BidTable v-if="activeTab === 'bids'" />
		<AuctionsTable v-if="activeTab === 'auctions'" />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseMenu from '@/components/common/BaseMenu.vue';
import { FilterIcon, SortIcon } from '@/components/icons/AllIcons';
import AssetMarketTable from '@/components/asset-market/AssetMarketTable.vue';
import BidTable from '@/components/asset-market/BidTable.vue';
import AuctionsTable from '@/components/asset-market/AuctionsTable.vue';

const tabs = ref([
	{
		label: 'Asset Market',
		key: 'assets',
	},
	{
		label: 'My Bids',
		key: 'bids',
	},
	{
		label: 'My Auctions',
		key: 'auctions',
	},
]);

const activeTab = ref(tabs.value[0].key);
</script>
