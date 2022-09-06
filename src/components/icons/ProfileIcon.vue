<template>
	<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M16.2133 14.4927C16.08 14.4793 15.92 14.4793 15.7733 14.4927C12.6 14.386 10.08 11.786 10.08 8.58602C10.08 5.31935 12.72 2.66602 16 2.66602C19.2667 2.66602 21.92 5.31935 21.92 8.58602C21.9067 11.786 19.3867 14.386 16.2133 14.4927Z"
			:stroke="isActive ? '#F26B34' : '#626262'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9.54668 19.414C6.32001 21.574 6.32001 25.094 9.54668 27.2407C13.2133 29.694 19.2267 29.694 22.8933 27.2407C26.12 25.0807 26.12 21.5607 22.8933 19.414C19.24 16.974 13.2267 16.974 9.54668 19.414Z"
			:stroke="isActive ? '#0693A5' : '#818181'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup lang="ts">
defineProps<{ isActive?: boolean }>();
</script>
