<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<BaseModalHeader :title="step === 1? 'Add Bank': 'One More Step'" @closed="$emit('closed')" />

			<div class="mt-5 flex w-full flex-col items-center px-8" v-if="step === 1">
				<BaseInput type="text" placeholder="Select a Bank" />
				<BaseInput type="number" placeholder="Account Number" v-model="form.accountNumber" />
				<BaseInput type="text" placeholder="Account Name" v-model="form.accountName" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" :loading="isSendingOtp" @click="proceed">Add Bank
				</BaseButton>
			</div>

			<div class="mt-5 flex w-full flex-col items-center px-8" v-else>
				<span class="text-sm mb-3">An OTP has been sent to the email for {{ user?.email }}</span>

				<BaseInput type="number" placeholder="OTP" v-model="form.otp" />

				<BaseButton class="mt-5 bg-orange px-8 text-sm" :loading="isLoading" @click="handleSubmit">Submit
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
import { ref } from 'vue';
import { OTPOptions, type AddBankAccountForm } from '@/types';
import { useTransactionStore } from '@/stores/transactions';
import toast from '@/helpers/toast';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

defineProps<{
	isOpen: boolean;
}>();

const step = ref(1);
const isSendingOtp = ref(false);
const isLoading = ref(false);

const authStore = useAuthStore();
const transactionStore = useTransactionStore();

const { user } = storeToRefs(authStore);

const form = ref<AddBankAccountForm>({
	accountName: '',
	accountNumber: '',
	otp: '',
	bankCode: '',
	bank: null
});

const emit = defineEmits(['closed']);

const proceed = async () => {
	console.log(form.value);
	step.value += 1;
	isSendingOtp.value = true;

	await transactionStore.requestOtp(OTPOptions.ADD_BANK_ACCOUNT).then((res) => {
		if (res.status) {
			toast.success(res.message);

		}
		isSendingOtp.value = false;

	}).catch(() => {
		isSendingOtp.value = false;

	});
};

const handleSubmit = async () => {
	isLoading.value = false;
	await transactionStore.addBank(form.value).then((res) => {
		if (res.status) {
			toast.success(res.message);
			emit('closed');
		}
		isLoading.value = false;

	}).catch(() => {
		isLoading.value = false;
	});
};
</script>
