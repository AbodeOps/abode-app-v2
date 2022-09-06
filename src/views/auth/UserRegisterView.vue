<template>
	<AuthLayout>
		<template #title>
			<div>
				<div class="text-3xl text-white">Sign Up</div>
				<div class="mt-3 mb-10 text-lg text-white">Let's get you started</div>
				<BaseLink textColor="text-white" :route="ROUTES.AUTH_LOGIN">Login Instead</BaseLink>
			</div>
		</template>
		<template #form>
			<BaseInput type="text" placeholder="First Name" />
			<BaseInput type="text" placeholder="Last Name" />
			<BaseInput type="text" placeholder="Email Address" />
			<BaseInput type="text" placeholder="Phone Number" />
			<BaseInput type="text" placeholder="Password" />
			<BaseInput type="text" placeholder="Confirm Password" />
			<div class="flex justify-between">
				<BaseCheckbox label="Show Password" />

				<BaseLink textColor="text-primary" :route="ROUTES.AUTH_LOGIN">Login Instead</BaseLink>
			</div>
			<BaseButton class="mt-5 w-full bg-orange">Login</BaseButton>
		</template>
	</AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import BaseInput from '../../components/common/BaseInput.vue';
import BaseButton from '../../components/common/BaseButton.vue';
import BaseCheckbox from '../../components/common/BaseCheckbox.vue';
import BaseLink from '../../components/common/BaseLink.vue';
import { ROUTES } from '@/router/routes';
</script>
