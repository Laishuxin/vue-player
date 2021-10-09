<template>
  <div class="songs">
    <Category
      class="justify-end"
      :categories="categories"
      @changeCategory="onChangeCategory"
    />
    <music-list :musicList="musicList" />
  </div>
</template>

<script>
import Category from '@/components/common/Category'
import MusicList from '@/components/music-list/music-list'
import { getTopSongs } from '@/api/songs'
import { freeze } from '@/utils/object'

export default {
  name: 'songs',
  components: {
    Category,
    MusicList,
  },
  data() {
    const categories = [
      { tag: '全部', id: 0 },
      { tag: '华语', id: 7 },
      { tag: '欧美', id: 96 },
      { tag: '日本', id: 8 },
      { tag: '韩国', id: 16 },
    ]
    freeze(categories)
    return {
      categories,
      musicList: [],
    }
  },
  methods: {
    /**
     * @param { Object }. such as { tag: 'category', id: 0}.
     */
    async onChangeCategory(newVal) {
      // console.log('newVal: ', newVal)
      // console.log('oldVal: ', oldVal)
      this.musicList = await getTopSongs(newVal.id)
    },
  },
  async created() {
    this.musicList = await getTopSongs(0)
    // console.log(this.musicList)
  },
}
</script>

<style lang="scss" scoped></style>
