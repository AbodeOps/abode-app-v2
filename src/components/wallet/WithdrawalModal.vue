<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<BaseModalHeader title="Withdraw" @closed="$emit('closed')" />

			<div class="mt-8 flex flex-col px-4">
				<div class="text-2xl font-semibold text-primary">N40,000,000</div>
				<div class="text-md mt-1">Available for withdrawal</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center px-8">
				<BaseInput type="text" placeholder="Input Amount" />
				<BaseInput type="text" placeholder="Select a Bank" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" @click="proceed">Withdraw to Bank</BaseButton>
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
