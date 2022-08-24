<template>
	<div class="relative inline-block w-full">
		<BaseLabel :labelFor="id" :required="required" :text="label" v-if="label" />

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
			class="absolute right-0 h-full rounded-r-lg px-2"
			v-if="type == 'password'"
			@click="showPassword = !showPassword"
		>
			<EyeOffIcon v-if="showPassword" class="h-5 w-5 text-gray-50" />
			<EyeIcon v-else class="h-5 w-5 text-gray-50" />
		</button>
		<!-- eslint-disable-next-line -->
		<button type="button" class="absolute right-0 h-full rounded-r-lg px-2" v-if="type == 'date'" @click="showPicker()">
			<CalendarIcon class="h-5 w-5 text-gray-50" />
		</button>
	</div>
	<HelpText type="error" :text="errorMessage" v-if="errorMessage" class="mt-1" />
</template>

<script setup lang="ts">
import { EyeIcon, EyeOffIcon } from '@heroicons/vue/outline';
import type { HTMLInputTypeAttribute, addressVariant } from '@/types.js';
import { computed, type PropType, ref, toRef, onMounted } from 'vue';
import { useField } from 'vee-validate';
import HelpText from '@/components/common/HelpText.vue';
import BaseLabel from './BaseLabel.vue';
import { CalendarIcon } from '@/components/icons/AllIcons';
import { getAddress } from '@/helpers/address';

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
	placeObjectCallback: {
		type: Function,
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

const { value, errorMessage } = useField(name, undefined, {
	initialValue: props.modelValue,
	validateOnValueUpdate: false,
});

const loadScript = (url: string, callback: () => void) => {
	const script = document.createElement('script') as HTMLScriptElement;
	script.type = 'text/javascript';
	script.onload = () => callback();

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
};

onMounted(() => {
	loadScript(`https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_API_KEY}&libraries=places`, () => {
		// @ts-ignore
		var autocomplete = new google.maps.places.Autocomplete(baseInput.value, {
			fields: ['address_components', 'geometry', 'name', 'place_id'],
			types: ['geocode'],
			componentRestrictions: { country: 'uk' },
		});

		const handlePlaceSelect = () => {
			const placeObject = autocomplete.getPlace();
			if (placeObject) {
				if (props.placeObjectCallback) {
					props.placeObjectCallback(placeObject);
				}
				const addressString = getAddress(placeObject);
				emit('update:modelValue', addressString);
				value.value = addressString;
			}
		};

		autocomplete.setFields(['address_components', 'formatted_address']);
		autocomplete.addListener('place_changed', () => handlePlaceSelect());
	});
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
</style>
