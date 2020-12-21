<template>
  <div id="scroll">
    <div id="newhover">
      There is a legend of a sacred bird native to India, which is said to die
      every 500 years by burning itself with wood in its mouth, and then to be
      reborn in the flames, and to ascend in this ordeal. This death is called
      "Nirvana"; through the poem "Phoenix Nirvana" compiled by Guo Moruo, which
      combines Phoenix, Nirvana and the Western sacred bird, there is a modern
      word "Phoenix Nirvana" in Chinese, but this bird is not actually Phoenix.
      <br /><br />

      Similar to Chinese, Phoenix can also mean "outstanding person" in English,
      which is quite similar to "dragon and phoenix among people" in Chinese.<br /><br />

      In addition, because of their beautiful meanings, Phoenix is often used as
      names of people and places in both the Chinese and Western worlds. <br> <br>
      <div id="imgalign"><img id="pho" src="../assets/Phoenix.jpg" width="50%" alt=""> </div>   </div>
  </div>
</template>

<script>
// /* eslint-disable */
// import anime from "animejs/lib/anime.es.js";
// import bk from "../assets/landing.jpg";
// export default {
//   /* eslint-disable */
//   data: function () {
//     return {
//       dura: 10000,
//     };
//   },
//   mounted() {
//     // console.log(typeof(bk));
//     var self = this;
//     var bkimg = new Image();
//     bkimg.onload = function () {
//       // console.log("image loaded");
//       document.getElementById("scroll").style.backgroundImage =
//         "url(" + this.src + ")";
//       self.afterLoad();
//     };
//     bkimg.src = bk; //"https://yjl450.github.io/HCA_site/static/img/landing.4404de5.jpg";
//   },
//   methods: {
//     afterLoad() {
//       var propA = "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))";
//       var propB = "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))";
//       // console.log(propA);
//       /* eslint-disable */
//       anime({
//         targets: "#cover",
//         background: [propA, propB],
//         duration: 1000,
//         easing: "easeInOutSine",
//       });
//       anime({
//         targets: "#scroll",
//         delay: 300,
//         backgroundPosition: ["100%", "0%"],
//         // translateX: -250,
//         duration: this.dura,
//         easing: "easeInOutSine",
//       });
//       setTimeout(() => {
//         document.getElementById("cover").style.display = "none";
//         document.getElementById("coverhover").style.visibility = "visible";
//         document.getElementById("title").style.visibility = "visible";
//       }, this.dura);
//     },
//   },
// };
</script>

<style>
@font-face {
  font-family: fangsong;
  src: url("../assets/WenYueGuTiFangSong-min.ttf") format("truetype");
}

#scroll {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: left;
  background-image: url("../assets/landing.jpg");
}

#newhover {
  padding: 40px;
  margin-left: 50%;
  margin-right: 50px;
  height: 95%;
  width: calc(35% - 50px);
  background-color: rgba(255, 255, 255, 0.534);
  /* font-family: fangsong; */
  font-size: 20px;
  text-align: justify;
  text-justify: inter-ideograph;
  /* visibility: visible;
  opacity: 1; */
  overflow: hidden;
}

#imgalign{
  text-align: center;
}

#pho{
  width: 50%;
  transition: 0.5s;
  z-index: 10000000;
}

#pho:hover{
  width: 70%;
}


</style>
