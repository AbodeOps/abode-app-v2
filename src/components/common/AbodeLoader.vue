<template>
    <div class="flex flex-col h-screen items-center mt-32">
        <Logo class="animate-bounce h-32 w-32 cursor-pointer animate-pulse" />

        <div class="relative w-full sm:w-1/2 bg-gray-200 rounded-xl mt-5">
            <div class="w-full h-3 rounded-xl shim-green animate-pulse"></div>
          </div>

        <div class="text-md"></div>
    </div>
</template>

<script lang="ts" setup>
import Logo from "../logos/Logo.vue";

</script>

<style lang="postcss" scoped>
.shim-green {
    position: relative;
    overflow: hidden;
    background-color: #66d4b5;
  }
  .shim-green::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(233, 233, 233, 1) 0,
      rgba(233, 233, 233, 0.9) 50%,
      rgba(233, 233, 233, 0.8) 100%
    );
    animation: shimmer 2.5s ease-out infinite;
    content: "";
  }
</style>