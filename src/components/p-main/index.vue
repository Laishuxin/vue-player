<template>
  <main class="p-main px-8 bg-white">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main>
</template>

<script>
export default {
  name: 'p-main',
}
</script>

<style lang="scss" scoped></style>
