<template>
	<div class="w-full md:w-9/12" v-if="user">
		<div class="rounded-lg border border-gray-40 p-6 md:p-8">
			<div class="mb-5 text-2xl">Profile</div>

			<div
				class="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-4 border-black bg-gray-40 md:h-28 md:w-28"
			>
				<ProfileAddIcon class="h-10 w-10 text-black md:h-16 md:w-16" />
			</div>

			<BaseFormTabItem label="Name" :value="user.name" @opened="isNameDialogOpen = true" editable />
			<NameUpdateDialog
				:isOpen="isNameDialogOpen"
				@closed="
					isNameDialogOpen = false;
					fetchProfile();
				"
			/>
			<BaseFormTabItem label="Phone Number" :value="user.client.phoneNumber" @opened="isPhoneNumberDialogOpen = true" editable />
			<PhoneNumberUpdateDialog
				:isOpen="isPhoneNumberDialogOpen"
				@closed="
					isPhoneNumberDialogOpen = false;
					fetchProfile();
				"
			/>
			<BaseFormTabItem editable @opened="isUsernameDialogOpen = true" label="Username" :value="'@' + user.username" />
			<UsernameUpdateDialog
				:isOpen="isUsernameDialogOpen"
				@closed="
					isUsernameDialogOpen = false;
					fetchProfile();
				"
			/>
			<BaseFormTabItem label="BVN" value="Nil" />
			<BaseFormTabItem label="Country" :value="user.client.country" />
			<BaseFormTabItem label="State" :value="user.client.state" />
			<BaseFormTabItem label="Gender" :value="user.client.gender" />
		</div>

		<div class="mt-10 rounded-lg border border-gray-40 p-6 md:p-8">
			<div class="mb-5 text-2xl">Others</div>

			<BaseFormTabItem
				label="Referrer"
				:value="user.client.referrer.username === AbodeAdminReferrer ? '' : user.client.referrer.username"
			/>
			<BaseFormTabItem label="Interest" capitalize :value="user.client.type_interests" />
			<BaseFormTabItem label="Purpose" :value="user.client.purpose" />
			<!-- <BaseFormTabItem label="Who are you?" value="Nigeria" /> -->
			<BaseFormTabItem label="Volume" :value="user.client.volume_interests" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseFormTabItem from '@/components/common/BaseFormTabItem.vue';
import { useAuthStore } from '@/stores/auth';
import { type User, AbodeAdminReferrer } from '@/types';
import { computed, ref } from 'vue';
import { ProfileAddIcon } from '../icons/AllIcons';
import NameUpdateDialog from './NameUpdateDialog.vue';
import PhoneNumberUpdateDialog from './PhoneNumberUpdateDialog.vue';
import UsernameUpdateDialog from './UsernameUpdateDialog.vue';

const authStore = useAuthStore();

const user = computed<User | null>(() => authStore.currentUser);

const fetchProfile = async () => {
	await authStore.fetchProfile();
};

const isNameDialogOpen = ref(false);
const isPhoneNumberDialogOpen = ref(false);
const isUsernameDialogOpen = ref(false);
</script>
