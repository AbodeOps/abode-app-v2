<template>
	<div class="flex flex-col flex-1 h-full">
		<div class="sticky top-0 z-10 flex flex-shrink-0 bg-white">
			<AuthNavbar class="w-full" />
		</div>

		<main class="flex-1 bg-white md:bg-transparent">
			<RouterView v-slot="{ Component }">
				<transition name="fastfade" mode="out-in">
					<component :is="Component" />
				</transition>
			</RouterView>
		</main>

		<footer class="bg-white">
			<div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div class="flex justify-center space-x-4 text-micro text-green md:order-2">
					<button @click="openIntercom()" class="hover:text-green-90">
						<span class="sr-only">Help & Support</span>
						Help & Support
					</button>
					<span class="text-gray-40">&bull;</span>
					<a :href="termsConditionUrl" target="_blank" class="hover:text-green-90">
						<span class="sr-only">Terms & Conditions</span>
						Terms & Conditions
					</a>
					<span class="text-gray-40">&bull;</span>
					<a :href="privacyPolicyUrl" target="_blank" class="hover:text-green-90">
						<span class="sr-only">Privacy Policy</span>
						Privacy Policy
					</a>
				</div>
				<div class="mt-8 md:order-1 md:mt-0">
					<p class="text-center text-gray-400 text-micro">&copy; 2022. GigBridge UK. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { helpSupportUrl, termsConditionUrl, privacyPolicyUrl } from '@/config/app';
import { openIntercom } from '@/helpers/functions';
import AuthNavbar from './AuthNavbar.vue';
</script>
