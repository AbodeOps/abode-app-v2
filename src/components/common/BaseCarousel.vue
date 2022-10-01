<template>
	<!-- Image gallery -->
	<TabGroup as="div" class="flex flex-col-reverse">
		<!-- Image selector -->
		<div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
			<TabList class="grid grid-cols-5 gap-4">
				<Tab
					v-for="(image, ix) in images"
					:key="ix"
					class="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
					v-slot="{ selected }"
				>
					<!-- <span class="sr-only"> {{ image.name }} </span> -->
					<span class="absolute inset-0 overflow-hidden rounded-md">
						<img :src="image.src" :alt="image.alt" class="h-full w-full object-cover object-center" @error="onImageFail" />
					</span>
					<span
						:class="[
							selected ? 'ring-indigo-500' : 'ring-transparent',
							'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
						]"
						aria-hidden="true"
					/>
				</Tab>
			</TabList>
		</div>

		<TabPanels class="flex h-[300px] w-full">
			<TabPanel class="w-full" v-for="(image, idx) in images" :key="idx">
				<img
					:src="image.src"
					:alt="image.alt"
					class="h-full w-full object-cover object-center sm:rounded-lg"
					@error="onImageFail"
				/>
			</TabPanel>
		</TabPanels>
	</TabGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';

defineProps<{
	images: {
		src: string;
		alt: string;
	}[];
}>();

const onImageFail = (event: Event) => {
	if (event.target instanceof HTMLImageElement) {
		event.target.src = 'https://api.abode.ng/storage/htsBVPzKXGLzBSplzRonHBz5ZV9AqNMBtZMCcw7I.jpg';
	}
};

// const images = ref([
// 	{
// 		src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
// 		alt: 'new asset',
// 	},
// 	{
// 		src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
// 		alt: 'new asset',
// 	},
// 	{
// 		src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg',
// 		alt: 'new asset',
// 	},
// 	{
// 		src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
// 		alt: 'new asset',
// 	},
// 	{
// 		src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
// 		alt: 'new asset',
// 	},
// 	{
// 		src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
// 		alt: 'new asset',
// 	},
// 	{
// 		src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
// 		alt: 'new asset',
// 	},
// ]);
</script>
