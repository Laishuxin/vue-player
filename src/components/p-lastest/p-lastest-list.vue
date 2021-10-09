<template>
  <el-row :gutter="8" class="flex-wrap" type="flex" justify="start">
    <p-latest-item
      v-for="item in list"
      :key="item.id"
      :item="item"
    ></p-latest-item>
  </el-row>
</template>

<script>
import pLatestItem from './p-latest-item'
export default {
  name: 'p-lastest-list',
  props: {
    list: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  components: {
    pLatestItem,
  },
}
</script>
