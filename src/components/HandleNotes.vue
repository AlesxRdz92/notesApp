<template>
  <div>
    <h1>Add a new Note</h1>
    <div class="form">
      <div class="form-group">
        <div class="form-group">
          <strong>Note Title</strong>
          <input class="form-control" type="text" v-model="note.title" placeholder="Insert the new note tittle">
        </div>
        <div class="form-group">
          <strong>Note Body</strong>
          <textarea class="form-control" v-model="note.body" placeholder="Insert the new note body"></textarea>
        </div>
      </div>
      <button class="btn btn-primary" @click="addNote">Add Note</button>
    </div>
    <h1>Update/Delete your notes</h1>
    <div class="row">
      <div class="col-sm-4 note" v-for="(note, index) in this.$store.state.notes" v-bind:key="index">
        <div class="card">
          <div class="card-block">
            <strong>Note Title</strong>
            <input class="form-control" type="text" v-model="note.title">
            <strong>Note Body</strong>
            <textarea class="form-control" v-model="note.body"></textarea>
            <p></p>
            <h6 class="card-subtitle mb-2 text-muted">{{note.date}}</h6>
          </div>
          <button class="btn btn-danger" @click="deleteNote(index)">Delete</button>
          <p></p>
          <button class="btn btn-primary" @click="updateNote(index, note)">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Varible to get the input's data
var note = {
  title: '',
  body: ''
};

export default {
  name: "HandleNotes",
  data() {
    return {
      note
    };
  },
  methods: {
    //Method to call the addNote action in the store to add a new note
    addNote() {
      let { title, body } = note;
      //Preventing empty data
      if (title === '' || body === '') {
        return alert('It\'s not possible to add and empty note');
      }
      //Calling the action
      this.$store.dispatch('addNote', {
        title,
        body
      });
      note.title = '';
      note.body = '';
    },
    //Method to call the deleteNote action in the store to delete a note specifing the index of the array
    deleteNote(index) {
      //Calling the action
      this.$store.dispatch('deleteNote', index);
    },
    //Method to call the updateNote action in the store to update a note 
    //specifing the index of the array and the new note data
    updateNote(index, note) {
      let { title, body } = note;
      //Preventing empty data
      if (title === '' || body === '') {
        return alert('It\'s not possible to update the note');
      }
      //Calling the action
      this.$store.dispatch('updateNote', {
        index,
        title,
        body
      });
    }
  }
};
</script>