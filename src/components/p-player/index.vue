<template>
  <div class="p-player">
    <audio
      ref="playerRef"
      class="player w-100 h-100"
      :src="music.url"
      controls
    ></audio>
  </div>
</template>

<script>
export default {
  name: 'p-player',
  props: {
    music: {
      type: Object,
      required: true,
      default() {
        return {
          id: null,
          url: '',
        }
      },
    },
  },
  watch: {
    'music.url': function () {
      // console.log(this.$refs.playerRef)
      setTimeout(() => {
        this.$refs.playerRef.play()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.p-player {
  background: lightyellow;
}
</style>
