<template>
  <li class="media my-4">
    <img class="mr-3 img-thumbnail" :src="icon" alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0 mb-1">{{ name }}</h5>
      {{ address }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'Place',
  props: {
    name: String,
    address: String,
    icon: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
