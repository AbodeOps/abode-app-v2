<template>
	<header>
		<Disclosure as="nav" class="bg-background" v-slot="{ open }">
			<div class="mx-auto w-full px-4 py-3 sm:px-6 lg:px-8">
				<div class="relative flex h-16 w-full items-center">
					<div class="flex w-full flex-1 items-center md:items-stretch md:justify-start">
						<div class="flex w-full items-center justify-between">
							<!-- <ChevronLeftIcon class="w-8 h-8 cursor-pointer md:hidden" @click="router.back()"/> -->
							<Logo class="h-12 w-12 cursor-pointer md:hidden" @click="goToLink" />
							<h4 class="text-header6 md:text-md w-full text-center font-light uppercase tracking-[0.2em]">
								{{ pageTitle }}
							</h4>

							<div class="ml-auto flex items-center md:ml-0">
								<div class="flex">
									<!-- <button
										type="button"
										class="relative text-gray-90 hover:text-gray-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-80"
									>
										<span class="sr-only">View notifications</span>
										<NotificationsIcon class="h-8 w-8" aria-hidden="true" />
										<div class="text-caption absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red text-xs text-white">
											2
										</div>
									</button> -->

									<Menu as="div" class="relative ml-3">
										<div>
											<MenuButton
												v-if="user && user.client"
												class="ml-6 hidden items-center rounded-sm text-sm focus:outline-none md:flex"
											>
												<span class="sr-only">Open user menu</span>

												<div
													class="text-body flex h-8 w-8 items-center justify-center rounded-full bg-green font-medium text-white"
												>
													{{ user.client.firstName[0] }} {{ user.client.lastName[0] }}
												</div>
											</MenuButton>
										</div>
										<transition
											enter-active-class="transition duration-100 ease-out"
											enter-from-class="transform scale-95 opacity-0"
											enter-to-class="transform scale-100 opacity-100"
											leave-active-class="transition duration-75 ease-in"
											leave-from-class="transform scale-100 opacity-100"
											leave-to-class="transform scale-95 opacity-0"
										>
											<MenuItems
												class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
											>
												<MenuItem v-slot="{ active }" @click="goToProfile">
													<button
														href="#"
														:class="[
															active ? 'bg-gray-100' : '',
															'flex w-full items-center px-4 py-2 text-sm text-gray-700',
														]"
													>
														<ProfileIcon class="mr-3 h-6 w-6" aria-hidden="true" />
														Profile
													</button>
												</MenuItem>
												<hr />
												<MenuItem v-slot="{ active }" @click="logout">
													<button
														href="#"
														:class="[
															active ? 'bg-gray-100' : '',
															'flex w-full items-center px-4 py-2 text-sm text-gray-700',
														]"
													>
														<LogoutIcon class="mr-3 h-6 w-6" aria-hidden="true" />
														Sign out
													</button>
												</MenuItem>
											</MenuItems>
										</transition>
									</Menu>
								</div>
								<div class="flex">
									<Menu as="div" class="relative" v-if="user && user.client">
										<div>
											<MenuButton class="flex items-center rounded-sm text-sm focus:outline-none md:hidden">
												<span class="sr-only">Open user menu</span>

												<div
													class="text-body flex h-11 w-11 items-center justify-center rounded-full bg-green font-medium text-white"
												>
													{{ user.client.firstName[0] }} {{ user.client.lastName[0] }}
												</div>
											</MenuButton>
										</div>
										<transition
											enter-active-class="transition duration-100 ease-out"
											enter-from-class="transform scale-95 opacity-0"
											enter-to-class="transform scale-100 opacity-100"
											leave-active-class="transition duration-75 ease-in"
											leave-from-class="transform scale-100 opacity-100"
											leave-to-class="transform scale-95 opacity-0"
										>
											<MenuItems
												class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
											>
												<MenuItem v-slot="{ active }" @click="goToProfile">
													<button
														href="#"
														:class="[
															active ? 'bg-gray-100' : '',
															'flex w-full items-center px-4 py-2 text-sm text-gray-700',
														]"
													>
														<ProfileIcon class="mr-3 h-6 w-6" aria-hidden="true" />
														Profile
													</button>
												</MenuItem>
												<hr />
												<MenuItem v-slot="{ active }" @click="logout">
													<button
														href="#"
														:class="[
															active ? 'bg-gray-100' : '',
															'flex w-full items-center px-4 py-2 text-sm text-gray-700',
														]"
													>
														<LogoutIcon class="mr-3 h-6 w-6" aria-hidden="true" />
														Sign out
													</button>
												</MenuItem>
											</MenuItems>
										</transition>
									</Menu>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Disclosure>
	</header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ROUTES } from '@/router/routes';
import { useAuthStore } from '@/stores/auth';
import Logo from '@/components/logos/Logo.vue';
import { Disclosure, Menu, MenuItem, MenuItems, MenuButton } from '@headlessui/vue';
import { useRoute, useRouter } from 'vue-router';
import { LogoutIcon, NotificationsIcon } from '@/components/icons/AllIcons';
// import NotificationIcon from '../icons/NotificationIcon.vue';
import ProfileIcon from '../icons/ProfileIcon.vue';
import type { User } from '@/types';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const user = computed<User | null>(() => authStore.currentUser);

const goToLink = () => {
	router.push('/');
};

const goToProfile = () => {
	router.push({ name: ROUTES.USER_PROFILE });
};

const pageTitle = computed(() => {
	return route.meta.title;
});

const gotoRoute = (routeName: string) => {
	router.push({ name: routeName });
};

const logout = () => {
	localStorage.clear();
	router.push({ name: ROUTES.AUTH_LOGIN });
};
</script>
