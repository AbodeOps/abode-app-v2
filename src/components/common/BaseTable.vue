<template>
	<table class="min-w-full divide-y divide-gray-300">
		<thead class="bg-gray-15">
			<tr>
				<th
					scope="col"
					v-for="(header, ix) in headers"
					:key="ix"
					class="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-black sm:pl-6"
				>
					{{ header.label }}
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			<tr v-for="(item, idx) in items" :key="idx">
				<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" v-for="(header, ix) in headers" :key="ix">
					<slot :name="`cell(${header.key})`" v-bind="item">
						{{ getItem(item, header) }}
					</slot>
				</td>
			</tr>
		</tbody>
	</table>
	<BasePagination v-if="showPagination" />
</template>

<script lang="ts" setup>
import BasePagination from './BasePagination.vue';
defineProps<{
	headers: {
		label: string;
		key: string;
	}[];
	items: any[];
	showPagination?: boolean;
}>();

const getItem = (item: any, header: { label: string; key: string }) => item[header.key];
</script>
