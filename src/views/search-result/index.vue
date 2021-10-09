<template>
  <section class="search-result">
    <h2 class="title mt-2 text-5 text-lg">{{ title }}</h2>
    <category
      class="mt-2"
      :categories="navItems"
      @changeCategory="handleChangeCategory"
    />
    <search-table class="mt-l" :list="list" :typeId="currentCategory.id" />
    <!-- TODO(rushui 2021-07-16): 切换页面的时候设置页码数 -->
    <pagination
      class="text-center my-4"
      @changePage="handleChangePage"
      :total="total"
    />
  </section>
</template>

<script>
import Category from '@/components/common/Category'
import SearchTable from '@/components/content/search-result/search-table'
import Pagination from '@/components/common/Pagination'
import {
  getMusicByKeyword,
  getAlbumByKeyword,
  getMvByKeyword,
} from '@/api/search-result'

import { isUndef } from '@/utils/type-judge'
const MUSIC_ID = 1
const ALBUM_ID = 2
const MV_ID = 3
const navItems = [
  { tag: '歌曲', id: MUSIC_ID },
  { tag: '歌单', id: ALBUM_ID },
  { tag: 'MV', id: MV_ID },
]

const strategies = {
  [MUSIC_ID]: getMusicByKeyword,
  [ALBUM_ID]: getAlbumByKeyword,
  [MV_ID]: getMvByKeyword,
}
const defaultStrategory = strategies[MUSIC_ID]

export default {
  name: 'search-result',
  components: {
    Category,
    SearchTable,
    Pagination,
  },
  data() {
    return {
      searchValue: '',
      // TODO(rushui 2021-07-16): freeze ?
      navItems,
      currentCategory: navItems[0],
      page: 0,
      limit: 10,
      list: [],
      total: 0,
    }
  },
  computed: {
    title() {
      return this.$route.query['q']
    },
  },
  methods: {
    handleChangeCategory(category) {
      this.currentCategory = category
    },
    handleChangePage(page) {
      this.page = page - 1
      this._setListData()
    },
    _setListData() {
      const strategory =
        strategies[this.currentCategory.id] || defaultStrategory
      strategory(this.searchValue, this.page * this.limit, this.limit).then(
        (result) => {
          this.list = result.data
          if (!isUndef(result.total)) {
            this.total = result.total
          }
        }
      )
    },
  },
  // life-circle
  beforeMount() {
    this.searchValue = this.$route.query.q
  },
  mounted() {
    this._setListData()
  },
  watch: {
    currentCategory() {
      this._setListData()
    },
  },
}
</script>

<style lang="scss" scoped></style>
