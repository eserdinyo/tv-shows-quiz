<template>
  <div class="inline-block mb-4 w-1/4 md:w-1/5">
    <div class="flex justify-center">
      <router-link :to="{name:'ShowDetail', params:{id:show.id}}">
        <img :src="show.image" class="img-hover" alt />
        <h4 class="text-gray-400 text-xs font-semibold mt-2 uppercase">{{show.name}}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"]
};
</script>
