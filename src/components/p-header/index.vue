<template>
  <header class="p-header d-flex justify-between align-center box-shadow">
    <div class="controller d-flex align-center justify-between px-4 h-100">
      <el-button
        @click="handleClick(1)"
        type="text"
        icon="el-icon-arrow-left"
      />
      <el-button
        @click="handleClick(-1)"
        type="text"
        icon="el-icon-arrow-right"
      />
    </div>
    <!-- <div class="middle flex-1 h-100"></div> -->
    <search
      class="search d-flex align-center"
      :placeholder="'搜索音乐、MV、歌单、用户'"
      @enter="handleEnter"
    />
  </header>
</template>

<script>
import search from '@/components/common/Search'

export default {
  name: 'p-header',
  components: {
    search,
  },
  methods: {
    handleClick(step) {
      this.$router.go(step)
    },
    handleEnter(searchVal) {
      if (searchVal === '') {
        this.$message.warning('输入的内容为空')
        return
      }
      if (this.$route.path === '/result' && this.$route.query.q === searchVal) {
        return
      }

      this.$router.push({
        path: '/result',
        query: {
          q: searchVal,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.controller {
  width: $nav-width;
}

.middle {
}

header.p-header {
  height: 36px;
  background: white;
  /* border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1); */
  box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.1);
  z-index: 10001;
}

.search {
  width: 200px;
  height: 60%;
}
</style>
