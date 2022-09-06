<template>
	<AuthLayout>
		<template #title>
			<div>
				<div class="text-3xl text-white">Login</div>
				<div class="mt-3 mb-10 text-lg text-white">Jump right back in</div>
				<BaseLink textColor="text-white" :route="ROUTES.AUTH_USER_REGISTER">Sign Up Instead</BaseLink>
			</div>
		</template>
		<template #form>
			<BaseInput type="text" placeholder="Email or Username" />
			<BaseInput type="text" placeholder="Password" />
			<div class="flex justify-between">
				<BaseCheckbox label="Show Password" />

				<BaseLink textColor="text-primary" :route="ROUTES.AUTH_USER_REGISTER">Sign Up Instead</BaseLink>
			</div>
			<BaseButton class="mt-5 w-full bg-orange">Login</BaseButton>
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
</script>
