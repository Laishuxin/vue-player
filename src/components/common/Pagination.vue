<template>
  <el-pagination
    @prev-click="onPrevClick"
    @next-click="onNextClick"
    @current-change="onCurrentChange"
    background
    layout="prev, pager, next"
    :total="total"
  >
  </el-pagination>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  methods: {
    onNextClick(page) {
      this.$emit('nextClick', page)
      this.$emit('changePage', page)
    },
    onPrevClick(page) {
      this.$emit('prevClick', page)
      this.$emit('changePage', page)
    },
    onCurrentChange(page) {
      this.$emit('currentChange', page)
      this.$emit('changePage', page)
    },
  },
}
</script>

<style lang="scss" scoped></style>
