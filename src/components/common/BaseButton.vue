<template>
	<button
		:disabled="loading || disabled"
		type="button"
		class="relative inline-flex items-center justify-center px-4 py-2 font-medium border border-transparent rounded-md text-body focus:outline-none focus:ring-2 focus:ring-offset-2"
		:class="[styles]"
	>
		<slot></slot>
		<span class="absolute inset-y-0 flex items-center right-4" v-if="loading">
			<SpinnerIcon class="w-5 h-5 animate-spin" :class="[textColor]" />
		</span>
	</button>
</template>

<script setup lang="ts">
import { SpinnerIcon } from '@/components/icons/AllIcons';
import { computed } from '@vue/runtime-core';

const props = defineProps({
	loading: {
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
	return `transition-colors bg-${bgColor} text-${textColor} hover:bg-${hoverColor} focus:ring-${focusColor} disabled:bg-${disabledColor}`;
});
</script>
