<template>
	<div class="grid grid-cols-2 gap-4 border border-l-0 border-r-0 border-b-0 border-t-gray-40 py-4 md:grid-cols-3 md:py-8 cursor-pointer"  @click="$emit('opened')">
		<div class="col-span-2 text-sm font-bold md:col-span-1">{{ label }}</div>
		<div :class="['text-sm', capitalize? 'capitalize': '']" >{{ value || 'Nil' }}</div>
		<div class="flex justify-end">
			<ArrowRightIcon class="h-5 w-5 text-black" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import ArrowRightIcon from '../icons/ArrowRightIcon.vue';

defineProps<{
	label: string;
	value?: string;
	capitalize?: boolean;
}>();
</script>
