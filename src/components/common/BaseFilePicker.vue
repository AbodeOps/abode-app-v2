<template>
	<div class="w-full">
		<div class="relative mt-1 mb-5 cursor-pointer border-b border-dashed border-gray-300 focus-within:border-indigo-600">
			<div class="absolute top-2 mb-3 px-5 text-[0.55em] text-gray-60">{{ label }}</div>
			<input
				@click="openFilePicker"
				class="block w-full rounded-tr-xl rounded-tl-xl border-0 border-b border-transparent bg-gray-25 px-5 pt-6 pb-2 text-xs outline-none focus:border-indigo-600 focus:ring-0 sm:text-sm"
				v-bind="$attrs"
			/>
			<div v-if="file" class="file-item absolute top-2 mx-2 flex w-full justify-between rounded-md bg-gray-200 py-2 px-2 text-black">
				<div>{{ file?.name }}</div>
				<div>
					<XCircleIcon class="ml-auto h-5 w-5 cursor-pointer" @click="file = null" />
				</div>
			</div>
			<input type="file" @change="changeInput" ref="baseFilePicker" class="hidden" />
			<PaperClipIcon class="absolute top-2 right-0 mr-3 mt-3 h-5 w-5" />
		</div>
	</div>
	<div class="-mt-3 mb-3 text-xs text-gray-70" v-if="hint">{{ hint }}</div>
	<HelpText type="error" :text="errorMessage" v-if="errorMessage" class="mt-1" />
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue';
import { useField } from 'vee-validate';
import HelpText from '@/components/common/HelpText.vue';
// import BaseLabel from './BaseLabel.vue';
import { PaperClipIcon, XCircleIcon } from '@heroicons/vue/20/solid';

const baseFilePicker = ref<HTMLInputElement | null>(null);
const file = ref<File | null>();

const props = defineProps({
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
		type: [String, File, Array],
		default: '',
	},
	hint: {
		type: String,
		default: '',
	},
	required: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['update:modelValue']);

const openFilePicker = () => {
	console.log('rahh');
	baseFilePicker.value?.click();
};

const changeInput = (ev: Event) => {
	const target = ev.target as HTMLInputElement;
	if (ev.target instanceof HTMLInputElement) {
		file.value = target.files![0];
		console.log('file', file.value);
		emit('update:modelValue', target.files![0]);
	}
};

const name = toRef(props, 'name');

const { value, errorMessage, handleBlur, handleChange, meta } = useField(name, undefined, {
	initialValue: props.modelValue,
	validateOnValueUpdate: false,
});
</script>

<style scoped>
.file-item {
	max-width: 80%;
}
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
