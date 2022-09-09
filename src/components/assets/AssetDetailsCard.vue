<template>
	<div class="w-full rounded-lg border border-gray-40 p-8">
		<div class="text-3xl font-bold">Homify Apartment, Lagos</div>

		<div class="mt-8 grid grid-cols-3 gap-4">
			<div class="flex items-center">
				<ReceiptIcon class="h-12 w-12 text-primary" />
				<div class="ml-2">
					<div class="font-semibold">N100,000</div>
					<div class="mt-1 text-sm font-light text-gray-80">Per unit</div>
				</div>
			</div>
			<div class="flex items-center" v-if="!subscribed">
				<CalendarIcon class="h-12 w-12 text-primary" />
				<div class="ml-2">
					<div class="font-semibold">8 Months</div>
					<div class="mt-1 text-sm font-light text-gray-80">Holding Period</div>
				</div>
			</div>
			<div class="flex items-center" v-if="!subscribed">
				<ElementPlusIcon class="h-12 w-12 text-primary" />
				<div class="ml-2">
					<div class="font-semibold">12</div>
					<div class="mt-1 text-sm font-light text-gray-80">Available Units</div>
				</div>
			</div>
			<div class="flex items-center" v-if="subscribed">
				<DiscountIcon class="h-12 w-12 text-primary" />
				<div class="ml-2">
					<div class="font-semibold">50% (N150,000)</div>
					<div class="mt-1 text-sm font-light text-gray-80">Current Sales Value</div>
				</div>
			</div>
			<div class="flex items-center" v-if="subscribed">
				<Profile2Icon class="h-12 w-12 text-primary" />
				<div class="ml-2">
					<div class="font-semibold">12</div>
					<div class="mt-1 text-sm font-light text-gray-80">Co-Owners</div>
				</div>
			</div>
		</div>

		<div class="mt-8" v-if="!subscribed">
			<div class="mb-2 flex justify-between pl-2">
				<div class="text-sm">Shares bought by others</div>
				<div class="text-sm font-semibold">20 of 25 Units</div>
			</div>
			<BaseProgress :percentage="40" color="primary" class="mx-2 mb-2 h-4" />
		</div>

		<div class="mt-6">
			<BaseButton v-if="!subscribed" class="bg-orange px-10 text-sm" @click="isOpen = true">Subscribe</BaseButton>
			<BaseButton v-if="subscribed" class="mr-5 bg-orange px-10 text-sm" @click="isOpen = true">Sell my shares</BaseButton>
			<BaseButton v-if="subscribed" class="mr-5 border border-gray-80 bg-white px-10 text-sm text-gray-80" @click="isOpen = true">
				Buy more shares
			</BaseButton>
			<BaseButton v-if="subscribed" class="border border-gray-80 bg-white px-10 text-sm text-gray-80" @click="isOpen = true">
				Initiate Vote to Sell
			</BaseButton>
		</div>

		<SubscribeModal :isOpen="isOpen" @closed="isOpen = false" />
	</div>
</template>

<script lang="ts" setup>
import { ReceiptIcon, CalendarIcon, ElementPlusIcon, DiscountIcon, Profile2Icon } from '@/components/icons/AllIcons';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseProgress from '@/components/common/BaseProgress.vue';
import SubscribeModal from './SubscribeModal.vue';
import { ref } from 'vue';

defineProps<{ subscribed?: boolean }>();

const subscribe = () => {};
const isOpen = ref(false);
</script>
