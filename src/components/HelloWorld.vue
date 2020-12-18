<template>
  <div id="app">
    <div id="scroll">
      <div id="cover"></div>
      <div id="coverhover">
        <div id="title">
          <p>百鳥朝鳳</p>
          <p id="en_title">Chrono Cross with Birds</p>
          <p id="desc">
            The history of Chinese art is very detailed about the loong, but the
            Fenghuang does not seem to be depicted as much or as important.
            Therefore, this project hopes to show how the Fenghuang has been
            portrayed in Chinese art history, and how it has changed through
            multiple latitudes such as time, politics, and religion. Starting
            from the Fenghuang, we also invistigate how other two kinds of birds
            are appreciated in a historical context.
          </p>
          <router-link to="/exhibition" class="button"
            >Enter Exhibition</router-link
          >
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
      console.log("image loaded");
      document.getElementById("scroll").style.backgroundImage =
        "url(" + this.src + ")";
      self.afterLoad();
    };
    bkimg.src = bk; //"https://yjl450.github.io/HCA_site/static/img/landing.4404de5.jpg";
  },
  methods: {
    afterLoad() {
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
  padding-top: 50px;
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
  font-size: 45px;
}

#desc {
  margin-right: 20%;
  margin-top: 6%;
  font-size: 22px;
  text-align: justify;
  text-justify: inter-ideograph;
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
