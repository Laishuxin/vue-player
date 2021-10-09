<template>
  <!-- TODO(rushui 2021-05-04): add play -->
  <section class="p-list">
    <h2 class="mb-2" v-if="title">{{ title }}</h2>
    <el-row :gutter="8" class="flex-wrap" type="flex" justify="start">
      <el-col
        class="mb-4"
        :lg="4"
        :span="6"
        v-for="item in list"
        :key="item.id"
        :to="item.to"
      >
        <p-card :item="item" />
        <p-mask class="cursor-pointer" :icon="icon" />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import pCard from '@/components/p-list/p-card'
import pMask from '@/components/p-mask'

export default {
  components: {
    pCard,
    pMask,
  },
  name: 'p-list',
  props: {
    list: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    const icon = {
      name: 'el-icon-video-play',
      style: {
        position: 'absolute',
        bottom: '5%',
        right: '8%',
        color: 'var(--grey-color-2)',
      },
    }
    return {
      numberOfCols: 5,
      icon,
    }
  },
  computed: {
    numberOfRows() {
      return this.list.length / this.numberOfCols
    },
  },
}
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  opacity: 50%;

  // .link:hover .title {
  //   transform: translateY(0);
  // }

  // .title {
  //   box-sizing: border-box;
  //   background: var(--mask-bg-color);
  //   transform: translateY(-100px);
  //   transition: all 0.8s;
  // }
  .link:hover .play-btn {
    opacity: 100%;
  }

  .play-btn {
    position: absolute;
    bottom: 5%;
    right: 8%;

    opacity: 0;
    transition: all 0.8s;
  }
}
</style>
