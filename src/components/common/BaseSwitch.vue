<template>
	<SwitchGroup as="div" class="flex items-center">
		<slot name="prepend-label">
			<SwitchLabel as="span" class="mr-3" v-if="prependLabel">
				<span class="text-sm font-medium text-gray-900">{{ prependLabel }}</span>
			</SwitchLabel>
		</slot>
		<Switch
			v-model="modelValue"
			:class="[
				baseSwitchColor,
				focusSwitchColor,
				'relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
			]"
		>
			<span
				aria-hidden="true"
				:class="[
					modelValue ? 'translate-x-3' : 'translate-x-0',
					'pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
				]"
			/>
		</Switch>
		<slot name="append-label" v-if="appendLabel">
			<SwitchLabel as="span" class="ml-3">
				<span class="text-sm font-medium text-gray-900">{{ appendLabel }}</span>
			</SwitchLabel>
		</slot>
	</SwitchGroup>
</template>

<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import { computed } from 'vue';

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	prependLabel: {
		type: String,
		default: '',
	},
	appendLabel: {
		type: String,
		default: '',
	},
	switchColor: {
		type: String,
		default: 'indigo-600',
	},
});

const baseSwitchColor = computed(() => {
	if(props.modelValue) {
		return `bg-${props.switchColor}`;
	}
	return 'bg-gray-50'
} )
const focusSwitchColor = computed(() => {
	if(props.modelValue) {
		return `focus:ring-${props.switchColor}`;
	}
	return 'focus:ring-gray-50'
} )
// const baseSwitchFocusColor = computed(() => {
// 	if(props.modelValue) {
// 		return `focus${props.switchColor}`;
// 	}
// 	return 'bg-gray-50'
// } )
</script>
