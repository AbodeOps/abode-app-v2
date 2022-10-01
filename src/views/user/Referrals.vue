<template>
	<div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-10">
			<ReferralBanner class="col-span-1 md:col-span-4" />
			<div class="col-span-1 md:col-span-3">
				<div class="flex flex-row items-center md:flex-col md:items-start">
					<div class="mr-4 md:mr-0">
						<div class="text-xl font-semibold text-black">Tell your friends</div>
						<div class="mt-2 flex md:mt-5">
							<WhatsappIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
							<FacebookIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
							<InstagramIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
							<TwitterIcon class="h-8 w-8 cursor-pointer text-gray-90" />
						</div>
					</div>
					<BaseButton class="mt-10 whitespace-pre rounded-3xl bg-orange-15 px-8 py-6 text-orange" bg-color="orange-15">
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
</script>
