<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<header>
		<Disclosure as="nav" class="border-b bg-white" v-slot="{ open }">
			<div class="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
				<div class="relative flex h-16 items-center justify-between">
					<!-- <ChevronLeftIcon class="w-6 h-6 cursor-pointer md:hidden" @click="router.back()" v-if="route.name !== ROUTES.AUTH_LOGIN"/> -->
					<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div class="flex flex-shrink-0 items-center">
							<RouterLink :to="{ name: ROUTES.HOME }">
								<LogoWithText class="h-7 text-black" />
							</RouterLink>
						</div>
					</div>
					<div
						class="absolute inset-y-0 right-0 hidden items-center space-x-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:flex"
					>
						<RouterLink :to="{ name: ROUTES.AUTH_LOGIN }">
							<OutlineButton>Sign In</OutlineButton>
						</RouterLink>
						<a :href="startPageUrl">
							<BaseButton>Create an Account</BaseButton>
						</a>
					</div>
				</div>
			</div>
		</Disclosure>
	</header>
</template>

<script setup lang="ts">
import { Disclosure } from '@headlessui/vue';
import LogoWithText from '@/components/logos/LogoWithText.vue';
import BaseButton from '../common/BaseButton.vue';
import OutlineButton from '../common/OutlineButton.vue';
import { ROUTES } from '@/router/routes';
import { startPageUrl } from '@/config/app';
// import {ChevronLeftIcon} from '../icons/AllIcons';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>
