<template>
	<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12.2133 14.4927C12.08 14.4793 11.92 14.4793 11.7733 14.4927C8.59999 14.386 6.07999 11.786 6.07999 8.58602C6.07999 5.31935 8.71999 2.66602 12 2.66602C15.2667 2.66602 17.92 5.31935 17.92 8.58602C17.9067 11.786 15.3867 14.386 12.2133 14.4927Z"
			:stroke="isActive ? '#0693A5' : '#818181'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M21.88 5.33398C24.4667 5.33398 26.5467 7.42732 26.5467 10.0007C26.5467 12.5207 24.5467 14.574 22.0533 14.6673C21.9467 14.654 21.8267 14.654 21.7067 14.6673"
			:stroke="isActive ? '#F26B34' : '#626262'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5.54668 19.414C2.32001 21.574 2.32001 25.094 5.54668 27.2407C9.21334 29.694 15.2267 29.694 18.8933 27.2407C22.12 25.0807 22.12 21.5607 18.8933 19.414C15.24 16.974 9.22668 16.974 5.54668 19.414Z"
			:stroke="isActive ? '#0693A5' : '#818181'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M24.4533 26.666C25.4133 26.466 26.32 26.0793 27.0667 25.506C29.1467 23.946 29.1467 21.3727 27.0667 19.8127C26.3333 19.2527 25.44 18.8793 24.4933 18.666"
			:stroke="isActive ? '#F26B34' : '#626262'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup lang="ts">
defineProps<{ isActive?: boolean }>();
</script>
