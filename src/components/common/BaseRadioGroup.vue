<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<RadioGroup v-model="value">
		<div :class="[vertical ? 'flex-col space-y-3' : 'flex-row items-center space-x-3', 'mt-3 flex  ']">
			<RadioGroupOption as="template" v-for="(option, ix) in options" :key="ix" :value="option" v-slot="{ active, checked }">
				<div class="mb-2 flex">
					<div
						:class="[
							checked ? 'ring-green' : 'ring ring-gray-40',
							active && checked ? 'ring ring-green ring-offset-1' : '',
							!active && checked ? 'ring-2 ring-green' : '',
							'relative  flex h-5 w-5 cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
						]"
					>
						<span aria-hidden="true" :class="[checked ? 'bg-green' : 'bg-white', 'h-3 w-3 rounded-full ']" />
						<RadioGroupLabel as="span" class="sr-only">
							<slot name="item" :option="option">
								{{ option }}
							</slot>
						</RadioGroupLabel>
					</div>
					<RadioGroupLabel as="span" class="ml-3 -mt-1 cursor-pointer">
						<slot name="item" :option="option">
							{{ option }}
						</slot>
					</RadioGroupLabel>
				</div>
			</RadioGroupOption>
		</div>
	</RadioGroup>
	<HelpText type="error" :text="errorMessage" v-if="errorMessage" class="mt-1" />
</template>

<script lang="ts" setup>
import { ref, toRef, watch } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import { useField } from 'vee-validate';
import HelpText from '@/components/common/HelpText.vue';

const props = defineProps({
	options: {
		type: Array<any>,
		required: true,
	},
	name: {
		type: String,
		default: 'name',
	},
	itemValue: {
		type: String,
		default: '',
	},
	itemText: {
		type: String,
		default: '',
	},
	modelValue: {
		type: String,
		default: '',
	},
	vertical: {
		type: Boolean,
		default: false,
	},
});

const selectedOption = ref('');

const emit = defineEmits(['update:modelValue']);

const name = toRef(props, 'name');

const { value, errorMessage, handleBlur, handleChange, meta } = useField(name, undefined, {
	initialValue: props.modelValue,
});

// Sync v-model binding with vee-validate model changes
watch(value, (newValue) => {
	if (newValue !== props.modelValue) {
		emit('update:modelValue', newValue);
	}
});

// Sync vee-validate's model with external model changes.
watch(
	() => props.modelValue,
	(newModel) => {
		if (newModel !== value.value) {
			value.value = newModel;
		}
	}
);
</script>
