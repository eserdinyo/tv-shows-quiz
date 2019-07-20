<template>
  <div class="container mx-auto text-white px-6">
    <h3 class="text-white uppercase mt-10">welcome admin panel</h3>
    <div class="flex items-center justify-between">
      <div class>
        <h4 class="mt-4">Series</h4>
        <router-link
          :to="{name:'AdminShowDetay', params:{id: show.id}}"
          v-for="show in series"
          :key="show.id"
          class="block mt-4"
        >{{show.name}}</router-link>
      </div>
      <router-link to="/add-show" class="bg-gray-200 text-gray-900 p-4 rounded-lg">Add Show</router-link>
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

