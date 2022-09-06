<template>
	<nav class="fixed bottom-0 flex w-full items-center justify-around space-x-12 border-t border-gray-30 bg-white py-3">
		<RouterLink
			v-for="(nav, index) in navigation"
			:key="index"
			:to="{ name: nav.routeName }"
			class="flex flex-col items-center justify-center"
			:class="[isCurrentRoute(nav.routeName) ? 'text-green' : 'text-gray-90', 'flex-shrink-0 ']"
		>
			<component :is="nav.icon" aria-hidden="true" class="h-6 w-6" />
			<div class="flex-shrink-0 flex-nowrap text-center">{{ nav.name }}</div>
		</RouterLink>
	</nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/app';

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

const appStore = useAppStore();

const navigation = appStore.navigation;

const route = useRoute();
const currentRoute = computed(() => {
	return route.name;
});
const isCurrentRoute = (routeName: string) => {
	return currentRoute.value === routeName;
};
</script>
