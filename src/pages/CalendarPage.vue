<template>
  <div class="main" :style="{'background-image': 'url(' + imgUrl + ')'}">
    <div class="calendar-button">
      <i class="mdi mdi-calendar"></i>
    </div>
    <div class="image-text">
      <h2 class="image-title">{{title}}</h2>
      <h3 class="image-subtitle">{{date}}</h3>
      <p class="image-description">{{description}}</p>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: "calendarPage",
  setup() {
    

    return {
      // use computer() to make it reactive
      // with an empty lambda
      imgUrl: computed(() => AppState.image.imgUrl),
      title: computed(() => AppState.image.title),
      date: computed(() => AppState.image.date),
      description: computed(() => AppState.image.description)
    }
  }
}

</script>

<style lang="scss">
:root {
  --primary-text: #ffffffa0;
  --secondary-text: #ffffff60;
}

.main {
  background-color: black;
  background-size: cover;
  height: 100vh;
}

.calendar-button {
  display: flex;
  justify-content: end;
  font-size: 4em;
  color: var(--primary-text);
}

.image-text {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  position: absolute;
  top: 50vh;
  left: 20vw;
  width: 60vw;
  height: 50vh;
  color: var(--primary-text);
}

.image-title {
  display: flex;
  justify-content: center;
  font-size: 3em;
}

.image-subtitle {
  display: flex;
  justify-content: end;
  font-size: 2em;
  color: var(--secondary-text);
}

.image-description {
  font-size: 1.2em;
}
</style>