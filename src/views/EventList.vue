<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for='event in events' key='event.id' :event='event'/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import EventService from '@/services/EventService.ts';
import EventCard from '@/components/EventCard.vue';

@Component({
  components: {
    EventCard,
  },
})
export default class EventList extends Vue {

  public events: Array<{}> = [];

  private created() {
    EventService.getEvents()
    .then((res) => {
      this.events = res.data;
    }).catch((err) => {
      throw(err);
    });
  }
}
</script>
