<template>
	<BaseLabel :labelFor="id" :required="required" :text="label" v-if="label" />

	<Combobox class="border-0 px-0 py-0">
		<div class="relative">
			<ComboboxButton as="div" v-if="!value || (multiple && value)">
				<ComboboxInput
					@focus=""
					:placeholder="placeholder"
					class="text-caption w-full rounded-lg border border-gray-50 bg-gray-10 py-3 outline-none focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-70"
					@change="query = $event.target.value"
				/>
				<ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
					<CaretIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
				</ComboboxButton>
			</ComboboxButton>
			<ComboboxButton as="div" v-if="value && !multiple">
				<ComboboxInput
					@focus=""
					:placeholder="placeholder"
					:displayValue="() => (itemText ? value[itemText] : value)"
					class="text-caption w-full rounded-lg border border-gray-50 bg-gray-10 py-3 outline-none focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-70"
					@change="query = $event.target.value"
				/>
				<ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
					<CaretIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
				</ComboboxButton>
			</ComboboxButton>
			<TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" @after-leave="query = ''">
				<ComboboxOptions
					class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
				>
					<div
						v-if="filteredOptions.length === 0 && query !== ''"
						class="relative cursor-default select-none py-2 px-4 text-gray-700"
					>
						Nothing found.
					</div>

					<ComboboxOption
						v-for="(option, ix) in filteredOptions"
						as="template"
						@click="handleSelection(option)"
						:key="ix"
						:value="option"
						v-slot="{ active }"
					>
						<li
							class="relative mx-3 mb-1 cursor-default cursor-pointer select-none rounded-md py-3 pl-4 pr-4 text-gray-90"
							:class="{
								'bg-gray-20': active,
								'bg-gray-30': selected(option),
								'text-gray-900': !active,
							}"
						>
							<span
								class="text-caption block truncate"
								:class="{ 'font-medium': selected(option), 'font-normal': !selected(option) }"
							>
								{{ itemText ? option[itemText] : option }}
							</span>
							<!-- <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-90">
								<CheckIcon class="h-5 w-5" aria-hidden="true" />
							</span> -->
						</li>
					</ComboboxOption>
				</ComboboxOptions>
			</TransitionRoot>
		</div>
	</Combobox>
	<HelpText type="error" :text="errorMessage" v-if="errorMessage" class="mt-1" />
	<div class="mt-3" v-if="multiple && value.length > 0">
		<div class="capitalise text-micro text-gray-90">Selected</div>
		<ul>
			<li class="mt-2 flex items-center justify-between" v-for="(selectedValue, idx) in value" :key="idx">
				<div class="flex items-center">
					<div class="mr-2 h-1 w-1 rounded-full bg-gray-70" />
					<div class="text-caption text-gray-70">
						{{ itemText ? selectedValue[itemText] : selectedValue }}
					</div>
				</div>
				<div class="text-micro flex cursor-pointer items-center text-red" @click.stop="removeSelection(selectedValue)">
					<CloseCircleIcon class="mr-1 h-3 w-3" aria-hidden="true" />
					Remove
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, toRef, watch } from 'vue';
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, TransitionRoot } from '@headlessui/vue';
import { useField } from 'vee-validate';
import HelpText from './HelpText.vue';
import { CloseCircleIcon, CaretIcon } from '@/components/icons/AllIcons';
import BaseLabel from '@/components/common/BaseLabel.vue';
import type { OptionItem } from '@/types';

const props = defineProps<{
	options: any[];
	placeholder?: string;
	id?: string;
	modelValue: any;
	name: string;
	label?: string;
	multiple?: boolean;
	required?: boolean;
	itemValue?: any;
	itemText?: string;
}>();

const { options } = props;

let query = ref('');

let filteredOptions = computed(() =>
	query.value === ''
		? options
		: options.filter((option) => {
				if (!props.itemText) {
					return option.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, ''));
				}
				return option[props.itemText].toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, ''));
		  })
);

const selected = (option: any) => {
	if (props.multiple) {
		return value.value.includes(option);
	} else {
		return value.value === option;
	}
};

const handleSelection = (val: any) => {
	if (!props.multiple) {
		value.value = val;
	} else {
		if (!(value.value as any[]).includes(val)) {
			(value.value as any[]).push(val);
		}
		// else {
		// 	(value.value as any[]).splice((value.value as any[]).indexOf(val), 1);
		// }
	}
};

const removeSelection = (val: OptionItem) => {
	(value.value as any[]).splice((value.value as any[]).indexOf(val), 1);
};

const name = toRef(props, 'name');

const { value, errorMessage } = useField(name, undefined, {
	initialValue: props.modelValue,
});

const emit = defineEmits(['update:modelValue']);

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
