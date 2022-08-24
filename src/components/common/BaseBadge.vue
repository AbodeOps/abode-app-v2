<template>
	<span class="text-micro border-gray text-gray inline-flex items-center rounded border px-2 py-0.5 font-medium" :class="[colors]">
		{{ text }}
	</span>
</template>

<script setup lang="ts">
import {computed} from 'vue';
const props = defineProps({
	text: {
		type: String,
		default: '',
	},
});

const colors = computed(() => {
	if(props.text.toLowerCase() === 'not hired') {
		return 'border-orange bg-orange-10 text-orange';
	}
	if(props.text.toLowerCase() === 'hired'){
		return 'bg-violet text-white';
	}
	if(props.text.toLowerCase() === 'applied'){
		return 'bg-blue-10 border-blue text-blue';
	}
})
</script>
