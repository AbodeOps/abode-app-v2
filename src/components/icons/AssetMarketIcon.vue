<template>
	<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M4.01303 14.96V20.9466C4.01303 26.9333 6.41303 29.3333 12.3997 29.3333H19.5864C25.573 29.3333 27.973 26.9333 27.973 20.9466V14.96"
			:stroke="isActive ? '#0693A5' : '#818181'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M16 22.667C13.7734 22.667 12.6667 23.7737 12.6667 26.0003V29.3337H19.3334V26.0003C19.3334 23.7737 18.2267 22.667 16 22.667Z"
			:stroke="isActive ? '#0693A5' : '#818181'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15.9998 16.0003C18.4398 16.0003 20.2398 14.0137 19.9998 11.5737L19.1198 2.66699H12.8932L11.9998 11.5737C11.7598 14.0137 13.5598 16.0003 15.9998 16.0003Z"
			:stroke="isActive ? '#F26B34' : '#626262'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M24.4134 16.0003C27.1067 16.0003 29.0801 13.8137 28.8134 11.1337L28.4401 7.46699C27.9601 4.00033 26.6267 2.66699 23.1334 2.66699H19.0667L20.0001 12.0137C20.2267 14.2137 22.2134 16.0003 24.4134 16.0003Z"
			:stroke="isActive ? '#F26B34' : '#626262'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M7.51969 16.0003C9.71969 16.0003 11.7064 14.2137 11.9197 12.0137L12.213 9.06699L12.853 2.66699H8.78636C5.29302 2.66699 3.95969 4.00033 3.47969 7.46699L3.11969 11.1337C2.85302 13.8137 4.82636 16.0003 7.51969 16.0003Z"
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
