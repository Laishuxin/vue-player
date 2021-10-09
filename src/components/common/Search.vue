<template>
  <div class="search">
    <input
      class="search-input w-100 h-100 mx-1"
      type="text"
      :placeholder="placeholder"
      autocomplete="false"
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
.search-input {
  text-indent: 0.4em;
}
</style>
