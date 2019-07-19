<template>
  <div class="container mx-auto">
    <div class="flex flex-col w-64 mt-16 mx-auto">
      <h4 class="text-white mb-6 text-center uppercase">Add New Show</h4>
      <input class="mb-4 rounded-sm px-2 py-2" v-model="name" type="text" placeholder="show name" />
      <input
        class="mb-4 rounded-sm px-2 py-2"
        v-model="coverImage"
        type="text"
        placeholder="cover image url"
      />
      <input
        class="mb-4 rounded-sm px-2 py-2"
        v-model="bgImage"
        type="text"
        placeholder="bg image url"
      />
      <input class="mb-4 rounded-sm px-2 py-2" v-model="music" type="text" placeholder="music url" />
      <button class="text-white border-gray-100 border-2 rounded-sm p-2" @click="save">Save</button>
    </div>
  </div>
</template>

<script>
import { seriesRef } from "@/firebase";

export default {
  data() {
    return {
      name: "",
      coverImage: "",
      bgImage: "",
      music: ""
    };
  },
  methods: {
    save() {
      // ADD DATA TO FIRESTORE

      seriesRef
        .add({
          name: this.name,
          coverImage: this.coverImage,
          bgImage: this.bgImage,
          music: this.music
        })
        .then(res => {
          this.$router.push({ name: "Admin" });
        });
    }
  }
};
</script>

