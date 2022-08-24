<template>
	<button
		type="button"
		:class="colorClass"
		class="inline-flex items-center justify-center px-4 py-2 font-medium transition-colors bg-transparent border rounded-md text-body focus:outline-none focus:ring-2 focus:ring-offset-2"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	color: {
		type: String,
	},
});

const colorClass = computed(() => {
	if (props.color === 'green') {
		return 'border-green text-green hover:text-green-90 hover:border-green-90 focus:ring-green-70';
	}
	if (props.color === 'gray') {
		return 'border-gray-40 bg-gray-20 text-gray-70 focus:ring-gray-60 hover:text-gray-60 hover:border-gray-60';
	}

	return 'border-black text-black focus:ring-gray-60 hover:text-gray-60 hover:border-gray-60';
});
</script>
