<template>
	<div class="grid w-full grid-cols-3 items-center justify-between gap-4 border border-b-gray-50 py-4 px-4">
		<div class="text-lg font-bold">{{ title }}</div>
		<div class="flex justify-center">
			<LogoNoText class="h-10 w-10" />
		</div>

		<div class="cursor-pointer text-right text-xl" @click="$emit('closed')">x</div>
	</div>
</template>

<script lang="ts" setup>
import { LogoNoText } from '@/components/icons/AllIcons';

defineProps<{
	title: string;
}>();

defineEmits(['closed']);
</script>
