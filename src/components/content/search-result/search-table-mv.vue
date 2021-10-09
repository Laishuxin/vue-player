<template>
  <div>search table mv</div>
</template>

<script>
export default {
  /**
   * @example
   * [{
   *    id: 1,
   *    name: 'name',
   *    artistName: 'name',
   *    imgUrl: 'http://img.png',
   *    duration: 112,
   *    playCount: 1111,
   *  }
   *  ]
   */
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
