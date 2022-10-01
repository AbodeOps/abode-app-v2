<template>
	<AuthLayout>
		<template #title>
			<div class="text-center md:text-left">
				<div class="text-3xl text-white">Login</div>
				<div class="mt-3 mb-10 text-lg text-white">Jump right back in</div>
				<BaseLink class="hidden md:flex" textColor="text-white" :route="ROUTES.AUTH_USER_REGISTER">Sign Up Instead</BaseLink>
			</div>
		</template>
		<template #form>
			<BaseInput type="text" placeholder="Email or Username" v-model="form.loginId" />
			<BaseInput :type="isPasswordVisible ? 'text' : 'password'" placeholder="Password" v-model="form.password" />
			<div class="flex justify-between">
				<BaseCheckbox label="Show Password" v-model="isPasswordVisible" />

				<BaseLink textColor="text-primary" :route="ROUTES.AUTH_USER_REGISTER">Sign Up Instead</BaseLink>
			</div>
			<BaseButton :loading="isLoading" class="mt-5 w-full bg-orange" @click="login">Login</BaseButton>
			<div class="mt-5 flex justify-center">
				<BaseLink textColor="text-primary" :route="ROUTES.AUTH_PASSWORD_FORGOT">Forgot Password</BaseLink>
			</div>
		</template>
	</AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseCheckbox from '@/components/common/BaseCheckbox.vue';
import BaseLink from '@/components/common/BaseLink.vue';
import { ROUTES } from '@/router/routes';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import type { LoginForm } from '@/types';
import { useAuthStore } from '@/stores/auth';
import toast from '@/helpers/toast';

const router = useRouter();
const authStore = useAuthStore();

const isPasswordVisible = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const form = ref<LoginForm>({
	loginId: '',
	password: '',
});

const login = async () => {
	isLoading.value = true;
	await authStore
		.login(form.value)
		.then((res) => {
			if (res.status) {
				toast.success(res.message);

				router.push({ name: ROUTES.USER_DASHBOARD });
			}
			isLoading.value = false;
		})
		.catch(() => {
			isLoading.value = false;
		});
};
</script>
