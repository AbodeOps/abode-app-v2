<template>
	<div class="px-4 md:px-12">
		<div class="mb-10 flex items-center justify-between">
			<BaseTabs :tabs="tabs" :activeTab="activeTab" @change="activeTab = $event" />
		</div>

		<div v-if="activeTab === 'account'">
			<Account />
		</div>
		<div v-if="activeTab === 'next-of-kin'">
			<NextOfKin />
		</div>
		<!-- <div v-if="activeTab === 'security'">
			<Security />
		</div> -->
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseTabs from '@/components/common/BaseTabs.vue';
import Account from '../../components/profile/Account.vue';
import NextOfKin from '../../components/profile/NextOfKin.vue';
import Security from '../../components/profile/Security.vue';

const tabs = ref([
	{
		label: 'Account',
		key: 'account',
	},
	{
		label: 'Next Of Kin',
		key: 'next-of-kin',
	},
	// {
	// 	label: 'Security',
	// 	key: 'security',
	// },
]);

const activeTab = ref(tabs.value[0].key);
</script>
