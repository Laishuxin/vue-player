<template>
  <div class="search">
    <!-- TODO(rushui 2021-07-16): 添加 focus 高亮功能 -->
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      v-model.trim="searchValue"
      @keyup.enter="handleEnter"
    />
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    placeholder: String,
  },
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    handleEnter() {
      this.$emit('enter', this.searchValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  border: 1px solid #eee;

  &:focus &:hover {
    border: 1px solid var(--primary-color);
  }
}
</style>
