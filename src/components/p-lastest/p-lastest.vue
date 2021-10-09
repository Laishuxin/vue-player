<template>
  <section class="p-lastest">
    <h2 class="mb-2" v-if="title">{{ title }}</h2>
    <p-lastest-list :list="list" />
  </section>
</template>

<script>
import pLastestList from './p-lastest-list'

export default {
  name: 'p-lastest',
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  components: {
    pLastestList,
  },
}
</script>
