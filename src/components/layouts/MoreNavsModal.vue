<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader title="More" @closed="$emit('closed')" />

			<div class="px-8 pb-8 pt-4">
				<RouterLink
					v-for="item in navigation.slice(3, navigation.length)"
					:key="item.name"
					:to="{ name: item.routeName }"
					:class="[
						isCurrentRoute(item.routeName)
							? 'bg-primary-30 font-bold text-black'
							: 'text-gray-70 hover:bg-green-10 hover:text-gray-90',
						'text-caption font-sm group flex items-center rounded-full px-4 py-3 mt-4',
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

				<div class="space-y-6 px-4 pt-12">
					<button @click="logout" class="text-caption group flex items-center rounded-md py-2 text-sm font-medium text-gray-90">
						<LogoutIcon class="mr-3 h-6 w-6 flex-shrink-0 text-gray-90" aria-hidden="true" />
						Logout
					</button>
				</div>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import { ROUTES } from '@/router/routes';
import { useAppStore } from '@/stores/app';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {LogoutIcon} from '../icons/AllIcons';

defineProps<{
	isOpen: boolean;
}>();

const appStore = useAppStore();


const navigation = appStore.navigation;

const route = useRoute();
const router = useRouter();
const currentRoute = computed(() => {
	return route.name;
});
const isCurrentRoute = (routeName: string) => {
	return currentRoute.value === routeName;
};

const logout = () => {
	localStorage.clear();
	router.push({ name: ROUTES.AUTH_LOGIN });
};
</script>
