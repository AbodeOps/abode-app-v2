<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<BaseModalHeader title="Confirmation" @closed="$emit('closed')" />
			<div class="mt-8 flex items-center justify-center px-8">
				<span class="flex flex-wrap text-center">
					Are you sure you want to proceed to own
					<br />
					<span class="ml-1 flex text-primary">{{ numberOfUnits }} Unit{{ numberOfUnits > 1 ? 's' : '' }}</span>
					of {{ item.name }}.
					<br />
					<br />
					<br />
					The total amount payable is
					<span class="ml-1 flex text-primary">{{ totalAmount }}</span>
					and it will be deducted from your wallet balance
				</span>
			</div>

			<div class="mt-5 flex w-full items-center justify-center px-8">
				<BaseButton
					class="mt-5 mr-5 border border-black bg-transparent px-8 text-sm text-black"
					textColor="black"
					@click="$emit('closed')"
				>
					Cancel
				</BaseButton>
				<BaseButton class="mt-5 bg-orange px-8 text-sm" @click="proceed">Proceed</BaseButton>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import { ref } from 'vue';

defineProps<{
	isOpen: boolean;
	numberOfUnits: number;
	totalAmount: string;
	item: {
		name: string;
	};
}>();

const step = ref(1);

const proceed = () => {
	step.value += 1;
};
</script>
