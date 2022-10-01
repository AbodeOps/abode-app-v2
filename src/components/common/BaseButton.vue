<template>
	<button
		:disabled="loading || disabled"
		type="button"
		class="text-body relative inline-flex items-center justify-center rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
		:class="[styles, outlined ? '' : 'border border-transparent']"
	>
		<slot></slot>
		<span class="flex items-center" v-if="loading">
			...
			<!-- <SpinnerIcon class="h-5 w-5 animate-spin" :class="[textColor]" /> -->
		</span>
	</button>
</template>

<script setup lang="ts">
// import { SpinnerIcon } from '@/components/icons/AllIcons';
import { computed } from '@vue/runtime-core';

const props = defineProps({
	loading: {
		type: Boolean,
		default: false,
	},
	outlined: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	bgColor: {
		type: String,
		default: 'green',
	},
	textColor: {
		type: String,
		default: 'white',
	},
	hoverColor: {
		type: String,
		default: 'green-90',
	},
	focusColor: {
		type: String,
		default: 'green-70',
	},
	disabledColor: {
		type: String,
		default: 'gray-40',
	},
});

const { bgColor, textColor, hoverColor, focusColor, disabledColor } = props;

const styles = computed<string>(() => {
	return `transition-colors bg-${bgColor} ${
		textColor ? `text-${textColor}` : ''
	}  hover:bg-${hoverColor} focus:ring-${focusColor} disabled:bg-${disabledColor}`;
});
</script>
