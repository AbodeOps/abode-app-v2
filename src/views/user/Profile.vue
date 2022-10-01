<template>
	<div class="px-4 md:px-12">
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
		</div>

		<h1>Profile</h1>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabs = ref([
	{
		label: 'Account',
		key: 'account',
	},
	{
		label: 'Next Of Kin',
		key: 'next-of-kin',
	},
	{
		label: 'Security',
		key: 'security',
	},
]);

const activeTab = ref(tabs.value[0].key);
</script>
