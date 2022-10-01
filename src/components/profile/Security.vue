<template>
	<div class="w-full md:w-9/12">
		<div class="mt-10 rounded-lg border border-gray-40 p-6 md:p-8">
			<div class="mb-5 text-2xl">Security</div>

			<BaseFormTabItem label="Means of Identification" value="Jeffrey Itepu" />
			<BaseFormTabItem label="Transaction Pin" value="jeff@gmail.com" />
			<BaseFormTabItem label="Security Question" value="Ikeja Lagos" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseFormTabItem from '@/components/common/BaseFormTabItem.vue';
</script>
