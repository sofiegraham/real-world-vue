import EventService from '@/services/EventService.ts';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [{ id: 1, title: 'party', organizer: 'Alan'}, { id: 2, title: 'party', organizer: 'Alan'}],

  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event);
      });
    },
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    getEventById: (state) => (id: number) => {
      return state.events.find((event) => event.id === id);
    },
  },
});
