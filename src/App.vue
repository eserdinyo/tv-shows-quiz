<template>
  <div id="app">
    <!-- <Header /> -->
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  }
};
</script>


<style src='./assets/css/tailwind.css'>
</style>
