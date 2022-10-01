<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader title="Top up your wallet" @closed="$emit('closed')" />

			<div class="mt-8 flex flex-col px-4">
				<div class="text-sm text-black">Please select a method</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center">
				<div class="w-11/12 md:w-8/12">
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
	</AnimatedModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import { BankIcon, DebitCardIcon } from '@/components/icons/AllIcons';
import PaymentMethodItem from '@/components/wallet/PaymentMethodItem.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';

defineProps<{
	isOpen: boolean;
}>();

const paymentMethods = ref([
	{ key: 'bank-transfer', label: 'Bank Transfer', description: 'Transfer to any of our bank accounts', icon: BankIcon },
	{ key: 'debit-card', label: 'Debit Card', description: 'Make payment with your visa or mastercard card.', icon: DebitCardIcon },
]);

const selectedMethod = ref();

const proceed = () => {};
</script>
