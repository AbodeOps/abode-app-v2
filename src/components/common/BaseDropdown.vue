<template>
	<BaseLabel :labelFor="id" :required="required" :text="label" v-if="label" />

	<Listbox>
		<div class="relative">
			<ListboxButton
				v-if="!multiple"
				:class="[!value ? 'text-gray-70' : 'text-black']"
				class="text-caption flex w-full rounded-lg border border-gray-50 bg-gray-10 px-3 py-3 text-left outline-none focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-70"
			>
				{{ formattedValue ? formattedValue : placeholder }}

				<CaretIcon v-if="!noCaret && !value" class="ml-auto -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
				<CloseIcon
					@click.stop="value = ''"
					v-if="!noCaret && value"
					class="ml-auto -mr-0.5 h-5 w-5 text-gray-400"
					aria-hidden="true"
				/>
			</ListboxButton>
			<ListboxButton
				v-else
				class="text-caption flex w-full rounded-lg border border-gray-50 bg-gray-10 px-3 py-3 text-left outline-none focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-70"
			>
				<div class="mr-2" v-for="(selectedValue, idx) in value" :key="idx">
					{{ selectedValue }}
				</div>
			</ListboxButton>
			<TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
				<ListboxOptions
					class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
				>
					<ListboxOption
						class="mt-0 mb-1 w-full cursor-pointer py-0"
						v-for="(option, ix) in options"
						:key="ix"
						:value="option"
						@click="handleSelection(option)"
						v-slot="{ active }"
					>
						<div
							class="mx-3 rounded-md py-3 px-5"
							:class="{
								'bg-gray-20 ': active,
								'bg-gray-30 ': selected(option),
								'text-gray-900': !active,
								'font-medium': selected(option),
								'font-normal': !selected(option),
							}"
						>
							{{ itemText ? option[itemText] : option }}
						</div>
					</ListboxOption>
				</ListboxOptions>
			</TransitionRoot>
		</div>
	</Listbox>
	<HelpText type="error" :text="errorMessage" v-if="errorMessage" class="mt-1" />
</template>

<script lang="ts" setup>
import { computed, toRef } from 'vue';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, TransitionRoot } from '@headlessui/vue';
import { CaretIcon } from '@/components/icons/AllIcons';
import HelpText from '@/components/common/HelpText.vue';
import { useField } from 'vee-validate';
import { watch } from 'vue';
import { CloseIcon } from '@/components/icons/AllIcons';
import BaseLabel from '@/components/common/BaseLabel.vue';

const props = defineProps<{
	options: any[];
	placeholder?: string;
	id?: string;
	itemText?: string;
	itemValue?: string;
	modelValue: any;
	name: string;
	type?: string;
	label?: string;
	noCaret?: boolean;
	required?: boolean;
	multiple?: boolean;
}>();

const selected = (option: any) => {
	if (props.multiple) {
		return value.value.includes(option);
	} else {
		return value.value === option;
	}
};

const formattedValue = computed(() => {
	return props.itemText ? value.value[props.itemText] : value.value;
});

const handleSelection = (val: any) => {
	if (!props.multiple) {
		value.value = val;
	} else {
		if (!(value.value as any[]).includes(val)) {
			(value.value as any[]).push(val);
		} else {
			(value.value as any[]).splice((value.value as any[]).indexOf(val), 1);
		}
	}
};

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
	// console.log(newValue);
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
