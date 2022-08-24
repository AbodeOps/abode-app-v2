<template>
	<BaseLabel :labelFor="id" :required="required" :text="label" v-if="label" />
	<div class="relative inline-block w-full">
		<input
			ref="baseInput"
			:name="name"
			v-bind="$attrs"
			:type="inputType"
			:value="value"
			@input="changePageTitle($event)"
			class="text-caption w-full rounded-lg border border-gray-50 bg-gray-10 py-3 px-3 outline-none focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-70"
		/>

		<button
			type="button"
			class="absolute top-0 bottom-0 right-0 my-auto h-full rounded-r-lg px-2"
			v-if="type == 'password'"
			@click="showPassword = !showPassword"
		>
			<EyeOffIcon v-if="showPassword" class="h-5 w-5 text-gray-50" />
			<EyeIcon v-else class="h-5 w-5 text-gray-50" />
		</button>
		<!-- eslint-disable-next-line -->
		<button
			type="button"
			class="absolute top-0 bottom-0 right-0 my-auto h-full rounded-r-lg px-2"
			v-if="type == 'date'"
			@click="showPicker()"
		>
			<CalendarIcon class="h-5 w-5 text-gray-50" />
		</button>
	</div>
	<HelpText type="error" :text="errorMessage" v-if="errorMessage" class="mt-1" />
</template>

<script setup lang="ts">
import { EyeIcon, EyeOffIcon } from '@heroicons/vue/outline';
import type { HTMLInputTypeAttribute } from '@/types.js';
import { computed, type PropType, ref, toRef } from 'vue';
import { useField } from 'vee-validate';
import HelpText from '@/components/common/HelpText.vue';
import BaseLabel from './BaseLabel.vue';
import { CalendarIcon } from '@/components/icons/AllIcons';

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
