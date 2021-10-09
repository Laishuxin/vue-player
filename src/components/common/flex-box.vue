<template>
  <div class="flex-box">
    <flex-row
      v-for="rowIndex in rowCount"
      :key="rowIndex"
      :gutter="gutter"
      :list="currentList(rowIndex)"
      :justify="justify"
      :type="type"
      :align="align"
    >
    </flex-row>
  </div>
</template>

<script>
import FlexRow from './flex-row.vue'
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    columnCount: {
      type: Number,
      default: 4,
    },
    gutter: {
      type: Number,
      required: false,
      default: 20,
    },
    justify: {
      type: String,
      default: 'space-between',
    },
    type: {
      type: String,
      default: 'flex',
    },
    align: {
      type: String,
      default: 'middle',
    },
  },
  components: {
    FlexRow,
  },
  computed: {
    rowCount() {
      return Math.ceil(this.list.length / this.columnCount)
    },
    listLength() {
      return this.list.length
    },
    currentList(index) {
      const end = (index + 1) * this.columnCount
      return this.list.slice(
        index * this.columnCount,
        end < this.listLength ? end : this.listLength - 1,
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
