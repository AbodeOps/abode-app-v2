<template>
	<!-- <div class="flex"> -->
	<!-- <LitepieDatepicker class="m-0" :shortcuts="false" as-single use-range v-model="dateValue" :formatter="formatter"></LitepieDatepicker> -->
	<!-- </div> -->
	<BaseInput v-bind="$attrs" />
</template>

<script lang="ts" setup>
import BaseInput from '@/components/common/BaseInput.vue';
// import { ref } from 'vue';
// import LitepieDatepicker from 'litepie-datepicker';

// const handle = (val) => {
// 	console.log(val);
// };
// const dateValue = ref([]);

// const formatter = ref({
// 	date: 'DD MMM YYYY',
// 	month: 'MMM',
// });
</script>
