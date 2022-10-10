<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div v-if="!isBankTransferModalOpen" class="z-50 w-[600px] rounded-lg bg-white pb-5">
			<BaseModalHeader title="Payment Method" @closed="emit('closed')" />

			<div class="mt-8 flex flex-col px-4">
				<div class="text-sm text-black">Please select a method</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center">
				<div class="w-8/12">
					<PaymentMethodItem
						:selected="selectedMethod === paymentMethod.key"
						@click="paymentMethod.disabled ? null : (selectedMethod = paymentMethod.key)"
						:item="paymentMethod"
						v-for="(paymentMethod, ix) in paymentMethods"
						:key="ix"
					/>
				</div>

				<BaseButton :disabled="!selectedMethod" class="mt-5 bg-orange px-8 text-sm" @click="proceed">Continue</BaseButton>
			</div>
		</div>
		<BankTransferModal v-if="isBankTransferModalOpen" @go-back="isBankTransferModalOpen = false" :isLoading="isLoading" @completed="submit" @click="$emit('closed')" />
	</AnimatedModal>
</template>

<script lang="ts" setup>
import { ref, shallowRef, watch } from 'vue';
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import { BankIcon, DebitCardIcon, DashboardWalletIcon } from '@/components/icons/AllIcons';
import PaymentMethodItem from '@/components/wallet/PaymentMethodItem.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import { PaymentOption, type PaymentMethod, type TopUpForm } from '@/types';
import BankTransferModal from "./BankTransferCard.vue";
import { useTransactionStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';

defineProps<{
	isOpen: boolean;
	isLoading: boolean;
}>();

const transactionStore = useTransactionStore();
const { formattedBalance } = storeToRefs(transactionStore)

const paymentMethods = ref<PaymentMethod[]>([
	{
		key: PaymentOption.WALLET,
		label: 'Wallet',
		disabled: false,
		description: `Pay from your wallet balance <br> Available Balance ${formattedBalance.value}`,
		icon: shallowRef(DashboardWalletIcon),
	},
	{
		key: PaymentOption.BANK_TRANSFER,
		disabled: false,
		label: 'Bank Transfer',
		description: 'Transfer to any of our bank accounts',
		icon: shallowRef(BankIcon),
	},
	{
		key: PaymentOption.CARD,
		label: 'Debit Card',
		disabled: true,
		description: 'Make payment with your visa or mastercard card.',
		icon: shallowRef(DebitCardIcon),
	},
]);

const selectedMethod = ref<string>();
const isBankTransferModalOpen = ref(false);

const emit = defineEmits(['proceed', 'closed']);

const proceed = () => {
	if (selectedMethod.value === PaymentOption.BANK_TRANSFER) {
		isBankTransferModalOpen.value = true;
	} else if (selectedMethod.value === PaymentOption.WALLET) {
		emit('proceed', {method: selectedMethod.value, data: {}});
	}
}

const submit = async (form: TopUpForm) => {
	emit('proceed', {method: selectedMethod.value ,data: form});
}
</script>
