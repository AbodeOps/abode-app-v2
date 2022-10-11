<template>
	<div class="w-full md:w-9/12">
		<div class="mt-10 rounded-lg border border-gray-40 p-6 md:p-8">
			<div class="mb-5 text-2xl">Next Of Kin</div>

			<div v-if="user">
				<BaseFormTabItem label="Next Of Kin Name" :value="user?.client.nextOfKinName" />
				<BaseFormTabItem label="Next Of Kin Email" :value="user?.client.nextOfKinEmail"  />
				<BaseFormTabItem label="Next Of Kin Address" :value="user?.client.nextOfKinAddress"  />
				<BaseFormTabItem label="Next Of Kin Phone Number" :value="user?.client.nextOfKinPhoneNumber"  />
				<BaseFormTabItem label="Next Of Kin Relationship" :value="user?.client.nextOfKinRelationship"  />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseFormTabItem from '@/components/common/BaseFormTabItem.vue';
import { useAuthStore } from '@/stores/auth';
import type { User } from '@/types';
import { computed } from 'vue';

const authStore = useAuthStore();

const user = computed<User | null>(() => authStore.currentUser);

</script>
