<template>
  <div class="play-list">
    <p-top-card :top-card-item="topCardItem" class="my-2"></p-top-card>
    <p-category
      :categories="categories"
      @changeCategory="onChangeCategory"
      class="my-2"
    ></p-category>
    <p-content :play-list="playList"></p-content>
    <p-pagination class="mb-2"></p-pagination>
  </div>
</template>

<script>
import PCategory from '@/components/p-play-list/p-category.vue'
import PContent from '@/components/p-play-list/p-content.vue'
import PPagination from '@/components/p-play-list/p-pagination.vue'
import pTopCard from '@/components/p-play-list/p-top-card.vue'
import { SET_PLAY_LIST } from '@/store/action-types'

import { getCategories, getHighQualityPlayList } from '@/api/play-list'

export default {
  components: { pTopCard, PCategory, PContent, PPagination },
  name: 'play-list',
  created() {
    getCategories()
      .then((value) => {
        this.categories = value
        this.currentCategory = this.categories[0]
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('play-list getCategories: ', err)
        }
      })
  },
  data() {
    return {
      categories: [],
      currentCategory: '',
      topCardItem: {},
    }
  },
  computed: {
    playList() {
      return this.$store.state.playList.list
    },
  },
  methods: {
    onChangeCategory(category) {
      this.currentCategory = category
    },
  },
  watch: {
    // eslint-disable-next-line
    currentCategory(newVal, _) {
      getHighQualityPlayList(newVal, 1).then((value) => {
        this.topCardItem = value && value[0]
      })
      this.$store.dispatch(SET_PLAY_LIST)
    },
  },
}
</script>

<style lang="scss" scoped></style>
