<template>
  <div
    class="p-mask zindex-backdrop w-100 h-100"
    :class="{ transition: transition }"
    :style="maskStyle"
  >
    <i
      v-if="icon"
      class="play-btn text-xxl"
      :class="[icon.name]"
      :style="icon.style"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'p-mask',
  props: {
    bgColor: {
      type: String,
      required: false,
    },
    icon: {
      type: Object,
      required: false,
    },
    transition: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    maskStyle() {
      const background = this.bgColor
      return {
        background,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.p-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.transition {
  opacity: 0;
  transition: all 0.8s;

  &:hover {
    opacity: 1;
  }
}
</style>
