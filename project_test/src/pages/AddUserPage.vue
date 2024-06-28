<template>
  <div class="add-form">
    <Add/>
  </div>
</template>

<script>
import Add from '../components/addUser.vue'
export default {
    components: {Add}
}
</script>

<style>
.add-form {
    padding: 50px 100px;
    margin: auto;
}
@media(max-width: 800px) {
    .add-form {
        padding: 30px 20px;
    }
}
</style>