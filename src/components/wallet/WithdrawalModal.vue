<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader title="Withdraw" @closed="$emit('closed')" />

			<div class="mt-8 flex flex-col px-4">
				<div class="text-2xl font-semibold text-primary">{{ formattedBalance }}</div>
				<div class="text-md mt-1">Available for withdrawal</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center px-8" v-if="step === 1">
				<BaseInput
					type="number"
					placeholder="Amount"
					hint="You must specify a minimum of N2000 for withdrawal"
					v-model="form.amount"
				/>
				<BaseDropdown
					label="Bank Account"
					:items="bankAccounts"
					item-key="name"
					item-value="id"
					type="text"
					placeholder="Select Bank Account"
					v-model="form.bankId"
				/>

				<BaseButton
					class="mt-5 bg-orange px-8 text-sm"
					:disabled="balance < 2000 && !form.bankId"
					:loading="isSendingOtp"
					@click="requestOTP"
				>
					Withdraw to Bank
				</BaseButton>
			</div>

			<div class="mt-5 flex w-full flex-col items-center px-8" v-else>
				<span class="mb-3 text-sm">
					An OTP has been sent to the email for {{ user?.email }}. If you don't see OTP in your primary email check your promotion
					or spam
				</span>

				<BaseInput type="number" placeholder="OTP" v-model="form.otp" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" :loading="isLoading" @click="proceed">Submit</BaseButton>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { useTransactionStore } from '@/stores/transactions';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { OTPOptions, type WithdrawalForm } from '@/types';
import toast from '@/helpers/toast';
import { useAuthStore } from '@/stores/auth';
import BaseDropdown from '../common/BaseDropdown.vue';

defineProps<{
	isOpen: boolean;
}>();

const isLoading = ref(false);
const isSendingOtp = ref(false);
const step = ref(1);

const authStore = useAuthStore();
const transactionStore = useTransactionStore();

const { user } = storeToRefs(authStore);
const { formattedBalance, balance, bankAccounts } = storeToRefs(transactionStore);

const form = ref<WithdrawalForm>({
	amount: '2000',
	bankId: '',
	otp: '',
});

const emit = defineEmits(['closed']);

const requestOTP = async () => {
	isSendingOtp.value = true;

	await transactionStore
		.requestOtp(OTPOptions.WITHDRAW)
		.then((res: any) => {
			if (res.status) {
				toast.success(res.message);
				step.value++;
			}
			isSendingOtp.value = false;
		})
		.catch(() => {
			isSendingOtp.value = false;
		});
};

const proceed = async () => {
	isLoading.value = true;

	await transactionStore
		.withdraw({ ...form.value, bankId: (form.value.bankId as any)?.id })
		.then((res: any) => {
			if (res.status) {
				toast.success(res.message);
				emit('closed');
			}
			isLoading.value = false;
		})
		.catch(() => {
			isLoading.value = false;
		});
};
</script>
