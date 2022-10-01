<template>
	<div>
		<div class="text-xl font-semibold text-black">Tell your friends</div>
		<div class="mt-2 flex md:mt-5">
			<WhatsappIcon class="mr-4 h-6 w-6 cursor-pointer text-gray-90 md:h-8 md:w-8" />
			<FacebookIcon class="mr-4 h-6 w-6 cursor-pointer text-gray-90 md:h-8 md:w-8" />
			<InstagramIcon class="mr-4 h-6 w-6 cursor-pointer text-gray-90 md:h-8 md:w-8" />
			<TwitterIcon class="h-6 w-6 cursor-pointer text-gray-90 md:h-8 md:w-8" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { FacebookIcon, InstagramIcon, TwitterIcon, WhatsappIcon } from '@/components/icons/AllIcons';

defineProps<{ link?: string }>();
</script>
