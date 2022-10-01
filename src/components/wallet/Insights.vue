<template>
	<div class="insight-card relative h-[300px] md:h-[450px]">
		<div class="relative p-4">
			<div class="flex w-full items-start">
				<span
					class="inline-flex cursor-pointer whitespace-pre rounded-full px-4 py-1 text-xs"
					:class="{ 'bg-primary text-white': activeTab === tab.key }"
					v-for="(tab, ix) in tabs"
					:key="ix"
					@click="activeTab = tab.key"
				>
					{{ tab.label }}
				</span>

				<div class="ml-auto flex items-center" v-if="activeTab === 'outflow'">
					<ArrowUpRightIcon class="mr-2 h-5 w-5 text-red" />
					<div>
						<div class="text-sm text-gray-50">Overall Outflow</div>
						<div class="text-sm">{{ formattedOutflow }}</div>
					</div>
				</div>
				<div class="ml-auto flex items-center" v-else>
					<ArrowDownLeftIcon class="mr-2 h-5 w-5 text-green" />
					<div>
						<div class="text-sm text-gray-50">Overall Inflow</div>
						<div class="text-sm">{{ formattedInflow }}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="-mt-10 h-full w-full p-4">
			<apexchart width="100%" height="90%" :options="options" :series="series"></apexchart>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useTransactionStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { ArrowUpRightIcon, ArrowDownLeftIcon } from '@/components/icons/AllIcons';

const tabs = ref([
	{
		label: 'Outflow',
		key: 'outflow',
	},
	{
		label: 'Inflow',
		key: 'inflow',
	},
]);

const activeTab = ref(tabs.value[0].key);

const transactionStore = useTransactionStore();

const { formattedOutflow, formattedInflow } = storeToRefs(transactionStore);

const series = [
	{
		name: 'Sales',
		data: [4, 3, 10, 9, 29, 19, 22],
		// , 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
	},
];
var options = {
	series: [
		{
			name: 'Sales',
			data: [4, 3, 10, 9, 29, 19, 22],
			// , 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
		},
	],

	chart: {
		height: '100%',
		width: '100%',
		type: 'line',
		toolbar: {
			show: false,
		},
	},
	grid: {
		// show: true, // you can either change hear to disable all grids
		xaxis: {
			lines: {
				show: true, //or just here to disable only x axis grids
			},
		},
		yaxis: {
			lines: {
				show: false, //or just here to disable only y axis
			},
		},
	},
	stroke: {
		width: 2,
		curve: 'smooth',
		colors: ['#000'],
	},
	xaxis: {
		type: 'datetime',
		show: false,
		axisBorder: {
			show: false,
		},
		categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000'],
		labels: {
			show: true,
			formatter: function (value: any, timestamp: any, opts: any) {
				return opts.dateFormatter(new Date(timestamp), 'MMM');
			},
		},
	},
	title: {},
	fill: {
		type: 'solid',
		colors: ['#000'],
	},
	yaxis: {
		show: false,
		min: -10,
		max: 40,
	},
};
</script>

<style scoped>
.insight-card {
	box-shadow: 0px 4px 16px rgba(30, 30, 30, 0.08);
	position: relative !important;
}
</style>
