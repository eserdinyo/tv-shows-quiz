<template>
  <div class="inline-block mr-4">
    <router-link :to="{name:'ShowDetail', params:{id:show.id}}">
      <img :src="show.image" class="img-hover" alt />
      <h4 class="text-gray-400 text-xs font-semibold mt-1 uppercase">{{show.name}}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["show"]
};
</script>
