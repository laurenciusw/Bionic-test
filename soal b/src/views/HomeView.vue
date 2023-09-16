<template>
  <div></div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  components: {},
  created() {
    this.fetchHandler()
  },

  methods: {
    ...mapActions(useCounterStore, ['fetchHandler'])
  },
  watch: {
    '$route.query'() {
      this.fetchHandler()
    }
  }
}
</script>
