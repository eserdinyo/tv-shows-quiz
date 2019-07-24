<template>
  <div class="container mx-auto mt-10">
    <v-wait for="series">
      <template slot="waiting">
        <div class="loader">
          <img src="../assets/loader.png" />
        </div>
      </template>
      <Show v-for="show in series" :show="show" :key="show.name" />
    </v-wait>
  </div>
</template>

<script>
import Show from "@/components/Show";

import { mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      password: []
    };
  },
  computed: {
    ...mapState(["series"])
  },
  components: {
    Show
  },
  methods: {
    listenKeyboard() {
      document.addEventListener("keyup", e => {
        this.password.push(e.key);
        if (this.password.length == 5) {
          if (this.password.join("") == "admin") {
            this.$router.push({ name: "Admin" });
          } else {
            this.password = this.password.slice(1, this.password.length);
          }
        }
      });
    }
  },
  async created() {
    this.listenKeyboard();

    this.$wait.start("series");
    await this.$store.dispatch("getAllSeries");
    this.$wait.end("series");
  }
};
</script>
