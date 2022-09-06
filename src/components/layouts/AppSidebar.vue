<template>
	<TransitionRoot as="template" :show="sidebarOpen">
		<Dialog as="div" class="relative z-40 md:hidden" @close="toggleSidebar(false)">
			<TransitionChild
				as="template"
				enter="transition-opacity ease-linear duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="transition-opacity ease-linear duration-300"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
			</TransitionChild>

			<div class="fixed inset-0 z-40 flex">
				<TransitionChild
					as="template"
					enter="transition ease-in-out duration-300 transform"
					enter-from="-translate-x-full"
					enter-to="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leave-from="translate-x-0"
					leave-to="-translate-x-full"
				>
					<DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
						<TransitionChild
							as="template"
							enter="ease-in-out duration-300"
							enter-from="opacity-0"
							enter-to="opacity-100"
							leave="ease-in-out duration-300"
							leave-from="opacity-100"
							leave-to="opacity-0"
						>
							<div class="absolute top-0 right-0 -mr-12 pt-2">
								<button
									type="button"
									class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
									@click="toggleSidebar(false)"
								>
									<span class="sr-only">Close sidebar</span>
									<XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
								</button>
							</div>
						</TransitionChild>
						<div class="flex flex-shrink-0 items-center px-4 pb-4">
							<LogoWithText class="mx-auto w-[70%]" />
						</div>

						<div class="mt-6 h-0 flex-1 overflow-y-auto">
							<nav class="space-y-1 px-2">
								<RouterLink
									v-for="item in navigation"
									:key="item.name"
									:to="{ name: item.routeName }"
									:class="[
										isCurrentRoute(item.routeName)
											? 'bg-green-15 text-black'
											: 'text-gray-90 hover:bg-green-10 hover:text-gray-90',
										'text-caption group flex items-center rounded-md px-2 py-2 text-base font-medium',
									]"
								>
									<component
										:is="item.icon"
										:class="[
											isCurrentRoute(item.routeName) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
											'mr-4 h-6 w-6 flex-shrink-0 text-gray-90',
										]"
										aria-hidden="true"
									/>
									{{ item.name }}
								</RouterLink>
							</nav>
						</div>
					</DialogPanel>
				</TransitionChild>
				<div class="w-14 flex-shrink-0" aria-hidden="true">
					<!-- Dummy element to force sidebar to shrink to fit close icon -->
				</div>
			</div>
		</Dialog>
	</TransitionRoot>

	<!-- Static sidebar for desktop -->
	<div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex flex-grow flex-col overflow-y-auto bg-background pt-5">
			<div class="flex flex-shrink-0 items-center px-4 py-4">
				<LogoWithText class="mx-auto w-[70%]" />
			</div>

			<div class="mt-6 flex flex-grow flex-col">
				<nav class="flex-1 space-y-2 px-4 pb-4">
					<RouterLink
						v-for="item in navigation"
						:key="item.name"
						:to="{ name: item.routeName }"
						:class="[
							isCurrentRoute(item.routeName)
								? 'bg-primary-30 font-bold text-black'
								: 'text-gray-70 hover:bg-green-10 hover:text-gray-90',
							'text-caption font-sm group flex items-center rounded-full px-4 py-3',
						]"
					>
						<component
							:isActive="isCurrentRoute(item.routeName)"
							:is="item.icon"
							:class="['mr-3 h-6 w-6 flex-shrink-0 text-gray-90']"
							aria-hidden="true"
						/>
						{{ item.name }}
					</RouterLink>
				</nav>

				<div class="space-y-6 px-4 pb-12">
					<button class="text-caption group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-90">
						<LogoutIcon class="mr-3 h-6 w-6 flex-shrink-0 text-gray-90" aria-hidden="true" />
						Logout
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { LogoutIcon } from '@/components/icons/AllIcons';
import LogoWithText from '@/components/logos/LogoWithText.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/app';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		default: false,
	},
	isWorker: {
		type: Boolean,
		default: false,
	},
	isCompany: {
		type: Boolean,
		default: false,
	},
});

const appStore = useAppStore();

const navigation = appStore.navigation;

const emit = defineEmits(['sidebar-toggle']);
const toggleSidebar = (value: boolean) => {
	emit('sidebar-toggle', value);
};

const route = useRoute();
const currentRoute = computed(() => {
	return route.name;
});
const isCurrentRoute = (routeName: string) => {
	return currentRoute.value === routeName;
};
</script>
