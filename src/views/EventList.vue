<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import EventCard from '@/components/EventCard.vue';

@Component({
  components: {
    EventCard,
  },
})
export default class EventList extends Vue {

}
</script>
