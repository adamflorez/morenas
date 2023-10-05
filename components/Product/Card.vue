<template>
  <div class="w-60 shadow rounded overflow-hidden hover:shadow-xl duration-300 flex-shrink-0">
    <img class='aspect-square object-cover object-center'
      src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
    <div class="py-3 px-3 h-28 flex-col flex justify-between">
      <div>
        <div class="text-sm font-bold mb-1">Toasted Garlic Chicken Pizza</div>
        <div class="text-xs text-gray-500">$23.00</div>
      </div>
      
      <div class="text-xs font-bold flex items-center">
        Add Item
        <Icon
          name="ic:round-plus"
          size="20"
          @click='dialog = true'
          class="text-blue-600 rounded-full ml-1 hover:bg-blue-300 cursor-pointer duration-200"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  const dialog = ref(false)

</script>

<style lang="scss" scoped></style>
