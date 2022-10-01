<template>
	<div class="px-4 md:px-12">
		<div class="mb-10 flex items-center justify-between">
			<BaseTabs :tabs="tabs" :activeTab="activeTab" @change="activeTab = $event" />

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
		<div v-if="activeTab === 'available-offers'">
			<AssetList />
		</div>
		<div v-if="activeTab === 'subscriptions'">
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
import BaseTabs from '@/components/common/BaseTabs.vue';

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
