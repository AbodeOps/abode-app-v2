<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader title="Top up your wallet" @closed="emit('closed')" />

			<div class="mt-8 flex flex-col px-4">
				<div class="text-sm text-black">Please select a method</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center">
				<div class="w-11/12 md:w-8/12">
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
	</AnimatedModal>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue';
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import { BankIcon, DebitCardIcon } from '@/components/icons/AllIcons';
import PaymentMethodItem from '@/components/wallet/PaymentMethodItem.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import { PaymentOption } from '@/types';

defineProps<{
	isOpen: boolean;
}>();

const paymentMethods = ref([
	{ key: PaymentOption.BANK_TRANSFER, label: 'Bank Transfer', description: 'Transfer to any of our bank accounts', icon: shallowRef(BankIcon) },
	{
		key: PaymentOption.CARD,
		label: 'Debit Card',
		description: 'Make payment with your visa or mastercard card.',
		disabled: true,
		icon: shallowRef(DebitCardIcon),
	},
]);

const selectedMethod = ref();
const emit = defineEmits(['completed', 'closed'])

const proceed = () => {
	emit('completed',selectedMethod.value);
};
</script>
