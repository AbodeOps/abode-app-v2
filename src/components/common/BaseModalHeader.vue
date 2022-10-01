<template>
	<div class="flex w-full items-center justify-between border border-b-gray-50 py-4 px-2 md:px-4">
		<div class="w-4/6 text-left text-lg font-bold md:w-2/6">{{ title }}</div>
		<div class="hidden w-2/6 justify-center md:flex">
			<LogoNoText class="h-10 w-10" />
		</div>

		<div class="w-2/6 cursor-pointer text-right text-xl" @click="$emit('closed')">x</div>
	</div>
</template>

<script lang="ts" setup>
import { LogoNoText } from '@/components/icons/AllIcons';

defineProps<{
	title: string;
}>();

defineEmits(['closed']);
</script>
