<template>
  <div class="search-table">
    <template v-if="typeId === searchTableAlbum">
      <search-table-album :list="list" />
    </template>
    <template v-else-if="typeId === searchTableMv">
      <search-table-mv :list="list" />
    </template>
    <template v-else>
      <search-table-music :list="list" />
    </template>
  </div>
</template>

<script>
import SearchTableAlbum from './search-table-album.vue'
import SearchTableMusic from './search-table-music.vue'
import SearchTableMv from './search-table-mv.vue'
export default {
  components: {
    SearchTableAlbum,
    SearchTableMusic,
    SearchTableMv,
  },
  props: {
    typeId: {
      type: Number,
      required: true,
    },
    list: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    const SEARCH_TABLE_MUSIC = 1
    const SEARCH_TABLE_ALBUM = 2
    const SEARCH_TABLE_MV = 3
    return {
      searchTableMusic: SEARCH_TABLE_MUSIC,
      searchTableAlbum: SEARCH_TABLE_ALBUM,
      searchTableMv: SEARCH_TABLE_MV,
    }
  },
}
</script>

<style lang="scss" scoped></style>
