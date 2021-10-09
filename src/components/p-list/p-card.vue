<template>
  <el-card class="p-card" shadow="hover" :body-style="{ padding: 0 }">
    <img
      class="w-100 h-100"
      src="~@/assets/loading.png"
      data-err="~@/assets/loading.png"
      :data-src="item.picUrl"
      v-lazyload
    />
    <div class="sub-title p-2">
      <span>{{ item.name }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'p-card',
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {
          copywriter: '',
          picUrl: '',
          id: 0,
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.p-card {
  img {
    border-radius: 5px;
    height: 160px;
  }
}

.sub-title {
  display: -webkit-box;
  display: -moz-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  -webkit-line-clamp: 3;

  overflow: hidden;
  height: 78px;
}
</style>
