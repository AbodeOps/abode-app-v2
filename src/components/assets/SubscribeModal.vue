<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<div v-if="isSubscriptionFormOpen">
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
			<PaymentModal
				:is-open="isPaymentMethodModalOpen"
				@closed="
					isPaymentMethodModalOpen = false;
					isSubscriptionFormOpen = true;
				"
				@proceed="onSelectPayment"
			/>
			<SubscriptionConfirmationModal
				:is-open="isWalletConfirmationOpen"
				@closed="
					isWalletConfirmationOpen = false;
					$emit('closed');
				"
				@proceed="onSelectPayment"
				:item="{ name: 'Lagos Apartment' }"
				totalAmount="N400,000"
				:numberOfUnits="5"
			/>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import PaymentModal from '@/components/common/PaymentModal.vue';
import { ref } from 'vue';
import SubscriptionConfirmationModal from './SubscriptionConfirmationModal.vue';

defineProps<{
	isOpen: boolean;
}>();

const isSubscriptionFormOpen = ref(true);
const isWalletConfirmationOpen = ref(false);
const isPaymentMethodModalOpen = ref(false);

const proceed = () => {
	isSubscriptionFormOpen.value = false;
	isPaymentMethodModalOpen.value = true;
};

const onSelectPayment = (method: string) => {
	if (method === 'wallet') {
		isPaymentMethodModalOpen.value = false;
		isWalletConfirmationOpen.value = true;
	}
};
</script>
