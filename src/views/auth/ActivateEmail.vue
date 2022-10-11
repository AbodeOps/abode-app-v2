<template>
	<AuthLayout>
		<template #title>
			<div>
				<div class="text-3xl text-white">Verify Email</div>
				<div class="mt-3 mb-10 text-lg text-white">Let's get you on track</div>
			</div>
		</template>
		<template #form>
			<div v-if="step === 1">
				<BaseInput type="text" placeholder="Email or Username" v-model="form.loginId" />

				<BaseButton class="mt-5 w-full bg-orange" @click="handleSubmit" :loading="isSendingOtp">Submit</BaseButton>
			</div>
			<div v-else>
				<span class="text-sm">An OTP has been sent to the email for {{ form.loginId }}</span>

				<BaseInput type="text" placeholder="OTP" v-model="form.otp" />

				<BaseButton class="mt-5 w-full bg-orange" @click="handleVerify" :loading="isLoading">Submit</BaseButton>

			</div>
		</template>
	</AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseLink from '@/components/common/BaseLink.vue';
import { ROUTES } from '@/router/routes';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { AuthService } from '@/services';
import toast from '@/helpers/toast';

const step = ref(1);
const isLoading = ref(false);
const isSendingOtp = ref(false);
const hasSentOtp = ref(false);
const router = useRouter();

const authStore = useAuthStore();

const form = ref({
	loginId: '',
	otp: '',
	password: '',
	confirmPassword: '',
});

const handleSubmit = async () => {
	hasSentOtp.value = false;

	isSendingOtp.value = true;

	const res = await AuthService.resendEmailVerification(form.value.loginId);

	if (res.status) {
		hasSentOtp.value = true;
		step.value++;
		toast.success(res.message);
	}
	isSendingOtp.value = false;

};

const handleVerify = async () => {
	isLoading.value = true;
	hasSentOtp.value = false;

	isSendingOtp.value = true;

	const res = await AuthService.verifyEmail({
		otp: form.value.otp,
		email: form.value.loginId,
	});

	if (res.status) {
		toast.success(res.message);
		goToLogin();
	}
	isLoading.value = false;

};

const goToLogin = () => {
	router.push({ name: ROUTES.AUTH_LOGIN });
};
</script>
