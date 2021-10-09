<template>
  <section class="p-lastest">
    <h2 class="mb-2" v-if="title">{{ title }}</h2>
    <el-row :gutter="16" type="flex" justify="between" class="flex-wrap">
      <p-latest-mv-item
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></p-latest-mv-item>
    </el-row>
  </section>
</template>

<script>
// import pLastestList from './p-lastest-list'
import pLatestMvItem from '@/components/p-latest-mv/p-latest-mv-item'

export default {
  name: 'p-latest-mv',
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
    // pLastestList,
    pLatestMvItem,
  },
}
</script>
