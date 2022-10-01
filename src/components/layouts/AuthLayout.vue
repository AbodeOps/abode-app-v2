<template>
	<div class="auth-banner flex h-full flex-1 flex-col justify-center bg-gray-800 p-0 md:p-10">
		<div class="flex h-full w-full flex-col items-center md:flex-row">
			<div class="mt-32 flex w-full justify-center md:mt-0 md:w-1/2">
				<slot name="title" />
			</div>
			<div class="mt-auto w-full md:mt-0 md:w-1/2">
				<div class="w-full rounded-lg bg-white py-8 md:w-9/12">
					<div class="flex justify-center px-8 md:justify-start">
						<LogoWithText class="mb-5 w-[6rem] md:w-[6rem]" />
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
