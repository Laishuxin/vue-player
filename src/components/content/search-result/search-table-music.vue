<template>
  <!-- TODO(rushui 2021-07-16): 美化表格 -->
  <el-table :data="list" stripe style="width: 100%">
    <el-table-column type="index" width="50"> </el-table-column>
    <el-table-column prop="name" label="音乐标题" width="180"></el-table-column>
    <el-table-column
      prop="artistName"
      label="歌手"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="album.name"
      label="专辑"
      width="180"
    ></el-table-column>
    <!-- TODO(rushui 2021-07-16): 格式化 duration -->
    <el-table-column prop="duration" label="时长" width="180"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    /**
     * @example
     * [{
     *      id: 1,
     *      name: 'name',
     *      artistName: 'name',
     *      album: {
     *        id: 1,
     *        name: 'name',
     *      },
     *      duration: 123,
     *      copyrightId: 1,
     *      mvid: 1, // mvid = null if not exists
     *    }
     * }]
     */
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
