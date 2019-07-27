<template>
  <div class="inline-block mb-4 mx-auto w-full md:w-1/5">
    <div class="flex justify-center">
      <router-link :to="{name:'ShowDetail', params:{id:show.id}}">
        <div style="height:300px">
          <img :src="show.coverImage" class="img-hover" alt />
        </div>
        <h4 class="text-gray-400 text-xs font-semibold mt-2 uppercase text-center">{{show.name}}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"]
};
</script>
