<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<BaseModalHeader title="Subscribe to an asset" @closed="$emit('closed')" />
			<div class="mt-8 flex items-center justify-between px-8">
				<div class="text-left">
					<div class="text-xl font-semibold text-primary">06</div>
					<div class="mt-1 text-sm font-light text-gray-80">Available Unit(s)</div>
				</div>
				<div class="text-left">
					<div class="text-xl font-semibold text-primary">N100,000</div>
					<div class="mt-1 text-sm font-light text-gray-80">Price/Unit</div>
				</div>
				<div class="text-left">
					<div class="text-xl font-semibold text-primary">N4,000,000</div>
					<div class="mt-1 text-sm font-light text-gray-80">Wallet Balance</div>
				</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center px-8">
				<BaseInput type="text" placeholder="Number of Units" />
				<BaseInput type="text" placeholder="Amount" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" @click="proceed">Proceed</BaseButton>
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
