<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader :title="step === 1 ? 'Add Bank' : 'One More Step'" @closed="$emit('closed')" />

			<div class="mt-5 flex w-full flex-col items-center px-8">
				<div class="w-full" v-if="!sentOtp">
					<BaseDropdown
						label="Bank Account"
						:items="banks"
						item-key="name"
						item-value="code"
						type="text"
						placeholder="Select Bank Account"
						v-model="form.bank"
					/>
					<BaseInput
						type="number"
						placeholder="Account Number"
						v-model="form.accountNumber"
						:hint="resolvedBankAccount ? resolvedBankAccount.account_name : ''"
					/>
				</div>
				<div class="w-full" v-else>
					<span class="mb-3 text-sm">
						An OTP has been sent to the email for {{ user?.email }}. If you don't see OTP in your primary email check your
						promotion or spam
					</span>

					<BaseInput type="number" placeholder="OTP" v-model="form.otp" />
				</div>

				<BaseButton
					class="mt-5 bg-orange px-8 text-sm"
					:loading="isResolving"
					@click="resolveBankAccount"
					v-if="!sentOtp && !form.accountName"
				>
					Resolve Bank Account
				</BaseButton>

				<BaseButton
					class="mt-5 bg-orange px-8 text-sm"
					:loading="isSendingOtp"
					@click="proceed"
					v-if="!sentOtp && form.accountName"
				>
					Add Bank
				</BaseButton>
				<BaseButton class="mt-5 bg-orange px-8 text-sm" :loading="isLoading" @click="handleSubmit" v-if="sentOtp">
					Submit
				</BaseButton>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { ref, watch } from 'vue';
import { OTPOptions, type AddBankAccountForm } from '@/types';
import { useTransactionStore } from '@/stores/transactions';
import toast from '@/helpers/toast';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { banks } from '@/utils/nigerianBanks';
import BaseDropdown from '../common/BaseDropdown.vue';

defineProps<{
	isOpen: boolean;
}>();

const step = ref(1);
const isSendingOtp = ref(false);
const sentOtp = ref(false);
const isLoading = ref(false);

const authStore = useAuthStore();
const transactionStore = useTransactionStore();

const { user } = storeToRefs(authStore);

const form = ref<AddBankAccountForm>({
	accountName: '',
	accountNumber: '',
	otp: '',
	bankCode: '',
	bank: '',
});

const emit = defineEmits(['closed', 'success']);

const isResolving = ref(false);
const resolvedBankAccount = ref<any>(null);

const resolveBankAccount = async () => {
	try {
		isResolving.value = true;

		const res = await transactionStore.resolveBankAccount({ ...form.value, bankCode: (form.value.bank as any).code });

		resolvedBankAccount.value = res.data;
		form.value.accountName = (resolvedBankAccount.value as any)?.account_name || '';
		toast.success(res.message);
	} finally {
		isResolving.value = false;
	}
};

const proceed = async () => {
	console.log(form.value);
	step.value += 1;
	isSendingOtp.value = true;

	await transactionStore
		.requestOtp(OTPOptions.ADD_BANK_ACCOUNT)
		.then((res) => {
			if (res.status) {
				toast.success(res.message);
				sentOtp.value = true;
			}
			isSendingOtp.value = false;
		})
		.catch(() => {
			isSendingOtp.value = false;
		});
};

const handleSubmit = async () => {
	isLoading.value = false;
	await transactionStore
		.addBank({ ...form.value, bankCode: (form.value.bank as any).code })
		.then((res) => {
			if (res.status) {
				toast.success(res.message);
				emit('success');
			}
			isLoading.value = false;
		})
		.catch(() => {
			isLoading.value = false;
		});
};
</script>
