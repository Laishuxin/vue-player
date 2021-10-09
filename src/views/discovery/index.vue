<template>
  <div class="discovery">
    <swipe class="mt-4" :swipeList="banner" />
    <recommend-list class="mt-4" :list="recommend" :title="'推荐歌单'" />
    <newest-song class="mt-4" :title="'最新音乐'" :list="newestSongList" />
    <latest-mv class="mt-4" :title="'最新mv'" :list="latestMvList" />
  </div>
</template>

<script>
import swipe from '@/components/p-swipe/'
import recommendList from '@/components/p-list/'
import newestSong from '@/components/p-lastest/p-lastest'
import latestMv from '@/components/p-latest-mv/'

import {
  getBanner,
  getRecommend,
  getNewestSongs,
  getLatestMv,
} from '@/api/discovery'

export default {
  name: 'discovery',
  components: {
    swipe,
    recommendList,
    newestSong,
    latestMv,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      newestSongList: [],
      latestMvList: [],
    }
  },
  // life circle
  // TODO(rushui 2021-05-03): Promise.all
  created() {
    getBanner()
      .then(value => {
        this.banner = value
      })
      .catch(err => {
        process.env.NODE_ENV !== 'production' &&
          console.log('getBanner err: ', err)
      })

    getRecommend(15)
      .then(value => {
        this.recommend = value
      })
      .catch(err => {
        process.env.NODE_ENV !== 'production' &&
          console.log('getBanner err: ', err)
      })

    getNewestSongs()
      .then(value => {
        this.newestSongList = value
      })
      .catch(err => {
        process.env.NODE_ENV !== 'production' &&
          console.log('getBanner err: ', err)
      })

    getLatestMv()
      .then(value => {
        this.latestMvList = value
      })
      .catch(err => {
        process.env.NODE_ENV !== 'production' &&
          console.log('getBanner err: ', err)
      })
  },
  // end life circle
}
</script>

<style lang="scss" scoped></style>
