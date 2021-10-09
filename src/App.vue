<template>
  <div id="app" class="d-flex flex-column justify-between h-100">
    <p-header></p-header>
    <div class="container flex-1 d-flex overflow-auto">
      <p-nav :navItem="navItem"></p-nav>
      <p-main class="flex-1 overflow-auto"></p-main>
    </div>
    <p-player :music="music" />
  </div>
</template>

<script>
import PHeader from '@/components/p-header/'
import PNav from '@/components/p-nav/'
import PMain from '@/components/p-main/'
import PPlayer from '@/components/p-player/'
import { mapState } from 'vuex'

export default {
  components: {
    PHeader,
    PNav,
    PMain,
    PPlayer,
  },
  data() {
    return {
      navItem: [
        {
          title: '发现音乐',
          id: 1,
          path: '/discovery',
          className: 'iconfont icon-icon-test',
        },
        {
          title: '推荐歌单',
          id: 2,
          path: '/play-list',
          className: 'iconfont icon-music',
        },
        {
          title: '最新音乐',
          id: 3,
          path: '/songs',
          className: 'iconfont icon-Music-Note',
        },
        {
          title: '最新mv',
          id: 4,
          path: '/mvs',
          className: 'iconfont icon-shexiangji',
        },
      ],
    }
  },
  computed: {
    ...mapState(['music']),
  },
}
</script>

<style lang="scss" scoped>
.p-player {
  height: $player-height;
  background: $player-bg-color;
  audio::-webkit-media-controls-panel {
    background: $player-bg-color;
  }
}
</style>
