<template>
	<div class="h-full bg-none">
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
::-webkit-scrollbar {
	width: 0;
	background: transparent;
}

.mosha__toast {
	/* padding: 0 !important; */
	min-height: auto !important;
	min-width: auto !important;
	padding: 12px 16px 12px 12px !important;
	border-radius: 4px !important;
}
.mosha__toast.success {
	background-color: #f2fffb !important;
	border: 1px solid #00956b !important;
	/* color: #00956B !important; */
}

.mosha__toast.success .mosha__toast__content__text {
	color: #00956b !important;
}

.mosha__toast.success .mosha__toast__close-icon::before {
	color: #00956b !important;
}

.mosha__toast.danger {
	background-color: #feece6 !important;
	border: 1px solid #f54624 !important;
	/* color: #00956B !important; */
}

.mosha__toast.danger .mosha__toast__close-icon::before {
	color: #f54624 !important;
}

.mosha__toast.danger .mosha__toast__content__text {
	color: #f54624 !important;
}

.mosha__toast.info {
	background-color: #e0efff !important;
	border: 1px solid #006adc !important;
	/* color: #00956B !important; */
}

.mosha__toast.info .mosha__toast__close-icon::before {
	color: #006adc !important;
}

.mosha__toast.info .mosha__toast__content__text {
	color: #006adc !important;
}

.mosha__toast__content-wrapper > .mosha__icon {
	display: none;
}
.mosha__toast__content__text {
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
