<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<Menu as="div" class="relative inline-block text-left">
		<div>
			<MenuButton
				v-if="!iconOnly"
				class="inline-flex w-full justify-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
			>
				{{ label }}
				<slot name="append-icon">
					<ChevronDownIcon v-if="!hideCaret" class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</slot>
			</MenuButton>
			<MenuButton
				v-else
				class="flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
			>
				<span class="sr-only">Open options</span>
				<slot name="icon">
					<EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
				</slot>
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
			<slot name="menu-items">
				<MenuItems
					class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
					<div class="py-1">
						<MenuItem v-slot="{ active }" v-for="(item, idx) in items" :key="idx">
							<div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
								{{ item }}
							</div>
						</MenuItem>
					</div>
				</MenuItems>
			</slot>
		</transition>
	</Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/vue/20/solid';

defineProps<{
	items: any[];
	label?: string;
	hideCaret?: boolean;
	iconOnly?: boolean;
}>();
</script>
