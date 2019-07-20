<template>
  <div class="container mx-auto mt-10">
    <Show v-for="show in series" :show="show" :key="show.name" />
  </div>
</template>

<script>
import Show from "@/components/Show";
import { mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["series"])
  },
  components: {
    Show
  },
  methods: {
    async getSeries() {}
  },
  created() {
    this.$store.dispatch("getAllSeries");
  }
};
</script>
