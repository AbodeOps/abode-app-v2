<template>
	<button
		type="button"
		:class="[colorClass]"
		class="inline-flex items-center justify-center px-4 py-2 font-medium transition-colors border rounded-md md:px-8 focus:outline-none focus:ring-2 focus:ring-offset-2"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	color: {
		type: String,
		default: 'gray'
	},
	bgTransparent: {
		type: Boolean,
		default: false,
	},
});

const colorClass = computed(() => {
	if (props.color === 'green') {
		return 'border-green text-green hover:text-green-90 hover:border-green-90 focus:ring-green-70 text-body';
	}
	if (props.color === 'gray' && !props.bgTransparent ) {
		return 'border-gray-40 bg-gray-20 text-gray-70 focus:ring-gray-60 hover:text-gray-60 hover:border-gray-60 text-body';
	}
	if (props.color === 'gray' && props.bgTransparent ) {
		return 'border-gray-40 text-gray-70 focus:ring-gray-60 hover:text-gray-60 hover:border-gray-60 text-caption';
	}

	return 'border-black text-black focus:ring-gray-60 hover:text-gray-60 hover:border-gray-60 text-body';
});
</script>
