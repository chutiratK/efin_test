<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import { useUserStore } from './stores/userStore'
import { onMounted } from 'vue'

export default {
  components: {
    Navbar,
  },
};
</script>
