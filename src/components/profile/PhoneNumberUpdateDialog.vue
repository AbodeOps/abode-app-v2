<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader title="Phone Number" @closed="emit('closed')" />

			<div class="mt-5 flex w-full flex-col items-center px-8">
				<BaseInput type="text" placeholder="Phone Number" label="Phone Number" v-model="form.phoneNumber" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" :loading="isLoading" @click="proceed">Update</BaseButton>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import toast from '@/helpers/toast';
import { useAuthStore } from '@/stores/auth';

defineProps<{
	isOpen: boolean;
}>();

const isLoading = ref(false);

const authStore = useAuthStore();

const { user } = storeToRefs(authStore);

const form = ref({
	phoneNumber: user.value?.client.phoneNumber,
});

const emit = defineEmits(['closed']);

const proceed = async () => {
	isLoading.value = true;

	await authStore
		.editProfile({ phone_number: form.value.phoneNumber })
		.then((res: any) => {
			if (res.status) {
				toast.success(res.message);
				emit('closed');
			}
			isLoading.value = false;
		})
		.catch(() => {
			isLoading.value = false;
		});
};
</script>
