<template>
	<div class="w-full rounded-lg border border-gray-40 p-6 md:p-8">
		<div class="text-xl font-bold md:text-3xl">{{ asset.name }}</div>
		<div class="text-md font-bold text-gray-50 md:text-xl">{{ asset.location }}</div>

		<div class="mt-4 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-3">
			<div class="flex items-center">
				<ReceiptIcon class="mr-2 h-8 w-8 text-primary md:h-12 md:w-12" />
				<AssetField :value="formatMoney(asset.unit_price)" :label="`Per ${asset.unit_measurement}`" />
			</div>
			<div class="flex items-center" v-if="!subscribed">
				<CalendarIcon class="mr-2 h-8 w-8 text-primary md:h-12 md:w-12" />
				<AssetField :value="`${asset.max_duration} Months`" label="Holding Period" />
			</div>
			<div class="flex items-center" v-if="!subscribed">
				<ElementPlusIcon class="mr-2 h-8 w-8 text-primary md:h-12 md:w-12" />
				<AssetField :value="`${asset.available_units}`" label="Available Units" />
			</div>
			<div class="flex items-center" v-if="subscribed">
				<DiscountIcon class="mr-2 h-8 w-8 text-primary md:h-12 md:w-12" />
				<AssetField :value="`${currentSalesValueGrowth}% (${formatMoney(currentSalesValue)})`" label="Current Sales Value" />
			</div>
			<div class="flex items-center" v-if="subscribed">
				<Profile2Icon class="mr-2 h-8 w-8 text-primary md:h-12 md:w-12" />
				<AssetField :value="`${numberOfCoOwners}`" label="Co-Owners" />
			</div>
		</div>

		<div class="mt-8" v-if="!subscribed">
			<div class="mb-2 flex justify-between pl-2">
				<div class="text-sm">Shares bought by others</div>
				<div class="text-sm font-semibold">{{ numberOfSharesBought }} of {{ asset.totalUnits }} Units</div>
			</div>
			<BaseProgress :percentage="Number(asset.percentFunded)" color="primary" class="mx-2 mb-2 h-4" />
		</div>

		<div class="mt-6 flex flex-col md:flex-row">
			<BaseButton v-if="!subscribed" :disabled="!asset.status" class="bg-orange px-10 text-sm" @click="isOpen = true">
				Subscribe
			</BaseButton>
			<BaseButton v-if="false" class="mr-0 bg-orange px-10 text-sm md:mr-5" @click="isOpen = true">Sell my shares</BaseButton>
			<BaseButton
				v-if="subscribed"
				bgColor="white"
				outlined
				class="mr-0 mt-5 border border-orange bg-white px-10 text-sm text-orange md:mr-5 md:mt-0"
				@click="isOpen = true"
			>
				Buy more shares
			</BaseButton>
			<BaseButton
				v-if="subscribed"
				bgColor="white"
				outlined
				class="mt-5 border border-gray-80 bg-white px-10 text-sm text-gray-80 md:mt-0"
				@click="isVoteToSellOpen = true"
			>
				Initiate Vote to Sell
			</BaseButton>
		</div>

		<SubscribeModal :asset="asset" :isOpen="isOpen" @closed="isOpen = false" @completed="refreshWallet" />
		<VoteToSellModal
			:subscription="subscription"
			:isOpen="isVoteToSellOpen"
			@closed="isVoteToSellOpen = false"
			@completed="emit('refresh')"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ReceiptIcon, CalendarIcon, ElementPlusIcon, DiscountIcon, Profile2Icon } from '@/components/icons/AllIcons';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseProgress from '@/components/common/BaseProgress.vue';
import SubscribeModal from './SubscribeModal.vue';
import { computed, ref } from 'vue';
import AssetField from './AssetField.vue';
import type { Asset, Subscription } from '@/types';
import { formatMoney } from '@/utils/helpers';
import { useTransactionStore } from '@/stores/transactions';
import VoteToSellModal from './VoteToSellModal.vue';

const props = defineProps<{ subscribed?: boolean; asset: Asset; subscription?: Subscription }>();

const subscribe = () => {};
const isOpen = ref(false);
const isVoteToSellOpen = ref(false);

const currentSalesValue = computed(() => props.asset.unit_price * (props.subscription?.units || 0));
const currentSalesValueGrowth = computed(
	() =>
		(((props.subscription?.amount || 0) - props.asset.unit_price * (props.subscription?.units || 0)) /
			(props.subscription?.amount || 1)) *
		0.01
);

const numberOfSharesBought = computed(() => props.asset.funds.reduce((prev: number, curr: Subscription) => prev + curr.units, 0));

const coOwnerCounter = computed(() =>
	props.asset.funds.reduce((prev: any, curr: Subscription) => {
		if (prev[curr.userId]) {
			prev[curr.userId].count += 1;
		} else {
			prev[curr.userId] = { count: 1 };
		}
		return prev;
	}, {})
);

const numberOfCoOwners = computed(() => Object.keys(coOwnerCounter.value).reduce((acc, curr) => acc + coOwnerCounter.value[curr].count, 0));

const transactionStore = useTransactionStore();

const emit = defineEmits(['refresh', 'refresh-wallet']);

const refreshWallet = async () => {
	transactionStore.refreshWallet();
};
</script>
