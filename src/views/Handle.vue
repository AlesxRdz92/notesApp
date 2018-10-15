<template>
  <div class="handle">
    <HandleNotes />
  </div>
</template>

<script>
// @ is an alias to /src
import HandleNotes from '@/components/HandleNotes.vue'

export default {
  name: 'handle',
  components: {
    HandleNotes
  }
}
</script>