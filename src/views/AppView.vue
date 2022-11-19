<template>
	<div>
		<AppLayout />
	</div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layouts/AppLayout.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(async () => {
	await authStore.fetchProfile();
});
</script>
