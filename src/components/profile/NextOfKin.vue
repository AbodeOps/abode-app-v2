<template>
	<div class="w-full md:w-9/12">
		<div class="mt-10 rounded-lg border border-gray-40 p-6 md:p-8">
			<div class="mb-5 text-2xl">Next Of Kin</div>

			<BaseFormTabItem label="Next Of Kin Name" value="Jeffrey Itepu" />
			<BaseFormTabItem label="Next Of Kin Email" value="jeff@gmail.com" />
			<BaseFormTabItem label="Next Of Kin Address" value="Ikeja Lagos" />
			<BaseFormTabItem label="Next Of Kin Phone Number" value="+2347089324817" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseFormTabItem from '@/components/common/BaseFormTabItem.vue';
</script>
