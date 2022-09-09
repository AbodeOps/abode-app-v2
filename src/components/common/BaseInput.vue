<template>
	<div class="w-full">
		<div class="relative mt-1 mb-5 border-b border-gray-300 focus-within:border-indigo-600">
			<input
				class="block w-full rounded-tr-xl rounded-tl-xl border-0 border-b border-transparent bg-gray-25 py-4 px-5 text-xs outline-none focus:border-indigo-600 focus:ring-0 sm:text-sm"
				v-bind="$attrs"
			/>
		</div>
	</div>
	<HelpText type="error" :text="errorMessage" v-if="errorMessage" class="mt-1" />
</template>

<script setup lang="ts">
import type { HTMLInputTypeAttribute } from '@/types.js';
import { computed, type PropType, ref, toRef } from 'vue';
import { useField } from 'vee-validate';
import HelpText from '@/components/common/HelpText.vue';
// import BaseLabel from './BaseLabel.vue';

const baseInput = ref<HTMLInputElement | null>(null);

const showPicker = () => {
	// using any because of some weird behavior with HTMLInputElement type
	(baseInput.value as HTMLInputElement | any)?.showPicker();
};

const props = defineProps({
	type: {
		type: String as PropType<HTMLInputTypeAttribute>,
		default: 'text',
	},
	id: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	name: {
		type: String,
		default: 'name',
	},
	modelValue: {
		type: String,
		default: '',
	},
	required: {
		type: Boolean,
		default: false,
	},
});

const showPassword = ref(false);
const inputType = computed(() => {
	if (props.type == 'password') {
		if (showPassword.value) {
			return 'text';
		} else {
			return 'password';
		}
	}

	return props.type;
});

const emit = defineEmits(['update:modelValue']);

const changePageTitle = (ev: Event) => {
	if (ev.target instanceof HTMLInputElement) {
		emit('update:modelValue', ev?.target?.value);
	} else {
		console.log('checking');
	}
};

const name = toRef(props, 'name');

const { value, errorMessage, handleBlur, handleChange, meta } = useField(name, undefined, {
	initialValue: props.modelValue,
	validateOnValueUpdate: false,
});
</script>

<style scoped>
input[type='date']::-webkit-calendar-picker-indicator {
	background: transparent;
	bottom: 0;
	color: transparent;
	cursor: pointer;
	height: auto;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	width: auto;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type='number'] {
	-moz-appearance: textfield;
}
</style>
