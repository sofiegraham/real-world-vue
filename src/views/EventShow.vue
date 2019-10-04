<template>
  <h1>Showing event #{{ id }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EventShow extends Vue {
  @Prop({ type: String }) public id!: string;

}
</script>
