<template>
  <div class="top-bar">
    <span class="logo">Tidbits</span>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<style scoped>
@font-face {
  font-family: Harukaze;
  src: url(../assets/Harukaze.ttf);
}

.top-bar {
  font-family: Harukaze;
  color: #ff1e63;
  background-color: black;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  font-size: 50px;
}
</style>