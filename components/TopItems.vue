
import { TopItems } from '#build/components';

import { ProductCard } from '#build/components';
<template>
  <div class='min-h-[600px] p-3 pr-0 md:p-20'>
    <div class="h-1 w-20 bg-black rounded mb-8 hidden md:block"></div>
    <div class='flex items-start justify-between'>
      <div>
        <h2 class='text-4xl mb-2'> Top Picks </h2>
    <p class='mb-10 text-sm'>Make sure you try our most loved menu TopItems.</p>
      </div>
      <NuxtLink to='/menu' class='py-3 px-8 border-2 border-blue-300 rounded-lg'>See More Items</NuxtLink>
    </div>
    
    <div class='overflow-x-auto flex gap-x-8 px-2 pb-8 pl-8 -ml-8 scroll-smooth'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>