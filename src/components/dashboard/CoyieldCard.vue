<template>
	<Pattern1Card bgColor="#FFFFFF" patternColor="#F5F8F8">
		<div class="flex h-full w-full flex-col items-center justify-center text-xl text-black">
			<div class="my-2 text-center text-2xl font-bold text-primary">
				Co-own a
				<br />
				High-yielding
				<br />
				Asset.
			</div>
			<BaseButton class="mt-1 w-full bg-orange text-sm" @click="goToAssets">View Assets</BaseButton>
		</div>
	</Pattern1Card>
</template>

<script setup lang="ts">
import Pattern1Card from '@/components/common/Pattern1Card.vue';
import { ROUTES } from '@/router/routes';
import { useRouter } from 'vue-router';
import BaseButton from '../common/BaseButton.vue';

const router = useRouter();

const goToAssets = () => {
	router.push({
		name: ROUTES.USER_ASSETS,
		query: {
			tab: 'available-offers',
		},
	});
};
</script>
