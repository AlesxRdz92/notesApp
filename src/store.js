import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    ADD_NOTE: (state, note) => {
      state.notes.push(note);
      //Save the data in the localStorage
      localStorage.setItem('notesArr', JSON.stringify(state.notes));
    },
    DELETE_NOTE: (state, index) => {
      state.notes.splice(index, 1);
      //Save the data in the localStorage
      localStorage.setItem('notesArr', JSON.stringify(state.notes));
    },
    UPDATE_NOTE: (state, note) => {
      state.notes[note.index].title = note.title;
      state.notes[note.index].body = note.body;
      state.notes[note.index].date = note.date;
      //Save the data in the localStorage
      localStorage.setItem('notesArr', JSON.stringify(state.notes));
    },
    //It is called by the hook
    INITIAL_STORE: (state) => {
      if (localStorage.getItem('notesArr'))
        //Get the data from localStorage
        state.notes = JSON.parse(localStorage.getItem('notesArr'));
    }
  },
  actions: {
    addNote: ({ commit }, data) => {
      let note = {
        title: data.title,
        body: data.body,
        date: `This note was created at ${new Date().toLocaleString()}`
      };
      commit('ADD_NOTE', note);
    },
    deleteNote: ({ commit }, index) => {
      commit('DELETE_NOTE', index);
    },
    updateNote: ({ commit }, data) => {
      console.log(data);
      let note = {
        index: data.index,
        title: data.title,
        body: data.body,
        date: `This note was updated at ${new Date().toLocaleString()}`
      };
      console.log(note);
      commit('UPDATE_NOTE', note);
    },
    initialStore: ({ commit }) => {
      commit('INITIAL_STORE');
    }
  }
})
