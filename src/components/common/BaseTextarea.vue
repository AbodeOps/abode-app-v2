<template>
	<div class="relative inline-block w-full">
		<textarea
			v-bind="$attrs"
			:value="modelValue"
			@input="changePageTitle($event)"
			class="text-caption w-full rounded-lg border border-gray-50 bg-gray-10 py-3 px-3 outline-none focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-70"
		/>
	</div>
</template>

<script setup lang="ts">
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['update:modelValue']);

const changePageTitle = (ev: Event) => {
	if (ev.target instanceof HTMLTextAreaElement) {
		emit('update:modelValue', ev.target.value);
	}
};
</script>
