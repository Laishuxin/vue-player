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
import { SET_PLAY_LIST_OFFSET } from '@/store/mutation-types'
import { SET_PLAY_LIST } from '@/store/action-types'

export default {
  computed: {
    total() {
      return this.$store.state.playList.total
    },
    limit() {
      return this.$store.state.playList.limit
    },
  },
  methods: {
    onClick(pageNumber) {
      const offset = (pageNumber - 1) * this.limit
      this.$store.commit(SET_PLAY_LIST_OFFSET, offset >= 0 ? offset : 0)
      this.$store.dispatch(SET_PLAY_LIST)
    },
    onPrevClick(e) {
      this.onClick(e)
    },
    onNextClick(e) {
      this.onClick(e)
    },
    onCurrentChange(e) {
      this.onClick(e)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-pagination {
  text-align: center;
  margin: auto;
}
</style>
