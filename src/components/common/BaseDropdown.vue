<template>
    <Combobox as="div" v-model="selectedValue" v-slot="{ open }">
        <ComboboxLabel class="block text-sm font-medium text-gray-700">
            <ComboboxButton class="flex items-center"> {{label}}   
                <slot name="append-icon"></slot>
            </ComboboxButton>
        </ComboboxLabel>
        <div class="relative mt-1" v-show="open">
            <ComboboxInput v-if="canSearch"
                class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                @change="query = $event.target.value" :display-value="handleDisplay" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon v-if="!hideCaret" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </ComboboxButton>

            <ComboboxOptions v-if="items.length > 0"
                class="absolute z-10 mt-1 max-h-60 min-w-[500px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="(item, idx) in filteredValues" :key="idx" :value="item" as="template"
                    v-slot="{ active, selected }">
                    <li
                        :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                        <span :class="['block w-auto', selected && 'font-semibold']">
                            {{ itemKey? item[itemKey] : item }}
                        </span>

                        <span v-if="selected"
                            :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                    </li>
                </ComboboxOption>
            </ComboboxOptions>
        </div>
    </Combobox>
</template>
  
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/vue'

const props = defineProps < {
    items: any[];
    label?: string;
    itemKey?: string;
    hideCaret?: boolean;
    iconOnly?: boolean;
    canSearch?: boolean;
    shortenOnMobile?: boolean;
} > ();

const query = ref('')
const selectedPerson = ref(null)
const selectedValue = ref('')

const filteredValues = computed(() =>
    query.value === ''
        ? props.items
        : props.items.filter((item) => {
            return item.name.toLowerCase().includes(query.value.toLowerCase())
        })
)

const handleDisplay = (item: any) => props.itemKey? item[props.itemKey]: item;
</script>