<template>
  <div id="compContainer">
    <div id="collapse">
      <div class="title">The Development</div>
      <div class="im">
        <img id="stage1" class="stg" src="../assets/tile.jpg" />
        <div class="stage">
          Early Stage
          <div class="desc">
            <br />
            - From Shang, Zhou to Qin, Han<br /><br />
            - A reflection of ruling class’s aspiration
          </div>
        </div>
      </div>
      <div class="im">
        <img id="stage2" class="stg" src="../assets/tang.jpg" />
        <div class="stage">
          Mid Stage
          <div class="desc">
            <br />
            - From Three Kingdoms to Yuan Dynasty <br /><br />
            - A reflection of society and civilian class
          </div>
        </div>
      </div>
      <div class="im">
        <img id="stage3" class="stg" src="../assets/qing.jpg" />
        <div class="stage">
          Late Stage
          <div class="desc">
            <br />
            - From Ming to Qing Dynasty
            <br /><br />
            - Strict standardization on the format of Fenghuang
          </div>
        </div>
      </div>
      <div class="title">of Fenghuang</div>
    </div>
    <div id="cite">
      <div id="toggle" @click="toggleCite">Citations<br /></div>
      <div v-if="citeList">
        <h4>Shang & Zhou</h4>
        (Zhou)
        <a
          href="http://www.360doc.com/content/18/0815/22/53812471_778574450.shtml"
          >http://www.360doc.com/content/18/0815/22/53812471_778574450.shtml</a
        >
        <br />

        (Zhou)
        <a href="https://www.sohu.com/a/162867711_775842"
          >https://www.sohu.com/a/162867711_775842</a
        ><br />

        (Shang)
        <a
          href="http://www.360doc.com/content/17/1007/14/37583807_692841726.shtml"
          >http://www.360doc.com/content/17/1007/14/37583807_692841726.shtml</a
        >

        <h4>Qin & Han</h4>
        (Han)
        <a
          href="http://www.360doc.com/content/19/0711/12/13020443_848035593.shtml"
          >http://www.360doc.com/content/19/0711/12/13020443_848035593.shtml</a
        >

        <h4>Wei, Jin, Northern & Southern Dynasties</h4>
        <a href="http://www.chnmuseum.cn/zp/zpml/201812/t20181218_25924.shtml"
          >http://www.chnmuseum.cn/zp/zpml/201812/t20181218_25924.shtml</a
        >
        <h4>Tang</h4>
        <a href="https://www.dpm.org.cn/collection/ceramic/227529.html"
          >https://www.dpm.org.cn/collection/ceramic/227529.html</a
        >
        <br />
        <a
          href="https://baike.baidu.com/item/%E9%8E%8F%E9%87%91%E5%87%A4%E9%B8%9F%E7%BA%B9%E5%85%AD%E6%9B%B2%E9%93%B6%E7%9B%98/19515526"
          >https://baike.baidu.com/item/%E9%8E%8F%E9%87%91%E5%87%A4%E9%<br />B8%9F%E7%BA%B9%E5%85%AD%E6%9B%B2%E9%93%B6%E7%9B%98/19515526</a
        >

        <h4>Song & Yuan</h4>
        <a href="https://www.sohu.com/a/204977499_775399"
          >https://www.sohu.com/a/204977499_775399</a
        >
        <h4>Ming & Qing</h4>
        <a href="https://www.dpm.org.cn/collection/jewelry/230986.html"
          >https://www.dpm.org.cn/collection/jewelry/230986.html</a
        >
        <br />
        <a href="https://www.dpm.org.cn/shows.html#temporary_5"
          >https://www.dpm.org.cn/shows.html#temporary_5</a
        >
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: fangsong;
  src: url("../assets/WenYueGuTiFangSong-min.ttf") format("truetype");
}
#compContainer {
  height: 100%;
  widows: 100%;
  background-color: #0089A7;
  overflow: auto;
  color: white;
  padding-left: 10%;
  padding-right: 10%;
  font-family: fangsong;
  /* text-align: center; */
}

#collapse {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
}

.stg {
  width: 630px;
  transition: 0.5s;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}

.stage {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  height: 100%;
  color: white;
  font-size: 30px;
}

.im {
  width: 15%;
  height: 500px;
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.5s;
  filter: grayscale(1);
  overflow: hidden;
}

.im:hover {
  filter: grayscale(0);
  width: 50%;
}

.desc {
  padding-top: 70%;
  width: 100%;
  height: 120%;
  font-size: 23px;
  opacity: 0;
  /* background-color: rgba(114, 65, 0, 0.616); */
  transition: 0.5s;
  text-align: left;
}

.desc:hover {
  opacity: 1;
}

.title {
  font-size: 2rem;
}

#cite {
  font-size: 25px;
  text-align: center;
}

#toggle {
  cursor: pointer;
}

a{
  color: white !important;
}
</style>

<script>
export default {
  data() {
    return {
      citeList: false,
    };
  },
  methods: {
    toggleCite() {
      if (this.citeList) {
        this.citeList = false;
      } else {
        this.citeList = true;
      }
    },
  },
};
</script>