<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>
      <div class="left-side">
        <span class="title">
          Welcome to your new project!
        </span>
        <system-information></system-information>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">Getting Started</div>
          <p>
            electron-vue comes packed with detailed documentation that covers everything from
            internal configurations, using the project structure, building your application,
            and so much more.
          </p>
          <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button><br><br>
        </div>
        <div class="doc">
          <div class="title alt">Other Documentation</div>
          <button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>
          <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>
        </div>
      </div>
    </main>

    <div class="demo">
      <div class="row">
        名称：<input type="text" v-model="zip">
        <span class="btn" @click="oncat">cat</span>
      </div>
      <div class="row">
        名称：<input type="text" v-model="video">
        <select v-model="videoType">
          <option value="mp5">mp5</option>
          <option value="mp4">mp4</option>
          <option value="avi">avi</option>
        </select>
        <div class="time">
          开始时间：
          <input type="text" class="number" maxlength="2" v-model="sh">时
          <input type="text" class="number" maxlength="2" v-model="sm">分
          <input type="text" class="number" maxlength="2" v-model="ss">秒
        </div>
        <div class="time">
          结束时间：
          <input type="text" class="number" maxlength="2" v-model="eh">时
          <input type="text" class="number" maxlength="2" v-model="em">分
          <input type="text" class="number" maxlength="2" v-model="es">秒
        </div>
        <span class="btn" @click="onffmpeg">ffmepg</span>
      </div>
    </div>
  </div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import { cat, ffmpeg } from './cmd'

export default {
  name: 'landing-page',
  components: { SystemInformation },
  data () {
    return {
      zip: '',
      video: '',
      videoType: 'mp4',
      sh: '0',
      sm: '0',
      ss: '0',
      eh: '0',
      em: '0',
      es: '0',
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    oncat () {
      cat({
        name: this.zip,
        onerror: err => {
          console.log(err, '--------------')
          alert('error')
        }
      })
    },
    onffmpeg () {
      ffmpeg({
        name: this.video, 
        type: this.videoType,
        sTime: [this.sh, this.sm, this.ss], 
        eTime: [this.eh, this.em, this.es],
        onerror: err => {
          console.log(err, '--------------')
          alert('error')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.demo{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  .row{
    width: 100%;
    display: flex;
    align-items: center;
    & > * {
      margin: 0 .25rem;
    }
    &+.row{
      margin-top: .5rem;
    }
    .btn{
      padding: 0.25em 1em;
      color: #42b983;
      background-color: transparent;
      border: 1px solid #4fc08d;
      border-radius: 2em;
      cursor: pointer;
      display: inline-block;
    }
    .time{
      .number{
        width: 30px;
        text-align: center;
      }
    }
  }
}
</style>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
