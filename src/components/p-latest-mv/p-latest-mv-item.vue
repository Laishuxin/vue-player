<template>
  <el-col
    class="p-latest-mv-item position-relative mb-4 hover-bg-decoration cursor-pointer"
    :lg="6"
    :span="12"
  >
    <div class="img-wrap">
      <img
        src="~@/assets/loading.png"
        data-err="~@/assets/loading.png"
        :data-src="item.picUrl"
        :alt="item.name"
        v-lazyload
        class="w-100 border-radius-decoration"
      />
      <div class="num-wrap zindex-tooltip">
        <i class="icon el-icon-caret-right"></i>
        <span class="num">{{ item.playCount }}</span>
      </div>
    </div>
    <div class="info-wrap">
      <div class="mt-2 text-ellipsis-decoration">{{ item.name }}</div>
      <div class="color-grey-2">{{ item.artistName }}</div>
    </div>
  </el-col>
</template>

<script>
export default {
  props: {
    /**
     * @example {
     *  picUrl: 'url',
     *  playCount: 1,
     *  name: 'name',
     *  artistName: 'artist name',
     *}
     */
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.num-wrap {
  position: absolute;
  top: 0;
  right: 10%;
  color: lightgrey;
}
</style>
