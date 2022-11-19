<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<BankTransferCard :isLoading="isLoading" @completed="handleProceed" @goBack="emit('go-back')" @closed="emit('closed')" />
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from './AnimatedModal.vue';
import BankTransferCard from './BankTransferCard.vue';

defineProps<{
	isOpen: boolean;
	isLoading: boolean;
}>();

const emit = defineEmits(['completed', 'closed', 'go-back']);

const handleProceed = (form: any) => {
	emit('completed', form);
};
</script>
