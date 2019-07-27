<template>
  <div id="app">
    <!-- <Header /> -->
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import header from "@/components/Header";
export default {
  components: {
    header
  }
};
</script>


<style src='./assets/css/tailwind.css'>
</style>
