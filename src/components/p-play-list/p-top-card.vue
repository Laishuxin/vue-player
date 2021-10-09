<template>
  <div class="p-top-card d-flex py-2">
    <div class="icon-wrap px-2">
      <img :src="topCardItem.imgUrl" alt="topCardItem.name" class="h-100" />
    </div>
    <section class="content-wrap p-2">
      <span class="tag py-1 px-2">精品歌单</span>
      <h3 class="title py-1 color-white">{{ topCardItem.name }}</h3>
      <p class="description text-ellipsis color-grey-3">
        {{ topCardItem.description }}
      </p>
    </section>
    <img :src="topCardItem.imgUrl" class="bg" />
    <div class="bg-mask"></div>
  </div>
</template>

<script>
export default {
  props: {
    topCardItem: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.p-top-card {
  position: relative;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
  z-index: 10001;
}

.bg {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  -webkit-filter: blur(40px);
  filter: blur(40px);
}

.bg-mask {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -2;
}

.tag {
  border: 1px solid #dfac67;
  color: #dfac67;
}
</style>
