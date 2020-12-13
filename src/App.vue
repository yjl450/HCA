<template>
  <div id="app">
    <div id="scroll">
      <div id="cover"></div>
      <div id="coverhover">
        <div id="title">
          <p>百鳥朝鳳</p>
          <p id="en_title">
            All Birds Pay Homage<br />
            to the Phoenix
          </p>
          <p id="desc">
            The history of Chinese art is very detailed about the loong, but the
            Fenghuang does not seem to be depicted as much or as important.
            Therefore, this project hopes to show how the Fenghuang has been
            portrayed in Chinese art history, and how it has changed. We hope to
            illustrate the image of the Fenghuang and its changes through
            multiple latitudes such as time, politics, and religion.
          </p>
          <a href="https://baidu.com" class="button">Enter Exhibition</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import anime from "animejs/lib/anime.es.js";
export default {
  /* eslint-disable */
  name: "App",
  data: function () {
    return {
      dura: 1,
    };
  },
  mounted() {
    var propA = "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))";
    var propB = "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
    console.log(propA);
    /* eslint-disable */
    anime({
      targets: "#cover",
      background: [propA, propB],
      // background: ['linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url(\''+bg+'\')', 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(\''+bg+'\')'],
      // background: ["linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))", "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"],
      duration: 1000,
      easing: "easeInOutSine",
    });
    anime({
      targets: "#scroll",
      delay: 300,
      backgroundPosition: ["100%", "0%"],
      // translateX: -250,
      duration: this.dura,
      easing: "easeInOutSine",
    });
    setTimeout(() => {
      document.getElementById("cover").style.display = "none";
      document.getElementById("coverhover").style.display = "block";
    }, this.dura);
  },
};
</script>

<style>
@font-face {
  font-family: fangsong;
  src: url("./assets/Wyue-GutiFangsong-NC.otf") format("opentype");
}

html,
body {
  height: 100%;
  margin: 0;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #000000; */
  background-image: "";
  display: flex;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

#scroll {
  /* object-fit: cover; */
  height: 100%;
  width: 100%;
  background: url("./assets/landing.jpg");
  background-size: cover;
  background-position: right;
  /* animation: fadeIn 1s; */
  /* animation-fill-mode: forwards; */
  /* overflow: hidden; */
}

#cover {
  height: 100%;
  width: 100%;
}

#coverhover {
  height: 100%;
  width: 100%;
  display: none;
  overflow: hidden;
}

#coverhover:hover {
  height: 100%;
  color: white;
  width: 100%;
  /* background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(38,15,0,0.26) 45%, rgba(38,15,0,0.73) 57%, rgba(38,15,0,0.9251050762101716) 70%)!important; */
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.26) 45%,
    rgba(0, 0, 0, 0.73) 57%,
    rgba(0, 0, 0, 0.9251050762101716) 70%
  ) !important;
}

p {
  margin: 10px;
}

#title {
  padding-top: 50px;
  padding-left: 60%;
  padding-right: 4%;
  font-family: fangsong;
  font-size: 80px;
  height: 100%;
  opacity: 0;
  overflow: hidden;
}

#title:hover {
  opacity: 100%;
}

#en_title {
  font-size: 40px;
}

#desc {
  margin-right: 20%;
  margin-top: 15px;
  font-size: 22px;
  text-align: justify;
  text-justify: inter-ideograph;
}

.button {
  margin-left: 2%;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  /* padding: 40px; */
  padding: 10px 25px 10px 25px;
  font-size: 22px;
  color: #ffffff;
  border: solid #ffffff 1px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.button:hover {
  background: #ffffff;
  color: rgba(0, 0, 0, 1);
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  text-decoration: none;
}
</style>
