<template>
	<div>
		<div class="grid grid-cols-7 gap-10">
			<ReferralBanner class="col-span-4" />
			<div class="col-span-3">
				<div class="text-xl font-semibold text-black">Tell your friends</div>
				<div class="mt-5 flex">
					<WhatsappIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
					<FacebookIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
					<InstagramIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
					<TwitterIcon class="h-8 w-8 cursor-pointer text-gray-90" />
				</div>
				<BaseButton class="mt-10 rounded-3xl bg-orange-15 px-8 py-6 text-black" bg-color="orange-15">
					<CopyIcon class="mr-3 h-5 w-5 text-orange" />
					Copy Link
				</BaseButton>
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
</script>
