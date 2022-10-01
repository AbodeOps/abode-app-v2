<template>
	<div>
		<div class="md:text-md text-sm font-semibold">{{ value }}</div>
		<div class="mt-1 text-xs font-light text-gray-80 md:text-sm">{{ label }}</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	label: string;
	value: string;
}>();
</script>
