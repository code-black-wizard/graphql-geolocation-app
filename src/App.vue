<template>
  <div id="app">
    <TheNavBar />
    <Wrapper />
  </div>
</template>

<script>
import TheNavBar from '@/components/UI/TheNavBar'
import Wrapper from '@/components/Wrapper'

export default {
  name: "app",
  components: {
    TheNavBar,
    Wrapper
  }
};
</script>

<style lang="scss">
  @import './assets/scss/app';
</style>