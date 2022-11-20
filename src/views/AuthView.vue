<template>
	<router-view></router-view>
	<!-- <AuthLayout /> -->
</template>

<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import { ROUTES } from '@/router/routes';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(() => {
	if (route.meta.mustBeLoggedOut && localStorage.getItem('token')) {
		router.push({ name: ROUTES.USER_DASHBOARD });
	}
});
</script>
