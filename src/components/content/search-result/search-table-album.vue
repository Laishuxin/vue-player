<template>
  <div>search table album</div>
</template>

<script>
export default {
  props: {
    /**
     * @example
     * [{
     *    id: 1,
     *    name: 'name',
     *    imgUrl: 'http://img.png',
     *    playCount: 222,
     *  }]
     */
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
