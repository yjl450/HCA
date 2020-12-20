<template>
  <div id="app">
    <div id="scroll">
      <div id="cover"></div>
      <div id="coverhover">
        <div id="title">
          <p>百鳥朝鳳</p>
          <p id="en_title">Chrono Cross of Fenghuang</p>
          <div id="desc">
            <p>
              The image of the Fenghuang has changed and blended over time and
              in different cultural contexts to become one of our most important
              cultural elements today. But where did she originate? What kind of
              animal is she? And how has she evolved?
            </p>
            <p>
              The history of Chinese art is very detailed about the loong, but
              the Fenghuang does not seem to be depicted as much or as
              important. Therefore, this project hopes to show how the Fenghuang
              has been portrayed in Chinese art history, and how it has changed.
              We hope to illustrate the image of the Fenghuang and its changes
              through multiple latitudes such as time, politics, and religion.
            </p>
          </div>
          <router-link to="/comparison" class="button">
            Enter Exhibition
          </router-link>
          <div id="footer">
            Curated by Sky Lyu, Catherine Liu, Richard Zheng,<br />
            Monica Xie, Yijian Liu
            <hr />
            Background: Hundreds of Birds Paying Homage to the Fenghuang<br />Shen
            Quan, Qing Dynasty
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import anime from "animejs/lib/anime.es.js";
import bk from "../assets/landing.jpg";
export default {
  /* eslint-disable */
  data: function () {
    return {
      dura: 10000,
    };
  },
  mounted() {
    // console.log(typeof(bk));
    var self = this;
    var bkimg = new Image();
    bkimg.onload = function () {
      // console.log("image loaded");
      document.getElementById("scroll").style.backgroundImage =
        "url(" + this.src + ")";
      self.afterLoad();
    };
    bkimg.src = bk; //"https://yjl450.github.io/HCA_site/static/img/landing.4404de5.jpg";
  },
  methods: {
    afterLoad() {
      var propA = "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))";
      var propB = "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))";
      // console.log(propA);
      /* eslint-disable */
      anime({
        targets: "#cover",
        background: [propA, propB],
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
        document.getElementById("coverhover").style.visibility = "visible";
        document.getElementById("title").style.visibility = "visible";
      }, this.dura);
    },
  },
};
</script>

<style>
@font-face {
  font-family: fangsong;
  src: url("../assets/WenYueGuTiFangSong-min.ttf") format("truetype");
}

html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: "";
  display: flex;
}

#scroll {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: right;
}

#cover {
  height: 100%;
  width: 100%;
}

#coverhover {
  margin-left: 100px;
  height: 100%;
  width: 100%;
  visibility: hidden;
  overflow: hidden;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.26) 50%,
    rgba(0, 0, 0, 0.73) 65%,
    rgba(0, 0, 0, 0.9251050762101716) 80%
  ) !important;
  opacity: 0;
  transition: 0.5s;
}

#coverhover:hover {
  height: 100%;
  color: white;
  width: 100%;
  opacity: 1;
  /* background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(38,15,0,0.26) 45%, rgba(38,15,0,0.73) 57%, rgba(38,15,0,0.9251050762101716) 70%)!important; */
}

p {
  margin: 10px;
}

#title {
  padding-top: 2%;
  padding-left: 60%;
  padding-right: 4%;
  font-family: fangsong;
  font-size: 80px;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  transition: 0.3s;
}

#title:hover {
  opacity: 1;
}

#en_title {
  font-size: 40px;
}

#desc {
  margin-right: 20%;
  margin-top: 6%;
  font-size: 0.23em;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
}

.button {
  margin-left: 2%;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  padding: 10px 25px 10px 25px;
  font-size: 22px;
  color: #ffffff;
  border: solid #ffffff 1px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: 0.5s;
}

.button:hover {
  background: #ffffff;
  color: rgba(0, 0, 0, 1);
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  text-decoration: none;
}

hr {
  border-color: rgb(165, 165, 165);
}

#footer {
  margin-left: 1%;
  font-size: 18px;
  text-align: justify;
  text-justify: inter-ideograph;
  position: absolute;
  color: rgb(165, 165, 165);
  bottom: 20px;
}
</style>
