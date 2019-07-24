<template>
  <div>
    <div class="text-white container mx-auto flex flex-col items-center justify-center">
      <div class="mt-12 t">
        <h3 class="mb-4 uppercase text-center">{{show.name}}</h3>
        <img :src="show.coverImage" alt />
      </div>
      <router-link
        :to=" {name:'AddCharacter', params: {id: $route.params.id}}"
        class="bg-green-600 p-2 rounded-sm mt-4"
      >Add Character</router-link>
    </div>

    <div class="flex flex-col items-center text-white uppercase">
      <div class="" v-for="(character, idx) in show.characters"  :key='idx' >{{idx + 1}}. {{character.name}}</div>
    </div>
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

