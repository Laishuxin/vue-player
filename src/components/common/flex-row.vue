<template>
  <div class="flex-row">
    <el-row :gutter="gutter">
      <el-col
        :span="columnSpan"
        v-for="(item, index) in list"
        :key="item.id || index"
      >
        <slot name="item" :item="item"> </slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
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
  computed: {
    columnSpan() {
      const TOTAL_COLUMNS = 24
      return Math.ceil(TOTAL_COLUMNS / this.list.length)
    },
    columnCount() {
      return this.list.length
    },
  },
}
</script>

<style lang="scss" scoped></style>
