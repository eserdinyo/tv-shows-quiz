<template>
  <div class="container mx-auto text-white px-6">
    <h3 class="text-white uppercase mt-10">welcome admin panel</h3>
    <div class="flex items-center justify-between">
      <div class='w-full'>
        <h4 class="mt-4">Series</h4>
        <router-link
          :to="{name:'AdminShowDetay', params:{id: show.id}}"
          v-for="show in series"
          :key="show.id"
          class="hover:bg-red-900 block mt-4 inline-block w-1/4 border-2 rounded-lg border-gray-700 p-5 m-2"
        >{{show.name}}</router-link>
      </div>
      <router-link to="/add-show" class="bg-gray-200 text-gray-900 p-4 rounded-lg absolute right-0 top-0 m-10">Add Show</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Admin",
  computed: {
    ...mapState(["series"])
  },
  mounted() {
    this.$store.dispatch('getAllSeries')
  }
};
</script>

