<template>
	<div>
		<AppSidebar :sidebarOpen="sidebarOpen" @sidebar-toggle="toggleSidebar($event)" />

		<div class="flex h-screen flex-1 flex-col md:pl-64">
			<div class="sticky top-0 z-10 flex flex-shrink-0 bg-background">
				<Navbar class="w-full" />
			</div>

			<main
				class="shadow-[0_-4px_-4px_36px_rgba(210, 229, 241, 0.3)] overflow-y-scroll rounded rounded-tl-3xl bg-white py-5 px-4 pb-32 md:mb-0 md:flex-1 md:px-12"
			>
				<RouterView v-slot="{ Component }">
					<transition name="fastfade" mode="out-in">
						<component :is="Component" />
					</transition>
				</RouterView>
			</main>

			<MobileBottomBar class="block md:hidden" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/layouts/Navbar.vue';
import AppSidebar from './AppSidebar.vue';
import MobileBottomBar from './MobileBottomBar.vue';

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
