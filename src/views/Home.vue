<template>
  <div class="container mx-auto mt-10">
    <Show v-for="show in shows" :show="show" :key="show.name" />
  </div>
</template>

<script>
import Show from "@/components/Show";
import http from "@/http";

// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      shows: []
    };
  },
  components: {
    Show
  },
  created() {
    http.get("/shows").then(res => {
      this.shows = res.data;
    });
  }
};
</script>
