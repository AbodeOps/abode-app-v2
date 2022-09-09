<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<BaseModalHeader title="Add Bank" @closed="$emit('closed')" />

			<div class="mt-5 flex w-full flex-col items-center px-8">
				<BaseInput type="text" placeholder="Select a Bank" />
				<BaseInput type="text" placeholder="Account Number" />
				<BaseInput type="text" placeholder="Account Name" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" @click="proceed">Add Bank</BaseButton>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import BaseInput from '@/components/common/BaseInput.vue';

defineProps<{
	isOpen: boolean;
}>();

const proceed = () => {};
</script>
