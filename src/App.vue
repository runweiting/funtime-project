<template>
    <main>
    <router-view></router-view>
  </main>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted () {
    AOS.init()
  }
}
</script>

<style lang="scss">
/* {
  outline: 1px solid yellowgreen
} */
</style>
