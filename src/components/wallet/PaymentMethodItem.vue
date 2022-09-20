<template>
	<div
		class="mb-5 flex min-h-[100px] w-full cursor-pointer items-center rounded-lg border border-gray-50 p-4"
		:class="{ 'border border-orange': selected }"
	>
		<component class="h-12 w-12 text-orange" :is="item.icon" />

		<div class="ml-4 w-full text-left">
			<div class="text-xl font-semibold text-primary">{{ item.label }}</div>
			<div class="text-sm text-gray-80" v-html="item.description" />
		</div>

		<div class="flex h-5 w-5 justify-end">
			<CheckboxMarkedCircleIcon v-if="selected" class="h-5 w-5 text-orange" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { CheckboxMarkedCircleIcon } from '../icons/AllIcons';
defineProps<{
	item: {
		label: string;
		description: string;
		icon: any;
	};
	selected?: boolean;
}>();
</script>
