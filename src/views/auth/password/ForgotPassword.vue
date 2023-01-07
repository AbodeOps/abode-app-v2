<template>
	<AuthLayout>
		<template #title>
			<div>
				<div class="text-3xl text-white">Forget Password</div>
				<div class="mt-3 mb-10 text-lg text-white">Let's get you back on track</div>
				<BaseLink textColor="text-white" :route="ROUTES.AUTH_LOGIN">Login Instead</BaseLink>
			</div>
		</template>
		<template #form>
			<div v-if="step === 1">
				<BaseInput type="text" placeholder="Email or Username" v-model="form.loginId" />

				<BaseButton class="mt-5 w-full bg-orange" @click="handleSubmit" :loading="isSendingOtp">Submit</BaseButton>
			</div>
			<div v-else>
				<span class="text-sm">
					An OTP has been sent to the email for {{ form.loginId }}. If you don't see OTP in your primary email check your
					promotion or spam
				</span>

				<BaseInput type="text" placeholder="OTP" v-model="form.otp" />
				<BaseInput type="text" placeholder="New Password" v-model="form.password" />
				<BaseInput type="text" placeholder="Confirm Password" v-model="form.confirmPassword" />

				<BaseButton class="mt-5 w-full bg-orange" @click="handleReset" :loading="isLoading">Submit</BaseButton>
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
	try {
		hasSentOtp.value = false;

		isSendingOtp.value = true;

		const res = await AuthService.forgotPassword(form.value.loginId);

		console.log(res, 'handled');

		if (res.status) {
			hasSentOtp.value = true;
			step.value++;
			toast.success(res.message);
		}
		isSendingOtp.value = false;
	} catch (error: any) {
		toast.error('Something went wrong! Try again.');
	}
};

const handleReset = async () => {
	try {
		isLoading.value = true;
		hasSentOtp.value = false;

		isSendingOtp.value = true;

		const res = await AuthService.resetPassword({
			otp: form.value.otp,
			password: form.value.password,
			email: form.value.loginId,
		});

		if (res.status) {
			toast.success(res.message);
			goToLogin();
		}
		isLoading.value = false;
	} catch (error: any) {
		toast.error('Something went wrong! Try again.');
	}
};

const goToLogin = () => {
	router.push({ name: ROUTES.AUTH_LOGIN });
};
</script>
