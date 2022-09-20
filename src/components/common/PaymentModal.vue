<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div v-if="!isBankTransferModalOpen" class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<BaseModalHeader title="Payment Method" @closed="$emit('closed')" />

			<div class="mt-8 flex flex-col px-4">
				<div class="text-sm text-black">Please select a method</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center">
				<div class="w-8/12">
					<PaymentMethodItem
						:selected="selectedMethod === paymentMethod.key"
						@click="selectedMethod = paymentMethod.key"
						:item="paymentMethod"
						v-for="(paymentMethod, ix) in paymentMethods"
						:key="ix"
					/>
				</div>

				<BaseButton :disabled="!selectedMethod" class="mt-5 bg-orange px-8 text-sm" @click="proceed">Continue</BaseButton>
			</div>
		</div>
		<BankTransferModal v-if="isBankTransferModalOpen" @go-back="isBankTransferModalOpen = false" @click="$emit('closed')" />
	</AnimatedModal>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue';
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import { BankIcon, DebitCardIcon, DashboardWalletIcon } from '@/components/icons/AllIcons';
import PaymentMethodItem from '@/components/wallet/PaymentMethodItem.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import type { PaymentMethod } from '@/types';
import BankTransferModal from './BankTransferModal.vue';

defineProps<{
	isOpen: boolean;
}>();

const paymentMethods = ref<PaymentMethod[]>([
	{
		key: 'wallet',
		label: 'Wallet',
		description: 'Pay from your wallet balance <br> Available Balance N4,000,000',
		icon: shallowRef(DashboardWalletIcon),
	},
	{ key: 'bank-transfer', label: 'Bank Transfer', description: 'Transfer to any of our bank accounts', icon: shallowRef(BankIcon) },
	{
		key: 'debit-card',
		label: 'Debit Card',
		description: 'Make payment with your visa or mastercard card.',
		icon: shallowRef(DebitCardIcon),
	},
]);

const selectedMethod = ref<string>();
const isBankTransferModalOpen = ref(false);

const emit = defineEmits(['proceed', 'closed']);

const proceed = () => {
	if (selectedMethod.value === 'bank-transfer') {
		isBankTransferModalOpen.value = true;
	} else {
		emit('proceed', selectedMethod.value);
	}
};
</script>
