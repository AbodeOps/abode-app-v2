<template>
	<div class="space-y-10 pt-4 md:p-6">
		<!-- wrapping this in a flex to make sure just the item inside triggers the click not the entire space-->
		<div class="ml-4 flex md:ml-0">
			<div class="flex cursor-pointer items-center" @click="router.back()">
				<BackButtonIcon class="h-5 w-5" />
				<div class="text-body ml-2 text-gray-60">Go back</div>
			</div>
		</div>
		<div class="rounded-lg bg-white px-4 py-6 text-center md:py-12 md:px-0">
			<div class="mx-auto text-center md:w-1/3">
				<form class="mx-auto w-full text-left text-gray-90">
					<HelpText type="error" :text="errorMessage" class="mt-2" />
					<div class="flex flex-col">
						<label for="current-password" class="text-caption">Current Password</label>
						<BaseInput
							required
							v-model="form.currentPassword"
							id="current-password"
							type="password"
							placeholder="Enter your current password"
						/>
					</div>
					<div class="mt-6 flex flex-col">
						<label for="new-password" class="text-caption">New Password</label>
						<BaseInput
							required
							v-model="form.newPassword"
							id="new-password"
							type="password"
							placeholder="Enter your new password"
						/>
					</div>

					<PasswordComplexity :password="form.newPassword" />

					<div class="mt-6 flex flex-col">
						<label for="confirm-new-password" class="text-caption">Re-enter New Password</label>
						<BaseInput
							required
							v-model="form.confirmNewPassword"
							id="confirm-new-password"
							type="password"
							placeholder="Enter your new password again"
						/>
					</div>

					<BaseButton :loading="loading" type="submit" id="base-change-password" class="mt-8 w-full" @click="handleSubmit">
						Save Password
					</BaseButton>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { BackButtonIcon } from '@/components/icons/AllIcons';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import HelpText from '@/components/common/HelpText.vue';
import PasswordComplexity from '@/components/auth/PasswordComplexity.vue';
import type { ChangePasswordForm } from '@/types.js';

const router = useRouter();

const form = ref<ChangePasswordForm>({
	currentPassword: '',
	newPassword: '',
	confirmNewPassword: '',
});

const loading = ref(false);

const errorMessage = ref('');

const emit = defineEmits(['submit']);

const handleSubmit = () => {
	emit('submit', form.value);
};
</script>
