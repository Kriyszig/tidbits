<template>
  <div class="hero">
    <TopBar />
    <Bits />
  </div>
</template>

<script>
import TopBar from './components/TopBar';
import Bits from './components/Bits';

export default {
  name: 'app',
  components: {
    TopBar,
    Bits,
  }
}
</script>

<style>
html, body {
  min-height: 100vh;
  margin: 0;
}

body {
  background-color: black;
}
</style>
