<template>
	<div class="w-full md:w-9/12" v-if="user">
		<div class="rounded-lg border border-gray-40 p-6 md:p-8">
			<div class="mb-5 text-2xl">Profile</div>

			<div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-4 border-black md:h-28 md:w-28">
				<ProfileAddIcon class="h-10 w-10 text-black md:h-16 md:w-16" />
			</div>

			<BaseFormTabItem label="Name" :value="user.name" />
			<BaseFormTabItem label="Phone Number" :value="user.client.phoneNumber" />
			<BaseFormTabItem label="Username" :value="'@' + user.username" />
			<BaseFormTabItem label="BVN" value="Nil" />
			<BaseFormTabItem label="Country" value="Nigeria" />
			<BaseFormTabItem label="State" value="Lagos" />
			<BaseFormTabItem label="Gender" value="Male" />
		</div>

		<div class="mt-10 rounded-lg border border-gray-40 p-6 md:p-8">
			<div class="mb-5 text-2xl">Others</div>

			<BaseFormTabItem label="Referrer" value="Jeffrey Itepu" />
			<BaseFormTabItem label="Interest" value="+2347089324817" />
			<BaseFormTabItem label="Purpose" value="jeff" />
			<BaseFormTabItem label="Who are you?" value="Nigeria" />
			<BaseFormTabItem label="Volume" value="Lagos" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseFormTabItem from '@/components/common/BaseFormTabItem.vue';
import { useAuthStore } from '@/stores/auth';
import type { User } from '@/types';
import { computed } from 'vue';
import { ProfileAddIcon } from '../icons/AllIcons';

const authStore = useAuthStore();

const user = computed<User | null>(() => authStore.currentUser);
</script>
