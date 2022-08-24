<template>
	{{ relativeTimeFromDates(date) }}
</template>

<script setup lang="ts">
import { relativeTimeFromDates } from '@/helpers/functions';
import type { PropType } from 'vue';

defineProps({
	date: {
		type: Date as PropType<Date>,
		required: true,
	},
});
</script>
