<template>
  <div class="categories d-flex flex-wrap" @click="handleClick">
    <span
      v-for="(item, index) in categories"
      :key="item.id"
      :data-index="index"
      :class="{ active: currentActiveIndex == index }"
      class="category pr-3 cursor-pointer"
    >
      {{ item.tag }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * @example { [{tag: 'all', id: 0} ]}
     */
    categories: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    // const initCategory = this.categories[0] || ''
    return {
      currentActiveIndex: 0,
      // currentCategory: initCategory,
    }
  },
  methods: {
    handleClick(e) {
      const target = e.target
      if (target.tagName.toLowerCase() !== 'span') {
        return
      }
      const index = parseInt(target.dataset['index']) || 0
      this.currentActiveIndex = index
      // this.currentCategory = this.categories[index]
    },
  },
  watch: {
    // currentCategory(newVal, oldVal) {
    //   this.$emit('changeCategory', newVal, oldVal)
    // },
    currentActiveIndex(newVal, oldVal) {
      this.$emit(
        'changeCategory',
        this.categories[newVal],
        this.categories[oldVal],
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.category {
  &.active {
    color: rgba($color: red, $alpha: 0.8);
  }

  &:hover {
    color: rgba($color: red, $alpha: 0.8);
  }

  transition: all 0.5s;
}
</style>
