<template>
	<AppLayout isCompany />
</template>

<script setup lang="ts">
import AppLayout from '@/components/layouts/AppLayout.vue';
import { useAuthStore } from '@/stores/auth';
import { onBeforeMount, onMounted } from 'vue';

const authStore = useAuthStore();

onBeforeMount(async () => {
	console.log('rahhhh');
	await authStore.fetchProfile();
});
</script>
