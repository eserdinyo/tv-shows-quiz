<template>
  <div id="app">
    <!-- <Header /> -->
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  components: {
  }
};
</script>


<style src='./assets/css/tailwind.css'>
</style>
