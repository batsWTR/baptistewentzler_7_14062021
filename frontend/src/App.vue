<template>
  <div id="app" class="container-fluid">
    <MonHeader />
      <router-view />
  </div>
</template>

<script>
import MonHeader from "./components/MonHeader.vue";

export default {
  components: {
    MonHeader
  }
};
</script>

<style>

</style>
