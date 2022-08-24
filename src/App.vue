<template>
	<div class="h-full">
		<RouterView v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</RouterView>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style>
.mosha__toast{
	/* padding: 0 !important; */
	min-height: auto !important;
	min-width: auto !important;
	padding: 12px 16px 12px 12px !important;
	border-radius: 4px !important;
	
}
.mosha__toast.success{
	background-color: #F2FFFB !important;
	border: 1px solid #00956B !important;
	/* color: #00956B !important; */
}

.mosha__toast.success .mosha__toast__content__text{
	color: #00956B !important;
}

.mosha__toast.success .mosha__toast__close-icon::before {
	color: #00956B !important;
}

.mosha__toast.danger{
	background-color: #FEECE6 !important;
	border: 1px solid #F54624 !important;
	/* color: #00956B !important; */
}

.mosha__toast.danger .mosha__toast__close-icon::before {
	color: #F54624 !important;
}

.mosha__toast.danger .mosha__toast__content__text{
	color: #F54624 !important;
}

.mosha__toast.info{
	background-color: #E0EFFF !important;
	border: 1px solid #006ADC !important;
	/* color: #00956B !important; */
}

.mosha__toast.info .mosha__toast__close-icon::before {
	color: #006ADC !important;
}

.mosha__toast.info .mosha__toast__content__text{
	color: #006ADC !important;
}


.mosha__toast__content-wrapper > .mosha__icon{
	display: none;
}
.mosha__toast__content__text{
	font-weight: 400 !important;
}
.mosha__toast__close-icon::before {
	top: 0 !important;
	margin-left: 80px !important;
	margin-bottom: 10px;
	font-size: 10px !important;
	font-weight: 100 !important;
	display: inline-block !important;
	transform: scale(3) !important;
}
</style>
