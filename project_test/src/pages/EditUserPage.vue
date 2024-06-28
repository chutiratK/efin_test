<template>
  <div class="update-form">
      <Editt :id="id"/>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import Editt from '../components/editUser.vue'

export default {
  components: {Editt},
  setup() {
      const route = useRoute();
      const id = Number(route.params.id);
      
      return id;
  }
};
</script>

<style>
.update-form {
  padding: 50px 100px;
  margin: auto;
}
@media(max-width: 800px) {
    .update-form {
        padding: 30px 20px;
    }
}
</style>
