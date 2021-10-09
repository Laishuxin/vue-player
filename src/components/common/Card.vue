<template>
  <section class="p-card" :style="cardStyle">
    <template v-if="isLazy">
      <img
        :data-src="imgUrl ? imgUrl : ''"
        :data-err="dataErr ? dataErr : ''"
        src="~@/assets/loading.png"
        :alt="title"
        v-lazyload
        class="border-radius-decoration"
      />
    </template>
    <template v-else>
      <img
        :src="imgUrl ? imgUrl : ''"
        :alt="title"
        class="border-radius-decoration"
      />
    </template>
    <h3 class="sub-title">{{ title }}</h3>
    <slot name="cover"></slot>
  </section>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    isLazy: {
      type: Boolean,
      default: false,
    },
    dataErr: String,
    title: {
      type: String,
      required: false,
      default: '',
    },
    width: {
      type: String,
      required: false,
      default: '240px',
    },
    height: {
      type: String,
      required: false,
      default: '360px',
    },
  },
  computed: {
    cardStyle() {
      return {
        width: this.width,
        height: this.height,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.p-card {
  position: relative;
  img {
    width: 100%;
    height: 80%;
  }
}

// .p-card__cover {
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
// }
.sub-title {
  display: -webkit-box;
  display: -moz-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;

  overflow: hidden;
  height: 40px;
}
</style>
