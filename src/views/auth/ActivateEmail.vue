<template>
	<AuthLayout>
		<template #title>
			<div>
				<div class="text-3xl text-white">Verify Email</div>
				<div class="mt-3 mb-10 text-lg text-white">Let's get you on track</div>
			</div>
		</template>
		<template #form>
			<!-- <div v-if="step === 1">
				<BaseInput type="text" placeholder="Email or Username" v-model="form.loginId" />

				<BaseButton class="mt-5 w-full bg-orange" @click="handleSubmit" :loading="isSendingOtp">Submit</BaseButton>
			</div> -->
			<div>
				<span class="mb-5 text-sm">
					An OTP has been sent to your email
					<b>{{ form.email }}</b>
				</span>

				<BaseInput class="mt-5" type="text" placeholder="OTP" v-model="form.otp" />
				<div class="mt-5 flex w-full items-center pt-5">
					<BaseButton
						class="mr-5 w-full border border-black bg-white px-8 text-sm text-black"
						textColor="black"
						bgColor="white"
						@click="goToDashboard"
					>
						Skip for now
					</BaseButton>
					<BaseButton class="w-full bg-orange" @click="handleVerify" :loading="isLoading">Submit</BaseButton>
				</div>
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
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { AuthService } from '@/services';
import toast from '@/helpers/toast';

const step = ref(1);
const isLoading = ref(false);
const isSendingOtp = ref(false);
const hasSentOtp = ref(false);
const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();

const form = ref({
	loginId: '',
	email: '',
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
		goToDashboard();
	}
	isLoading.value = false;
};

const goToLogin = () => {
	router.push({ name: ROUTES.AUTH_LOGIN });
};

const goToDashboard = () => {
	router.replace({ name: ROUTES.USER_DASHBOARD });
};

onMounted(() => {
	const loginId = route.query.id;
	if (loginId) {
		form.value.email = loginId as string;
		form.value.loginId = loginId as string;
		handleSubmit();
	}
});
</script>
