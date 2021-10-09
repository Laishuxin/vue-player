<template>
  <nav class="p-nav">
    <ul class="nav-list text-center" @click="handleClick" v-if="navItem">
      <li
        class="nav-item py-1 text-m cursor-pointer"
        v-for="(item, index) in navItem"
        :key="item.id"
        :data-index="index"
        :class="{ active: index == currentActiveIndex }"
      >
        <i v-if="item.className" :class="item.className" class="mr-2"></i>
        {{ item.title }}
        <!-- <router-link :to="item.path">{{ item.title }}</router-link> -->
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'p-nav',
  props: {
    navItem: {
      type: Array,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      // TODO(rushui 2021-07-14): 修复路由错误 bug
      currentActiveIndex: -1,
    }
  },
  methods: {
    handleClick(e) {
      let target = e.target
      if (target.tagName.toLowerCase() === 'i') {
        target = target.parentElement
      }
      if (target.tagName.toLowerCase() === 'li') {
        this.currentActiveIndex = parseInt(target.dataset.index)
      }
    },
  },
  watch: {
    currentActiveIndex(newVal) {
      this.$router.push({ path: this.navItem[newVal].path })
    },
  },
}
</script>

<style lang="scss" scoped>
.p-nav {
  width: $nav-width;
  background: $nav-background;
  box-shadow: 0 0 5px 0px rgb(0 0 0 / 10%);
  z-index: 10000;
}

// .router-link-exact-active {
//   color: red;
// }
.active {
  color: red;
}

.nav-item {
  &:hover {
    background: #e7e7e7;
  }
}
</style>
