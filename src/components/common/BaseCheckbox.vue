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
			<slot>
				<label for="comments" class="text-gray-700">{{ label }}</label>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ label?: string; modelValue?: boolean }>();

const isChecked = ref<boolean>(props.modelValue as boolean);

const emit = defineEmits(['update:modelValue']);

const changeCheckboxValue = (ev: Event) => {
	if (ev.target instanceof HTMLInputElement) {
		isChecked.value = ev.target.checked;
		emit('update:modelValue', isChecked.value);
	}
};

watch(
	() => props.modelValue,
	(newV, oldV) => {
		if (newV !== oldV) isChecked.value = newV as boolean;
	}
);
</script>
