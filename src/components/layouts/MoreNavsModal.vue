<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader title="More" @closed="$emit('closed')" />

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
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import { useAppStore } from '@/stores/app';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps<{
	isOpen: boolean;
}>();

const appStore = useAppStore();

const isOpen = ref(false);

const navigation = appStore.navigation;

const route = useRoute();
const currentRoute = computed(() => {
	return route.name;
});
const isCurrentRoute = (routeName: string) => {
	return currentRoute.value === routeName;
};
</script>
