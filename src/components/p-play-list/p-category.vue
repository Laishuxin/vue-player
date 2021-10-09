<template>
  <div class="p-category d-flex justify-end">
    <span
      v-for="(item, index) in categories"
      :key="index"
      class="px-2 cursor-pointer"
      @click="handleCategoryClick(index, item)"
      :class="{ active: index === activeIndex }"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    handleCategoryClick(index, category) {
      this.activeIndex = index
      this.$emit('changeCategory', category)
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>
