<template>
  <el-col
    class="p-latest-item position-relative mb-4 hover-bg-decoration"
    :lg="12"
    :span="24"
  >
    <!-- TODO(rushui 2021-05-04): add link -->
    <div class="item-link d-flex w-100 h-100">
      <img
        class="border-radius-decoration"
        src="~@/assets/loading.png"
        data-err="~@/assets/loading.png"
        :data-src="item.picUrl"
        v-lazyload
        alt="cover"
      />
      <section class="detail position-relative flex-1 p-1">
        <h3>{{ item.name }}</h3>
        <span class="author text-grey-2">{{ author }}</span>
      </section>
    </div>
    <p-mask
      class="cursor-pointer"
      @click.native="handleItemClick(item.id)"
      :icon="maskIcon"
    />
  </el-col>
</template>

<script>
import pMask from '@/components/p-mask'
import { SET_MUSIC } from '@/store/action-types'

export default {
  name: 'p-latest-item',
  components: {
    pMask,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maskIcon: {
        name: 'el-icon-video-play',
        style: {
          position: 'absolute',
          right: '8%',
          bottom: '5%',
          color: 'var(--grey-color-2)',
        },
      },
    }
  },
  computed: {
    author() {
      // TODO(rushui 2021-05-04): optimize
      let author =
        (this.item.song &&
          this.item.song &&
          this.item.song.artists &&
          this.item.song.artists[0] &&
          this.item.song.artists[0].name) ||
        ''
      return author
    },
  },
  methods: {
    handleItemClick(id) {
      // console.log('p-latest-item id = ', id)
      this.$store.dispatch(SET_MUSIC, id)
    },
  },
}
</script>

<style lang="scss" scoped>
.p-latest-item {
  img {
    width: 100px;
    height: 100px;
  }

  .author {
    position: absolute;
    bottom: 4%;
  }
}
</style>
