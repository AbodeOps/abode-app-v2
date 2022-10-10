<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<BaseModalHeader title="Confirmation" @closed="$emit('closed')" />
			<div class="mt-8 flex flex-col items-center justify-center px-8 text-center">
				<p>Are you sure you want to proceed to own <br> <span class="text-primary mr-1">{{ numberOfUnits }} Unit{{ numberOfUnits > 1 ? 's' : '' }}</span>of {{ item.name }} </p> 

				<p class="mt-12"> The total amount payable is <span class="text-primary">{{ formatMoney(totalAmount) }}</span> and it will be deducted from your wallet balance  </p>
			</div>

			<div class="mt-5 flex w-full items-center justify-center px-8">
				<BaseButton
					class="mt-5 mr-5 border border-black bg-white px-8 text-sm text-black"
					textColor="black"
					bgColor="white"
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
import { formatMoney } from '@/utils/helpers';
import { ref } from 'vue';

defineProps<{
	isOpen: boolean;
	numberOfUnits: number;
	totalAmount: number;
	item: {
		name: string;
	};
}>();

const step = ref(1);

const emit = defineEmits(['closed', 'proceed'])
const proceed = () => {
	step.value += 1;
	emit('proceed');
};
</script>
