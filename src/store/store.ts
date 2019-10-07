import * as event from '@/store/modules/event.ts';
import * as notification from '@/store/modules/notification.ts';
import * as user from '@/store/modules/user.ts';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    event,
    notification,
  },
  state: {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
  },

});
