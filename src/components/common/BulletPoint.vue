<template>
	<div class="rounded-full" :class="[sizeClass, colorClass]"></div>
</template>

<script lang="ts" setup>
	import { computed } from "vue"
	const props = defineProps({
		size: {
			type: String,
			default: '3',
		},
		color: {
			type: String,
			default: 'gray-40',
		}
	})

	const sizeClass = computed(()=>{
		return `h-[${props.size}px] w-[${props.size}px]`
	})
	const colorClass = computed(()=>{
		return `bg-${props.color}`
	})
</script>
