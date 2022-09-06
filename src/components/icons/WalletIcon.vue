<template>
	<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3.33334 16.5467V10.4535C3.33334 8.86681 4.30668 7.45341 5.78668 6.89341L16.3733 2.89341C18.0267 2.26675 19.8 3.49345 19.8 5.26679V10.3334"
			:stroke="isActive ? '#F26B34' : '#626262'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M30.08 18.6265V21.3733C30.08 22.1066 29.4933 22.7066 28.7467 22.7332H26.1333C24.6933 22.7332 23.3733 21.6799 23.2533 20.2399C23.1733 19.3999 23.4933 18.6132 24.0533 18.0666C24.5467 17.5599 25.2267 17.2666 25.9733 17.2666H28.7467C29.4933 17.2933 30.08 17.8932 30.08 18.6265Z"
			:stroke="isActive ? '#0693A5' : '#818181'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9.33334 16H18.6667"
			:stroke="isActive ? '#0693A5' : '#626262'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M24.0533 18.0668C23.4933 18.6135 23.1733 19.4002 23.2533 20.2402C23.3733 21.6802 24.6933 22.7335 26.1333 22.7335H28.6667V24.3202C28.6667 27.0802 26.4133 29.3335 23.6533 29.3335H8.34668C5.58668 29.3335 3.33334 27.0802 3.33334 24.3202V15.3468C3.33334 12.5868 5.58668 10.3335 8.34668 10.3335H23.6533C26.4133 10.3335 28.6667 12.5868 28.6667 15.3468V17.2668H25.9733C25.2267 17.2668 24.5467 17.5601 24.0533 18.0668Z"
			:stroke="isActive ? '#F26B34' : '#818181'"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup lang="ts">
defineProps<{ isActive?: boolean }>();
</script>
