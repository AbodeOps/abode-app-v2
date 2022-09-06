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
				<BaseInput type="text" placeholder="Email or Username" />

				<BaseButton class="mt-5 w-full bg-orange" @click="step = 2">Submit</BaseButton>
			</div>
			<div v-else>
				<span class="text-sm">A reset password link has been sent to you email ogunkolagideon@gmail.com</span>
				<BaseButton class="mt-5 w-full bg-orange" @click="goToLogin">Go Back to Login page</BaseButton>
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

const step = ref(1);
const router = useRouter();

const goToLogin = () => {
	router.push({ name: ROUTES.AUTH_LOGIN });
};
</script>
