<template>
	<Pattern1Card @click="goToSubscription" class="cursor-pointer" bgColor="#DEF0F2" patternColor="#E3F1F3">
		<div class="flex h-full w-full flex-col items-start justify-center text-xl text-black">
			<DashboardSubscriptionIcon class="h-8 w-8" />
			<div class="my-5 text-3xl font-bold">32</div>
			<div class="text-md">Subscriptions</div>
		</div>
	</Pattern1Card>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { useRouter } from 'vue-router';
import { DashboardSubscriptionIcon } from '@/components/icons/AllIcons';
import { ROUTES } from '@/router/routes';

const router = useRouter();

const goToSubscription = () => {
	router.push({
		name: ROUTES.USER_ASSETS,
		query: {
			tab: 'subscriptions',
		},
	});
};
</script>
