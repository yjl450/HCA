<template>
  <div id="large">
    <!-- <input @click="musicControl"> -->
    <div id="button" @click="musicControl" :title="control">
      <img id="icon" src="./assets/music.png" />
    </div>
    <!-- </input> -->
    <transition name="fade">
      <router-view id="container"></router-view>
    </transition>
  </div>
</template>


<script>
/* esint-disable */
import sounds from "@/assets/deer.mp3";
import { Howl, Howler } from "howler";
export default {
  data: function () {
    return {
      sound: {},
      control: "Play",
    };
  },
  mounted() {
    console.log(sounds);
    this.sound = new Howl({
      src: [sounds],
      // autoplay: true,
      loop: true,
      volume: 0.3,
    });
    document.getElementById("icon").style.height =
      (window.innerWidth / 2000) * 80 * 0.95 + "px";
  },
  methods: {
    musicControl() {
      if (this.sound.playing()) {
        this.sound.pause();
        this.control = "Play";
      } else {
        this.sound.play();
        this.control = "Pause";
      }
    },
  },
};
</script>

<style scoped>
#large {
  height: 100vh;
  margin: 0;
  padding: 0;
}

#button {
  position: absolute;
  bottom: 0px;
  background: 0;
  border: 0;
  margin: 10px;
  /* height: 50px; */
}

#icon {
  position: absolute;
  bottom: 0px;
  background: 0;
  border: 0;
  opacity: 0.6;
  /* height: 80px; */
  /* filter: invert(100%); */
  transition: 0.5s;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 100%;
  z-index: 80000;
  cursor: pointer;
}

#icon:hover {
  opacity: 1;
}

#container {
  height: 100%;
}

.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>