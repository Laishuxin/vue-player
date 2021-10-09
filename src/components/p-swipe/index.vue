<template>
  <!-- TODO(rushui 2021-05-02): add link to some path when click -->
  <el-carousel
    class="p-swipe w-100"
    :interval="4000"
    type="card"
    height="200px"
  >
    <el-carousel-item
      class="p-swipe-item"
      v-for="item in swipeList"
      :key="item.bannerId"
    >
      <img
        src="~@/assets/loading.png"
        alt="swipe image"
        :data-src="item.pic"
        data-err="item.pic"
        v-lazyload
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'p-swipe',
  props: {
    swipeList: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.p-swipe {
  padding: 0 auto;
  .p-swipe-item {
    border-radius: 8px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
