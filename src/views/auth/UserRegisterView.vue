<template>
	<AuthLayout>
		<template #title>
			<div class="text-center md:text-left">
				<div class="text-3xl text-white">Sign Up</div>
				<div class="mt-3 mb-10 text-lg text-white">Let's get you started</div>
				<BaseLink class="hidden md:flex" textColor="text-white" :route="ROUTES.AUTH_LOGIN">Login Instead</BaseLink>
			</div>
		</template>
		<template #form>
			<div class="mb-3 rounded-md bg-green-300 px-4 py-2 text-sm text-black" v-if="resolvedReferrer.length > 0">
				{{ resolvedReferrer }} referred you.
			</div>
			<BaseInput type="text" placeholder="First Name" label="First Name" v-model="form.firstName" />
			<BaseInput type="text" placeholder="Last Name" label="Last Name" v-model="form.lastName" />
			<BaseInput type="text" placeholder="Email Address" label="Email Address" v-model="form.email" />
			<BaseInput type="text" placeholder="Username" label="Username" v-model="form.username" />
			<BaseInput type="number" placeholder="Phone Number" label="Phone Number" v-model="form.phoneNumber" />
			<BaseInput type="text" placeholder="Referrer" label="Referrer" v-model="form.referrer" />
			<BaseInput :type="isPasswordVisible ? 'ext' : 'password'" placeholder="Password" label="Password" v-model="form.password" />
			<BaseInput
				:type="isPasswordVisible ? 'ext' : 'password'"
				placeholder="Confirm Password"
				label="Confirm Password"
				v-model="form.confirmPassword"
			/>
			<div class="flex justify-between">
				<BaseCheckbox label="Show Password" v-model="isPasswordVisible" />

				<BaseLink textColor="text-primary" :route="ROUTES.AUTH_LOGIN">Login Instead</BaseLink>
			</div>
			<BaseCheckbox class="mt-4" v-model="form.agreed">
				I hereby agree to the
				<BaseLink @click="isTermsOpen = true">terms of use</BaseLink>
			</BaseCheckbox>

			<BaseButton :loading="isLoading" :disabled="isDisabled" class="mt-5 w-full bg-orange" @click="signup">Sign Up</BaseButton>
			<TermsOfUse
				:isOpen="isTermsOpen"
				@completed="
					isTermsOpen = false;
					form.agreed = true;
				"
				@closed="isTermsOpen = false"
			/>
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
import { useAuthStore } from '@/stores/auth';
import { computed, onMounted, ref } from 'vue';
import type { SignUpForm } from '@/types';
import toast from '@/helpers/toast';
import { useRoute, useRouter } from 'vue-router';
import TermsOfUse from '@/components/common/TermsOfUse.vue';

const authStore = useAuthStore();

const isPasswordVisible = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const isTermsOpen = ref<boolean>(false);

const form = ref<SignUpForm>({
	firstName: '',
	lastName: '',
	email: '',
	username: '',
	phoneNumber: '',
	confirmPassword: '',
	password: '',
	referrer: '',
	agreed: false,
});

const route = useRoute();
const router = useRouter();

const resolvedReferrer = ref('');

const isDisabled = computed(() => {
	const { firstName, lastName, email, phoneNumber, password, confirmPassword, agreed } = form.value;
	if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword || password !== confirmPassword || !agreed)
		return true;
	return false;
});

const signup = async () => {
	isLoading.value = true;
	await authStore
		.signup(form.value)
		.then((res) => {
			if (res.status) {
				toast.success(res.message);

				router.push({ name: ROUTES.AUTH_LOGIN });
			}
			isLoading.value = false;
		})
		.catch((errors: any) => {
			isLoading.value = false;
		});
};

const resolveReferrer = async () => {
	await authStore.resolveReferrer({ referrer: form.value.referrer }).then((res) => {
		if (res.status) {
			toast.success(res.message);
			resolvedReferrer.value = res.data;
		}
	});
};

onMounted(() => {
	const { ref } = route.query;

	if (ref) {
		form.value.referrer = ref as string;
		resolveReferrer();
	}
});
</script>
