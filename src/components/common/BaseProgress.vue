<template>
	<div class="relative h-3 w-full overflow-hidden bg-gray-200" :class="[{ 'rounded-full': rounded }, { indeterminate: indeterminate }]">
		<div
			class="progressbar h-full"
			:class="[`bg-${color}`, { 'absolute top-0': indeterminate }, { 'rounded-full': rounded }]"
			role="progressbar"
			:style="{ width: `${percentage}%` }"
			:aria-valuenow="percentage"
			aria-valuemin="0"
			aria-valuemax="100"
		>
			<span class="flex h-full items-center">
				<slot></slot>
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	color: {
		type: String,
		default: 'primary',
	},
	percentage: {
		type: Number,
		default: 0,
	},
	rounded: {
		type: Boolean,
		default: true,
	},
	indeterminate: Boolean,
});
</script>

<style scoped>
@keyframes progress-indeterminate {
	0% {
		width: 30%;
		left: -40%;
	}
	60% {
		left: 100%;
		width: 100%;
	}
	to {
		left: 100%;
		width: 0;
	}
}
.progressbar {
	transition: width 0.25s ease;
}
.indeterminate .progressbar {
	animation: progress-indeterminate 1.4s ease infinite;
}
</style>
