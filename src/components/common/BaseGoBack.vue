<template>
	<div class="flex">
		<div class="mb-5 flex cursor-pointer items-center" @click="isNav ? router.back() : $emit('click')">
			<ArrowCircleLeftIcon class="h-4 w-4 text-gray-80" />
			<div class="ml-1 text-sm text-gray-80">Go Back</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ArrowCircleLeftIcon } from '@/components/icons/AllIcons';
import { useRouter } from 'vue-router';

defineProps({
	isNav: {
		type: Boolean,
		default: true,
	},
});

const router = useRouter();
</script>
