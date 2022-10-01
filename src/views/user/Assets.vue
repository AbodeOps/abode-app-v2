<template>
	<div class="px-4 md:px-12">
		<div class="mb-10 flex items-center justify-between">
			<div class="flex items-start">
				<span
					class="inline-flex cursor-pointer whitespace-pre rounded-full px-4 py-1 text-xs"
					:class="{ 'bg-primary text-white': activeTab === tab.key }"
					v-for="(tab, ix) in tabs"
					:key="ix"
					@click="activeTab = tab.key"
				>
					{{ tab.label }}
				</span>
			</div>

			<div class="flex items-center">
				<BaseMenu shortenOnMobile label="Sort" class="mr-4" :items="['Ascending', 'Descending']">
					<template #append-icon>
						<SortIcon class="ml-0 h-4 w-4 text-black md:ml-8" />
					</template>
				</BaseMenu>
				<BaseMenu shortenOnMobile label="Filter" :items="['Available', 'Sold Out', 'All']">
					<template #append-icon>
						<FilterIcon class="ml-0 h-4 w-4 text-black md:ml-8" />
					</template>
				</BaseMenu>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3" v-if="activeTab === 'available-offers'">
			<AssetList />
		</div>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3" v-if="activeTab === 'subscriptions'">
			<SubscriptionList />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseMenu from '@/components/common/BaseMenu.vue';
import { FilterIcon, SortIcon } from '@/components/icons/AllIcons';
import AssetList from '@/components/assets/AssetList.vue';
import SubscriptionList from '@/components/assets/SubscriptionList.vue';

const tabs = ref([
	{
		label: 'Available Offers',
		key: 'available-offers',
	},
	{
		label: 'My Subscriptions',
		key: 'subscriptions',
	},
]);

const activeTab = ref(tabs.value[0].key);
</script>
