<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="row">
    <div class="col-md-4 note" v-for="(note, index) in this.$store.state.notes" v-bind:key="index">
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">{{note.title}}</h4>
          <p class="card-text">{{note.body}}</p>
          <h6 class="card-subtitle mb-2 text-muted">{{note.date}}</h6>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HandleHome',
  props: {
    msg: String
  }
};
</script>
