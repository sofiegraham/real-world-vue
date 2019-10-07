import EventService from '@/services/EventService.ts';

export const namespaced = true;

export const state = {
  events: [{ id: 1, title: 'party', organizer: 'Alan'}, { id: 2, title: 'party', organizer: 'Alan'}],
  eventsLength: 0,
  event: {},
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENTS_LENGTH(state, length) {
    state.eventsLength = length;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  createEvent({commit, dispatch}, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event);
      const notification = {
        type: 'success',
        message: 'Your event was created',
      };
      dispatch('notification/add', notification, { root: true });
    }).catch((err) => {
      const notification = {
        type: 'error',
        message: 'Your event was not created ' + err.message,
      };
      dispatch('notification/add', notification, { root: true });
      throw(err);
    });
  },
  fetchEvent({commit, dispatch, getters}, id) {
    const event = getters.getEventById(id);
    if (event) {
      commit('SET_EVENT', event);
    } else {
      EventService.getEvent(id)
      .then((res: { data: object }) => {
        commit('SET_EVENT', res.data);
      }).catch((err) => {
        const notification = {
          type: 'error',
          message: 'There was an issue: ' + err.message,
        };
        dispatch('notification/add', notification, { root: true });
      });
    }
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
    .then((res) => {
      commit('SET_EVENTS', res.data);
      commit('SET_EVENTS_LENGTH', res.headers['x-total-count']);
    }).catch((err) => {
      const notification = {
        type: 'error',
        message: 'There was an issue: ' + err.message,
      };
      dispatch('notification/add', notification, { root: true });
    });
  },
};

export const getters = {
  getEventById: (state) => (id: number) => {
    return state.events.find((event) => event.id === id);
  },
};

