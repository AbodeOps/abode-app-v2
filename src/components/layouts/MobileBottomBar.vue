<template>
	<nav class="fixed bottom-0 flex w-full items-center justify-around space-x-2 border-t border-gray-30 bg-white py-3">
		<RouterLink
			v-for="(nav, index) in navigation.slice(0, 3)"
			:key="index"
			:to="{ name: nav.routeName }"
			class="flex flex-col items-center justify-center"
		>
			<component :isActive="isCurrentRoute(nav.routeName)" :is="nav.icon" aria-hidden="true" class="h-6 w-6" />
			<div
				class="flex-shrink-0 flex-nowrap text-center"
				:class="[
					isCurrentRoute(nav.routeName) ? ' font-bold text-black' : 'text-gray-70  hover:text-gray-90',
					'font-sm group flex items-center rounded-full px-4 py-3 text-sm',
				]"
			>
				{{ nav.name }}
			</div>
		</RouterLink>
		<div class="flex cursor-pointer flex-col items-center justify-center">
			<MoreVerticalIcon aria-hidden="true" class="h-6 w-6" @click="openMore" />
			<div
				class="flex-shrink-0 flex-nowrap text-center"
				:class="['text-gray-70  hover:text-gray-90', 'font-sm group flex items-center rounded-full px-4 py-3 text-sm']"
			>
				More
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { MoreVerticalIcon } from '@/components/icons/AllIcons';

const appStore = useAppStore();

const navigation = appStore.navigation;

const route = useRoute();
const currentRoute = computed(() => {
	return route.name;
});
const isCurrentRoute = (routeName: string) => {
	return currentRoute.value === routeName;
};

const emit = defineEmits(['openMore']);

const openMore = () => {
	console.log('cliciking oh');
	emit('openMore');
};
</script>
