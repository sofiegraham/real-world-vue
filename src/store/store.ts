import * as user from '@/store/modules/user.ts';
import * as event from '@/store/modules/event.ts';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    event,
  },
  state: {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
  },

});
