<template>
	<div class="flex flex-col w-full h-full">
		<div class="px-4 sm:hidden md:px-6" v-if="!noSelectOnMobile">
			<label for="tabs" class="sr-only">Select a tab</label>
			<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
			<select
				id="tabs"
				name="tabs"
				class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-green focus:outline-none focus:ring-green sm:text-sm"
			>
				<option v-for="tab in props.tabs" :key="tab.label" :selected="isCurrentTab(tab)">{{ tab.label }}</option>
			</select>
		</div>
		<div class="px-4 sm:block md:px-6" :class="{ hidden: !noSelectOnMobile }">
			<div class="">
				<nav class="flex justify-between -mb-px overflow-x-scroll md:justify-start md:space-x-8 no-scrollbar" aria-label="Tabs">
					<a
						@click="handleTabChange(tab)"
						v-for="tab in props.tabs"
						:key="tab.label"
						:href="tab.to"
						:class="[
							isCurrentTab(tab)
								? 'border-green font-bold text-gray-90'
								: 'border-transparent font-medium text-gray-50 hover:text-gray-60',
							'text-body whitespace-nowrap border-b-4 py-1 px-2',
						]"
						:aria-current="isCurrentTab(tab) ? 'page' : undefined"
					>
						{{ tab.label }}
					</a>
				</nav>
			</div>
		</div>
		<div class="flex-1 h-full">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from '@vue/runtime-core';
import type { TabItem } from '@/types';

const props = defineProps({
	tabs: {
		type: Array as PropType<TabItem[]>,
		required: true,
	},
	modelValue: {
		type: Object as PropType<TabItem>,
	},
	noSelectOnMobile: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['update:modelValue']);

const isCurrentTab = (tab: TabItem) => {
	return tab.label === props.modelValue?.label;
};

const handleTabChange = (tab: TabItem) => {
	emit('update:modelValue', tab);
};
</script>
