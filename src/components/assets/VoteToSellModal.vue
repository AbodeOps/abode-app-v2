<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<div>
				<BaseModalHeader title="Initaite Vote to Sell" @closed="emit('closed')" />

				<div class="mt-5 flex w-full flex-col items-center px-8">
					<div>Are you sure you want to initiate vote to sell(sell as a group)? You can not undo this action</div>
					<div class="mt-5 flex">
						<BaseButton
							class="mr-5 border border-black bg-white px-8 text-sm text-black"
							textColor="black"
							bgColor="white"
							@click="emit('closed')"
						>
							Cancel
						</BaseButton>
						<BaseButton class="bg-orange px-8 text-sm" :loading="isSaving" @click="proceed">Proceed</BaseButton>
					</div>
				</div>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import type { Subscription } from '@/types';
import { formatMoney } from '@/utils/helpers';
import toast from '@/helpers/toast';
import { ref } from 'vue';
import { useAssetStore } from '@/stores/assets';

const props = defineProps<{
	isOpen: boolean;
	subscription?: Subscription;
}>();

const isSaving = ref(false);

const assetStore = useAssetStore();

const emit = defineEmits(['completed', 'closed']);

const proceed = async () => {
	try {
		isSaving.value = true;

		const res = await assetStore.sellAsGroup({
			fundId: props.subscription?.id,
			action: true,
		});
		toast.success(res.message);

		emit('completed');
	} finally {
		isSaving.value = false;
	}
};
</script>
