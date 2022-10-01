<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<div v-if="isSubscriptionFormOpen">
				<BaseModalHeader title="Subscribe to an asset" @closed="$emit('closed')" />
				<div class="mt-8 grid grid-cols-2 gap-4 px-8 md:grid-cols-3">
					<div class="text-left">
						<div class="text-xl font-semibold text-primary">{{ asset.available_units }}</div>
						<div class="mt-1 text-sm font-light text-gray-80">Available Unit(s)</div>
					</div>
					<div class="flex justify-end md:justify-start">
						<div class="text-left">
							<div class="text-xl font-semibold text-primary">{{ formatMoney(asset.unit_price) }}</div>
							<div class="mt-1 text-sm font-light text-gray-80">Price/{{ asset.unit_measurement }}</div>
						</div>
					</div>
					<div class="col-span-2 flex justify-center md:col-span-1">
						<div class="text-left">
							<div class="text-xl font-semibold text-primary">{{ formattedBalance }}</div>
							<div class="mt-1 text-sm font-light text-gray-80">Wallet Balance</div>
						</div>
					</div>
				</div>

				<div class="mt-5 flex w-full flex-col items-center px-8">
					<BaseInput type="number" placeholder="Number of Units" v-model="form.units" />
					<BaseInput type="text" disabled placeholder="Amount" :value="totalAmount" />

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
import { computed, ref } from 'vue';
import SubscriptionConfirmationModal from './SubscriptionConfirmationModal.vue';
import type { Asset } from '@/types';
import { useTransactionStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';
import { formatMoney } from '@/utils/helpers';

const props = defineProps<{
	isOpen: boolean;
	asset: Asset;
}>();

const form = ref({
	units: '1',
});

const totalAmount = computed(() => Number(form.value.units) * props.asset.unit_price);

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

const transactionStore = useTransactionStore();

const { formattedBalance } = storeToRefs(transactionStore);
</script>
