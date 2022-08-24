<template>
	<div class="flex flex-wrap">
		<div
			v-for="(option, ix) in options"
			:key="ix"
			@click="handleSelect(option)"
			:class="[isSelected(option) ? 'border border-green bg-green text-white' : 'border border-gray-30 bg-gray-30']"
			class="text-caption mr-3 mb-3 flex cursor-pointer items-center justify-between rounded-lg py-1 px-2"
		>
			{{ option }}
			<CloseCircleIcon v-if="isSelected(option)" class="ml-2 h-5 w-5 text-white" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, type PropType } from 'vue';
import { CloseCircleIcon } from '@/components/icons/AllIcons';

defineProps({
	options: {
		type: Array as PropType<string[]>,
		default: () => [],
	},
	modelValue: {
		type: Array,
		default: () => [],
	},
});

const selectedOptions = ref<string[]>([]);

const isSelected = (option: string) => {
	return selectedOptions.value.includes(option);
};

const emit = defineEmits(['update:modelValue']);

const handleSelect = (option: string) => {
	if (!isSelected(option)) {
		selectedOptions.value.push(option);
	} else {
		selectedOptions.value.splice(selectedOptions.value.indexOf(option), 1);
	}

	emit('update:modelValue', selectedOptions.value);
};
</script>
