<template>
  <div class="text-white container mx-auto">
    <div class="mt-12 t">
      <h3 class="mb-4 uppercase text-center">{{show.name}}</h3>
      <img :src="show.coverImage" alt />
    </div>
    <button class="bg-green-600 p-2 rounded-sm mt-4">Add Character</button>
  </div>
</template>


<script>
import { seriesRef } from "@/firebase";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["show"])
  },
  mounted() {
    this.$store.dispatch("getOneShow", this.$route.params.id);
  }
};
</script>

