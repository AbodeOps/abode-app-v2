<template>
	<div class="auth-banner flex h-full flex-1 flex-col justify-center bg-gray-800 p-10">
		<div class="flex w-full items-center">
			<div class="flex w-1/2 justify-center">
				<slot name="title" />
			</div>
			<div class="w-1/2">
				<div class="w-9/12 rounded-lg bg-white py-8">
					<div class="px-8">
						<LogoWithText class="mb-5 w-[15%]" />
					</div>
					<div class="max-h-[30em] min-h-[25em] overflow-y-scroll px-8">
						<slot name="form" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import LogoWithText from '../logos/LogoWithText.vue';
</script>

<style scoped>
.auth-banner {
	background-image: linear-gradient(0deg, rgba(28, 22, 25, 0.3), rgba(48, 38, 44, 0.3)), url('@/assets/images/login-banner.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
</style>
