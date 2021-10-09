<template>
  <div class="p-content d-flex flex-wrap justify-between">
    <card
      v-for="item in playList"
      :key="item.coverImgId"
      :title="item.title"
      :imgUrl="item.imgUrl"
      :to="item.to"
    >
      <template v-slot:cover>
        <div class="card-cover cursor-pointer">
          <h3 class="title">播放量：{{ item.playCount }}</h3>
          <i class="icon el-icon-video-play"></i>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from '../common/Card.vue'
export default {
  components: { Card },
  props: {
    /**
     * @example
     * [{
     *   imgUrl: 'https://aa.png',
     *   title: 'title',
     *   playCount: 1,
     * }]
     */
    playList: {
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
.card-cover {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;

  .title {
    padding: 4px;
    margin-top: -40px;
    transition: all 1s;
    // background: var(--grey-color-1);
    background: rgba($color: #eee, $alpha: 0.6);
  }
  .icon {
    position: absolute;
    right: 0%;
    bottom: 18%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    color: rgba($color: #fff, $alpha: 0.8);
    opacity: 0;
    transition: all 1s;
  }
  &:hover .title {
    margin-top: 0;
  }
  &:hover .icon {
    opacity: 1;
  }
}
</style>
