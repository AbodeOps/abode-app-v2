<template>
	<div class="relative flex items-start">
		<div class="flex h-5 items-center">
			<input
				id="comments"
				aria-describedby="comments-description"
				@click="changeCheckboxValue"
				name="comments"
				type="checkbox"
				v-model="isChecked"
				class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
			/>
		</div>
		<div class="ml-3 text-sm">
			<label for="comments" class="text-gray-700">{{ label }}</label>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ label: string }>();

const isChecked = ref<boolean>(false);

const emit = defineEmits(['update:modelValue']);
const changeCheckboxValue = (ev: Event) => {
	isChecked.value = !isChecked.value;
	if (ev.target instanceof HTMLInputElement) {
		emit('update:modelValue', isChecked.value);
	} else {
		console.log('checking');
	}
};
</script>
