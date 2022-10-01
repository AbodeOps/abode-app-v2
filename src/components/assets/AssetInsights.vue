<template>
	<div class="insight-card relative">
		<div class="text-md p-6 text-black md:p-8">Asset Growth History</div>
		<div class="-mt-12 h-full w-full p-4">
			<apexchart width="100%" height="90%" :options="options" :series="series"></apexchart>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabs = ref([
	{
		label: 'Networth',
		key: 'networth',
	},
	{
		label: 'Subscription',
		key: 'subscription',
	},
]);

const activeTab = ref(tabs.value[0].key);

const series = [
	{
		name: 'Sales',
		data: [4, 3, 10, 9],
		//  29,19,22 , 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
	},
];
var options = {
	series: [
		{
			name: 'Sales',
			data: [4, 3, 10, 9],
			//  29,19,22 , 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
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
		categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000'],
		labels: {
			show: true,
			showDuplicates: false,
			format: 'MMM',
			// formatter: function (value: any, timestamp: any, opts: any) {
			// 	return opts.dateFormatter(new Date(timestamp), 'MMM');
			// },
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
	height: 300px;
	width: 100%;
}

:deep() .apexcharts-text tspan {
	text-transform: uppercase;
}
</style>
