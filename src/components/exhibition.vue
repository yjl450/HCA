<template>
  <div id="exhi">
    <transition name="fade"> <router-view></router-view></transition>
    <!-- <router-link to="/">hello</router-link> -->
    <div id="nav">
      <img id="navImg" src="../assets/navigation.jpg" />
      <div id="navButton">
        <div>
          <img class="navB noNav" src="../assets/nav/navigation_01.jpg" />
        </div>
        <div @click="navTo('/comparison')">
          <img
            class="navB"
            id="/comparison"
            src="../assets/nav/navigation_02.jpg"
          />
        </div>
        <div @click="navTo('/shang')">
          <img class="navB" id="/shang" src="../assets/nav/navigation_03.jpg" />
        </div>
        <div @click="navTo('/qin')">
          <img class="navB" id="/qin" src="../assets/nav/navigation_04.jpg" />
        </div>
        <div @click="navTo('/wei')">
          <img class="navB" id="/wei" src="../assets/nav/navigation_05.jpg" />
        </div>
        <div @click="navTo('/tang')">
          <img class="navB" id="/tang" src="../assets/nav/navigation_06.jpg" />
        </div>
        <div @click="navTo('/song')">
          <img class="navB" id="/song" src="../assets/nav/navigation_07.jpg" />
        </div>
        <div @click="navTo('/yuan')">
          <img class="navB" id="/yuan" src="../assets/nav/navigation_08.jpg" />
        </div>
        <div @click="navTo('/ming')">
          <img class="navB" id="/ming" src="../assets/nav/navigation_09.jpg" />
        </div>
        <div @click="navTo('/summary')">
          <img
            class="navB"
            id="/summary"
            src="../assets/nav/navigation_10.jpg"
          />
        </div>
        <div>
          <img class="navB noNav" src="../assets/nav/navigation_11.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navImg from "@/assets/navigation.jpg";
import router from "@/router";

export default {
  mounted() {
    console.log(this.$route.path);
    this.chosen();
  },
  updated() {
    console.log(this.$route.path);
    this.chosen();
  },
  methods: {
    chosen() {
      var nb = document.getElementsByClassName("navB");
      var i;
      for (let i = 0; i < nb.length; i++) {
        nb[i].style.opacity = "0";
      }
      document.getElementById(this.$route.path).style.opacity = "1";
    },
    navTo(a) {
      router.push(a);
    },
  },
};
</script>

<style scoped>
#exhi {
  height: 100%;
}

#nav {
  border: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0 !important;
}

#navImg {
  width: 100%;
  vertical-align: top;
  z-index: -100;
  position: absolute;
  height: 100%;
}

#navButton {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 100;
}

#navButton > div > img {
  width: 100%;
  height: 100%;
}

.navB {
  opacity: 0;
  transition: 0.2s;
  cursor: pointer;
}

.noNav {
  cursor: default;
}

.navB:hover {
  opacity: 1 !important;
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