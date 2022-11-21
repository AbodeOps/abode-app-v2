<template>
	<div class="px-4 md:px-12">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-10">
			<ReferralBanner class="col-span-1 md:col-span-4" />
			<div class="col-span-1 my-5 md:col-span-3 md:my-0">
				<div class="flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start">
					<BaseShare class="mr-4 md:mr-0" />
					<BaseButton
						:loading="isCopied"
						@click="copyLink"
						class="mt-0 whitespace-pre rounded-3xl bg-orange-15 px-8 py-6 text-orange md:mt-10"
						bg-color="orange-15"
					>
						<CopyIcon class="mr-3 h-5 w-5 text-orange" />
						Copy Link
					</BaseButton>
				</div>
			</div>
		</div>
		<ReferralTable />
	</div>
</template>

<script lang="ts" setup>
import ReferralTable from '@/components/referrals/ReferralTable.vue';
import ReferralBanner from '@/components/referrals/ReferralBanner.vue';
import { CopyIcon, FacebookIcon, InstagramIcon, TwitterIcon, WhatsappIcon } from '@/components/icons/AllIcons';
import BaseButton from '@/components/common/BaseButton.vue';
import { computed, onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import toast from '@/helpers/toast';
import type { User } from '@/types';
import BaseShare from '../../components/common/BaseShare.vue';

const isLoading = ref(false);
const isCopied = ref(false);

const authStore = useAuthStore();

const user = computed<User | null>(() => authStore.currentUser);

const fetchReferrals = async () => {
	isLoading.value = true;
	await authStore.fetchReferrals().then(() => {
		isLoading.value = false;
	});
};

const copyLink = async () => {
	const baseUrl = import.meta.env.VITE_APP_BASE;

	try {
		await navigator.clipboard.writeText(
			`Join the largest community of young people multiplying wealth through Real Estate Assets \nClick ${baseUrl}/user/signup?ref=${user.value?.username} to enjoy amazing deals`
		);
		isCopied.value = true;

		setTimeout(() => {
			toast.success('Copied successfully');

			isCopied.value = false;
		}, 2000);
	} catch ($e) {
		toast.error('Cannot copy, try again');
		isCopied.value = false;
	}
};

onMounted(() => {
	fetchReferrals();
});
</script>
