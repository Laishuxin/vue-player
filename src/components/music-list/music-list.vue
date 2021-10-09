<template>
  <!-- TODO(rushui 2021-07-06): add click -->
  <div class="song-list">
    <el-table :data="musicList" stripe style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column width="100" class-name="image-column">
        <template slot-scope="scope">
          <img
            :data-src="scope.row.picUrl"
            src="~@/assets/loading.png"
            data-err="~@/assets/loading-error.png"
            class="music-item-cover w-100 border-radius"
            :alt="scope.row.name"
            v-lazyload
          />
          <!-- {{ scope.row.picUrl }} -->
        </template>
      </el-table-column>
      <el-table-column property="musicName" label="歌名"> </el-table-column>
      <el-table-column property="artistsName" label="歌手"> </el-table-column>
      <el-table-column property="albumName" label="专辑"> </el-table-column>
      <el-table-column property="duration" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    musicList: {
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
.border-radius {
  border-radius: 4%;
}
.image-column {
  height: 200px !important;
}

.music-item-cover {
  width: 72px;
  height: 72px;
}
</style>
