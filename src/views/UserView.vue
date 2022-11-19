<template>
	<div>
		<AppLayout isCompany />
		<KnowMoreModal :is-open="isKnowMoreOpen" @closed="isKnowMoreOpen = false" @completed="isKnowMoreOpen = false" />
	</div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layouts/AppLayout.vue';
import { useAuthStore } from '@/stores/auth';
import { onBeforeMount, onMounted, ref } from 'vue';
import KnowMoreModal from '@/components/dashboard/KnowMoreModal.vue';

const authStore = useAuthStore();
const isKnowMoreOpen = ref(false);

onBeforeMount(async () => {
	await authStore.fetchProfile().then((res: any) => {
		if (res.status) {
			if (!res.data.client.used) isKnowMoreOpen.value = true;
		}
	});
});
</script>
