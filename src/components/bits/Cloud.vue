<template>
  <div class="cloud-container">
    <h2 class="cloud-heading">
      Cloud Computing & Arcade
    </h2>
    <p class="date">27th December, 2019</p>
    <p class="cloud-description">
      <span>Is the business model of a Cloud Computing startup any different than that of an arcade?</span>
      <br>
      Let us take a step back and analyze the striking similarities between the two. When I was young,
      I found <kbd>Pac-Man</kbd> to be one of the coolest game in the world. I was no <kbd>Billy Mitchell</kbd> but I could
      easily spend an hour or two getting a virtual character to eat all of the white dots on it's
      path without getting killed. Fifteen years down the line, I'm trying my hands at setting 
      thousands of floating point number right in a large matrix hoping my computer can tell the
      difference beetween a horse and a zebra.
      <br>
      <br>
      <span>What is common between the two scenarios?</span>
      <br>
      I countinue to do the stuff I like on a piece of hardware I don't own. Back then it was a big
      metal box at the back of a dimly lit room, now it's an accelerator chip running on a server rack
      in a neat data center - with cable management better than the desktop I'm writing this on.
      <br>
      <br>
      Out of the many arcades in the neighborhood, we always went down to the one which had more games.
      Despite the fact that we seldom played anything but Pac-Man, we still went to the best place for
      everything. Same is true with Cloud Computing Services. There are a ton of them to choose from
      but we either hit the best or the cheapest one based on the needs.
      <br>
      <br>
      Today when I go around the corner where arcade once stood, I see a deserted building with a
      foreclosure sign.
      <br>
      <br>
      <span>So what went wrong?</span>
      <br>
      They failed to update! As the Play Station and the Xbox caught wind, people stopped playing
      on large tin machines. If anything, this is a lesson for all the cloud computing providers
      out there. You are one in a ocean of thousands. The survivor is the one who comes on top. One
      who is unique. The one who hunts and not get hunted.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Cloud',
}
</script>

<style scoped>
.cloud-container {
  width: 40vw;
  padding: 20px;
  color: white;
}

.cloud-heading, .date {
  color: #ff1e63;
  text-align: center;
}

.date {
  font-size: 12px;
  font-weight: bolder;
}

kbd {
  color: #ff1e63;
  font-weight: bolder;
}

span {
  color: #ff1e63;
}
</style>