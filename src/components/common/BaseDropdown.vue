<!-- <template>
	<Combobox as="div" v-model="selectedValue" v-slot="{ open }">
		<ComboboxLabel class="block text-sm font-medium text-gray-700">
			<ComboboxButton class="flex items-center">
				{{ label }}
				<slot name="append-icon"></slot>
			</ComboboxButton>
		</ComboboxLabel>
		<div class="relative mt-1" v-show="open">
			<ComboboxInput
				v-if="canSearch"
				class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
				@change="query = $event.target.value"
				:display-value="handleDisplay"
			/>
			<ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
				<ChevronUpDownIcon v-if="!hideCaret" class="h-5 w-5 text-gray-400" aria-hidden="true" />
			</ComboboxButton>

			<ComboboxOptions
				v-if="items.length > 0"
				class="absolute z-10 mt-1 max-h-60 w-full min-w-[500px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
			>
				<ComboboxOption v-for="(item, idx) in filteredValues" :key="idx" :value="item" as="template" v-slot="{ active, selected }">
					<li
						:class="[
							'relative cursor-default select-none py-2 pl-3 pr-9',
							active ? 'bg-indigo-600 text-white' : 'text-gray-900',
						]"
					>
						<span :class="['block w-auto', selected && 'font-semibold']">
							{{ itemKey ? item[itemKey] : item }}
						</span>

						<span
							v-if="selected"
							:class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']"
						>
							<CheckIcon class="h-5 w-5" aria-hidden="true" />
						</span>
					</li>
				</ComboboxOption>
			</ComboboxOptions>
		</div>
	</Combobox>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxLabel, ComboboxOption, ComboboxOptions } from '@headlessui/vue';

const props = defineProps<{
	items: any[];
	label?: string;
	itemKey?: string;
	hideCaret?: boolean;
	iconOnly?: boolean;
	canSearch?: boolean;
	shortenOnMobile?: boolean;
}>();

const query = ref('');
const selectedPerson = ref(null);
const selectedValue = ref('');

const filteredValues = computed(() =>
	query.value === ''
		? props.items
		: props.items.filter((item) => {
				return item.name.toLowerCase().includes(query.value.toLowerCase());
		  })
);

const handleDisplay = (item: any) => (props.itemKey ? item[props.itemKey] : item);
</script> -->

<template>
	<Menu as="div" class="relative my-0 mb-3 inline-block w-full border-0 p-0 text-left">
		<div>
			<MenuButton
				class="justify-left block inline-flex w-full rounded-t-xl rounded-b-none border-b border-gray-300 bg-gray-25 px-4 py-4 px-5 pt-6 pb-2 text-xs outline-none focus-within:border-indigo-600 focus:border-indigo-600 focus:ring-0 sm:text-sm"
			>
				{{ (itemKey ? selectedItem[itemKey] : selectedItem) || label }}
				<ChevronDownIcon class="-mr-1 ml-auto h-5 w-5" aria-hidden="true" v-if="!hideCaret" />
			</MenuButton>
		</div>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<MenuItems
				class="absolute right-0 z-10 mt-2 max-h-48 w-full origin-top-right overflow-y-scroll rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			>
				<div class="py-1">
					<MenuItem v-for="(item, idx) in items" :key="idx" @click="selectedItem = item">
						<li :class="['relative cursor-default select-none list-none py-2 pl-3 pr-9', 'text-gray-900']">
							<span :class="['block w-auto', selected(item) && 'font-semibold']">
								{{ itemKey ? item[itemKey] : item }}
							</span>

							<span v-if="selected(item)" :class="['absolute inset-y-0 right-0 flex items-center pr-4', 'text-indigo-600']">
								<CheckIcon class="h-5 w-5" aria-hidden="true" />
							</span>
						</li>
					</MenuItem>
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon, CheckIcon } from '@heroicons/vue/20/solid';
import { ref, watch } from 'vue';

const props = withDefaults(
	defineProps<{
		items: any[];
		label?: string;
		itemKey?: string;
		itemValue?: string;
		hideCaret?: boolean;
		iconOnly?: boolean;
		canSearch?: boolean;
		shortenOnMobile?: boolean;
		returnObject?: boolean;
		modelValue: any;
	}>(),
	{
		returnObject: true,
	}
);

const selectedItem = ref(
	props.itemValue ? props.items.find((item) => item[props.itemValue as string] === props.modelValue) || '' : props.modelValue
);

const selected = (item: any) => {
	return props.returnObject
		? selectedItem.value[props.itemValue as string] == item[props.itemValue as string]
		: selectedItem.value == item;
};

const emit = defineEmits(['update:modelValue']);

watch(
	() => selectedItem.value,
	(newV, oldV) => {
		if (newV !== oldV) emit('update:modelValue', selectedItem.value);
	}
);
</script>
