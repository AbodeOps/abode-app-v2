<template>
	<div>
		<AppSidebar :sidebarOpen="sidebarOpen" @sidebar-toggle="toggleSidebar($event)" :isWorker="isWorker" :isCompany="isCompany" />

		<div class="flex h-screen flex-1 flex-col md:pl-64">
			<div class="sticky top-0 z-10 flex flex-shrink-0 bg-background">
				<!-- <button
					type="button"
					class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green md:hidden"
					@click="toggleSidebar(true)"
				>
					<span class="sr-only">Open sidebar</span>
					<MenuAlt2Icon class="w-6 h-6" aria-hidden="true" />
				</button> -->

				<Navbar class="w-full" :isWorker="isWorker" :isCompany="isCompany" />
			</div>

			<main
				class="shadow-[0_-4px_-4px_36px_rgba(210, 229, 241, 0.3)] overflow-y-hidden rounded rounded-tl-3xl bg-white p-12 md:flex-1"
			>
				<RouterView v-slot="{ Component }">
					<transition name="fastfade" mode="out-in">
						<component :is="Component" />
					</transition>
				</RouterView>
			</main>

			<MobileBottomBar class="block md:hidden" :isWorker="isWorker" :isCompany="isCompany" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/layouts/Navbar.vue';
import AppSidebar from './AppSidebar.vue';
import MobileBottomBar from './MobileBottomBar.vue';

const props = defineProps({
	isWorker: {
		type: Boolean,
		default: false,
	},
	isCompany: {
		type: Boolean,
		default: false,
	},
});

const route = useRoute();

watch(
	() => route.path,
	() => {
		sidebarOpen.value = false;
	}
);

const sidebarOpen = ref(false);

const toggleSidebar = (value: boolean) => {
	sidebarOpen.value = value;
};
</script>
