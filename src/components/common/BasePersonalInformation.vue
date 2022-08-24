<template>
	<div class="h-full space-y-10 overflow-y-auto pt-4 pb-12 pl-4 pr-4 md:p-6">
		<!-- wrapping this in a glex to make sure just the item inside triggers the click not the entire space-->
		<div class="mt-2 flex" v-if="!isCompany">
			<div class="flex cursor-pointer items-center" @click="router.back()">
				<BackButtonIcon class="h-5 w-5" />
				<div class="text-body ml-2 text-gray-60">Go back</div>
			</div>
		</div>
		<div class="bg-white py-6 text-center md:rounded-lg md:py-12 md:px-0">
			<div class="mx-auto max-w-lg px-4 text-center">
				<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green text-white">{{ user?.initials }}</div>
				<Form
					class="mx-auto w-full text-left text-gray-90"
					@submit="onSubmit"
					:validation-schema="personalInformationFormSchema"
					@invalid-submit="onInvalidSubmit"
				>
					<div class="mt-6 flex flex-col" v-if="isCompany">
						<BaseInput
							label="Company Name"
							disabled
							name="companyName"
							v-model="form.company_name"
							id="companyName"
							type="text"
							placeholder="Enter your company name"
						/>
						<HelpText type="error" :text="errorMessages.companyNameErrorMessage" class="mt-2" />
					</div>
					<div class="mt-6 flex flex-col">
						<BaseInput
							label="First Name"
							disabled
							name="first_name"
							v-model="form.first_name"
							id="firstName"
							type="text"
							placeholder="Enter your first name"
						/>
						<HelpText type="error" :text="errorMessages.firstNameErrorMessage" class="mt-2" />
					</div>
					<div class="mt-6 flex flex-col">
						<BaseInput
							label="Last Name"
							disabled
							name="lastName"
							v-model="form.last_name"
							id="lastName"
							type="text"
							placeholder="Enter your last name"
						/>
						<HelpText type="error" :text="errorMessages.lastNameErrorMessage" class="mt-2" />
					</div>
					<div class="text-caption mt-2 text-gray-60">
						Send us an email at
						<a href="mailto:support@gigbridge.co.uk" target="_blank" class="mt-1 cursor-pointer text-green">
							support@gigbridge.co.uk
						</a>
						to change your name.
					</div>
					<div class="mt-6 flex flex-col">
						<div class="mb-1 flex items-center space-x-1 text-gray-90">
							<LockIcon class="h-3 w-3" />
							<label for="email" class="text-caption">Email Address</label>
						</div>
						<BaseInput
							disabled
							name="email"
							v-model="form.email"
							id="email"
							type="email"
							placeholder="Enter your email address"
						/>
						<HelpText type="error" :text="errorMessages.emailErrorMessage" class="mt-2" />
					</div>
					<!-- <div class="mt-6 flex flex-col">
						<BaseInput
							label="Home Address"
							disabled
							name="address"
							v-model="form.address"
							id="homeAddress"
							type="text"
							placeholder="Enter your home address"
						/>
						<HelpText type="error" :text="errorMessages.addressErrorMessage" class="mt-2" />
					</div> -->
					<div class="mt-6 flex flex-col">
						<BaseInput
							label="Phone Number"
							disabled
							name="phoneNumber"
							v-model="form.phone_number"
							id="phoneNumber"
							type="text"
							placeholder="Enter your phone number"
						/>
						<HelpText type="error" :text="errorMessages.phoneErrorMessage" class="mt-2" />
					</div>
					<!-- <div
						class="mt-8 flex cursor-pointer items-center justify-between rounded-md border border-green p-3.5 hover:bg-green-20"
						@click="handleChangePassword"
					>
						<div class="flex items-center space-x-4">
							<div class="flex items-center justify-center w-6 h-6 rounded-full bg-green-20 text-green">
								<LockIcon class="w-3 h-3" />
							</div>
							<div class="text-caption text-gray-80">Change Password</div>
						</div>
						<RightArrowIcon class="w-3 h-3" />
					</div> -->

					<!-- <BaseButton :loading="loading" type="submit" id="base-personal-information" class="w-full mt-8">Save</BaseButton> -->
				</Form>
				<div
					class="group mx-auto mt-12 inline-flex cursor-pointer items-center space-x-1 hover:text-red md:hidden"
					@click="logout"
					v-if="isCompany"
				>
					<LogoutIcon class="h-6 w-6" />
					<div class="text-body text-gray-80 group-hover:text-red">Sign out</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { BackButtonIcon, LockIcon, RightArrowIcon, LogoutIcon } from '@/components/icons/AllIcons';
import { ROUTES } from '@/router/routes.js';

import HelpText from '@/components/common/HelpText.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import BaseInput from '@/components/common/BaseInput.vue';
import type { PersonalInformationForm } from '@/types.js';
import { useForm, Form } from 'vee-validate';
import { personalInformationFormSchema } from '@/config/validations.js';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();

const authStore = useAuthStore();

const user = computed(() => authStore.currentUser);

const props = defineProps({
	// fetchProfile: {
	// 	type: Function,
	// 	default: () => {},
	// },
	// profile: {
	// 	type: Object as PropType<PersonalInformation>,
	// },
	changePasswordRoute: {
		type: String,
		default: '',
	},
	errorMessages: {
		type: Object,
		required: true,
	},
	isCompany: {
		type: Boolean,
		default: false,
	},
});

const { changePasswordRoute } = props;

const loading = ref(false);

const goToLink = (routeName: string) => {
	router.push({ name: routeName });
};
const form = ref<PersonalInformationForm>({
	first_name: '',
	last_name: '',
	email: '',
	phone_number: '',
	address: '',
	company_name: '',
});

const logout = () => {
	authStore.logout();
	router.push({ name: ROUTES.AUTH_LOGIN });
};

//would be easier to implement if we start getting the actual errors and hide them only when a particular field becomes dirty or is updated
// watch(() => form, (_) => {
// 	emit('clearErrors');
// }, {deep: true});

onMounted(() => {
	if (user.value) {
		form.value.email = user.value.email;
		form.value.address = user.value.home_address;
		form.value.first_name = user.value.first_name;
		form.value.last_name = user.value.last_name;
		form.value.phone_number = user.value.phone_number;
		form.value.company_name = user.value.company_name as string;
	}
});

const { handleSubmit } = useForm<Record<string, any>>({
	validationSchema: personalInformationFormSchema,
	initialValues: form.value,
});

const onInvalidSubmit = () => {
	// console.log('failleeddd', form.value);
};

const emit = defineEmits(['submit', 'clearErrors']);

const onSubmit = handleSubmit(() => {
	emit('submit', form.value);
}, onInvalidSubmit);

const handleChangePassword = () => {
	goToLink(changePasswordRoute);
};
</script>
