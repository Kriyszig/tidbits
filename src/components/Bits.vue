<template>
  <div class="bits-enclosure">
    <div class="bits-container">
      <Cloud />
    </div>
  </div>
</template>

<script>
import Cloud from './bits/Cloud';

export default {
  name: 'Bits',
  components: {
    Cloud,
  },
}
</script>

<style>
.bits-enclosure {
  display: flex;
  justify-content: center;
  width: 100vw;
}

.bits-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5vh;
}
</style>