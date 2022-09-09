<template>
	<div>
		<BaseGoBack />
		<div class="grid grid-cols-8 gap-10">
			<div class="col-span-3">
				<BaseCarousel />

				<div class="mt-10">
					<div class="text-2xl font-semibold text-black">Tell your friends</div>
					<div class="mt-5 flex">
						<WhatsappIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
						<FacebookIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
						<InstagramIcon class="mr-4 h-8 w-8 cursor-pointer text-gray-90" />
						<TwitterIcon class="h-8 w-8 cursor-pointer text-gray-90" />
					</div>
				</div>
			</div>
			<div class="col-span-5">
				<AssetDetailsCard subscribed />
				<SubscriptionDetailsCard class="my-10" />
				<AssetMoreDetailsCard class="mb-10" />
				<AssetInsights />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseCarousel from '@/components/common/BaseCarousel.vue';
import { FacebookIcon, InstagramIcon, TwitterIcon, WhatsappIcon } from '@/components/icons/AllIcons';
import AssetDetailsCard from '@/components/assets/AssetDetailsCard.vue';
import AssetMoreDetailsCard from '@/components/assets/AssetMoreDetailsCard.vue';
import AssetInsights from '@/components/assets/AssetInsights.vue';
import BaseGoBack from '@/components/common/BaseGoBack.vue';
import SubscriptionDetailsCard from '../../components/assets/SubscriptionDetailsCard.vue';
</script>
