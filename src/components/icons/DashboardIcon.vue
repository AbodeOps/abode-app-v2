<template>
	<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M22.6667 13.3337H25.3333C28 13.3337 29.3333 12.0003 29.3333 9.33366V6.66699C29.3333 4.00033 28 2.66699 25.3333 2.66699H22.6667C20 2.66699 18.6667 4.00033 18.6667 6.66699V9.33366C18.6667 12.0003 20 13.3337 22.6667 13.3337Z"
			:stroke="isActive ? '#F26B34' : '#818181'"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M6.66666 29.3337H9.33332C12 29.3337 13.3333 28.0003 13.3333 25.3337V22.667C13.3333 20.0003 12 18.667 9.33332 18.667H6.66666C3.99999 18.667 2.66666 20.0003 2.66666 22.667V25.3337C2.66666 28.0003 3.99999 29.3337 6.66666 29.3337Z"
			:stroke="isActive ? '#F26B34' : '#818181'"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M7.99999 13.3337C10.9455 13.3337 13.3333 10.9458 13.3333 8.00033C13.3333 5.05481 10.9455 2.66699 7.99999 2.66699C5.05447 2.66699 2.66666 5.05481 2.66666 8.00033C2.66666 10.9458 5.05447 13.3337 7.99999 13.3337Z"
			:stroke="isActive ? '#0693A5' : '#626262'"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M24 29.3337C26.9455 29.3337 29.3333 26.9458 29.3333 24.0003C29.3333 21.0548 26.9455 18.667 24 18.667C21.0545 18.667 18.6667 21.0548 18.6667 24.0003C18.6667 26.9458 21.0545 29.3337 24 29.3337Z"
			:stroke="isActive ? '#0693A5' : '#626262'"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup lang="ts">
defineProps<{ isActive?: boolean }>();
</script>
