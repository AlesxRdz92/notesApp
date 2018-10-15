<template>
  <div class="home">
    <HandleHome msg="Your Notes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HandleHome from '@/components/HandleHome.vue'

export default {
  name: 'home',
  components: {
    HandleHome
  }
}
</script>
