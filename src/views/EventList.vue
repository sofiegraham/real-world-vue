<template>
  <div>
    <h1>Events for {{ user.user && user.user.name }}</h1>
    <EventCard v-for='event in events' :key='event.id' :event='event'/>
    <template v-if='page != 1'>
      <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">Prev Page</router-link> |
    </template>
    <template v-if="showNextPageLink">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next">Next Page</router-link>
    </template>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';

@Component({
  components: {
    EventCard,
  },
})
export default class EventList extends Vue {

  public perPage: number = 3

  private created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: this.perPage,
      page: this.page,
    })
  }

  get user() {
    return this.$store.state.user
  }

  get showNextPageLink() {
    return (this.eventsLength - (this.perPage * this.page)) > 0
  }

  get page() {
    return parseInt(this.$route.query.page) || 1
  }

  get eventsLength() {
    return this.$store.state.event.eventsLength
  }

  get events() {
    return this.$store.state.event.events
  }
}
</script>
