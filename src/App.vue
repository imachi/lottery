<template>
  <div id="app">
    <div class="last-week">
      <p class="last-week-text">#先週の担当者</p>
      <span class="last-week-name">{{ beforePeopleNames }}</span>
    </div>
    <div class="choose-btn">
      <button class="choose-btn-item" @click="addPeoplesName">指名する</button>
      <i class="far fa-hand-point-left click-icon faa-horizontal animated"></i>
    </div>
    <div class="staff-wrap">
      <p class="secretary">書記：
        <transition name="fade"><span v-if="syoki" class="secretary-text bkg-line">{{ syoki }}</span></transition>
      </p>
      <p class="mc">司会：
        <transition name="fade"><span v-if="shikai" class="mc-text bkg-line">{{ shikai }}</span></transition>
      </p>
    </div>
    <div class="message">{{ msg }}</div> 
    <form class="participant" @submit.prevent="addName">
      <label>参加者: </label><input type="text" class="input-name" v-model="inputPeoplesName">
    </form>
    <div class="participant-wrap">
      <span class="output-name" v-for="(names, index) in peoples" :key="index">
        {{ names.name }}
        <button class="name-deleate" @click="deleateName(names.name)">
          <i class="far fa-window-close"></i>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      peoples: [],
      lastWeekPeoples: [],
      writeLastWeekPeoples: [],
      syoki: '',
      shikai: '',
      msg: '',
      beforePeopleNames:'',
      inputPeoplesName: '',
    }
  },

  created() {
    const storePeoples = localStorage.getItem('peoples');
    const storeLastWeekPeoples = localStorage.getItem('lastweekName');
    if(storePeoples) {
      this.peoples = JSON.parse(storePeoples);
    }
  },

  computed: {
    shufflePeoples() {
      return this.returnRandomNum(this.peoples);
    }
  },

  mounted() {
    if(!localStorage.getItem('lastweekWriteName')) {
      return;
    }
    const getStoreLastName = localStorage.getItem('lastweekWriteName'); 
    this.beforePeopleNames = getStoreLastName;
  },

  methods: {
    returnRandomNum(array) {
      for(let i = array.length -1; i >= 0; i--) {
        const randomPeoples = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomPeoples]] = [array[randomPeoples], array[i]];
      }
      return array;
    },

    addPeoplesName() {
      if(!this.shufflePeoples.length) {
        return false;
      }
      this.syoki = this.shufflePeoples[0].name + 'さん';
      this.shikai = this.shufflePeoples[1].name + 'さん';
      this.msg = 'よろしくおねがいしますm(..)m';
      const cutOutSyoki = this.syoki.slice(0, -2);
      const cutOutShikai = this.shikai.slice(0, -2);
      localStorage.setItem('lastweekName', JSON.stringify([{name: cutOutSyoki}, {name: cutOutShikai}]));
      localStorage.setItem('lastweekWriteName', [this.syoki, this.shikai]);
    },

    deleateName(name) {
      this.peoples = this.peoples.filter(people => people.name !== name);
      localStorage.setItem('peoples', JSON.stringify(this.peoples));
    },

    addName() {
      this.peoples.push({name: this.inputPeoplesName});
      localStorage.setItem('peoples', JSON.stringify(this.peoples));

      this.inputPeoplesName = '';
    },
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin: auto;
  margin-top: 60px;
}
.last-week {
  margin-bottom: 20px;
}
.last-week-text {
  margin: 0;
  margin-bottom: 20px;
  font-size: 3vw;
}
.last-week-name {
  font-size: 2vw;
}
.navy {
  color: #35495e;
}
.bkg-line {
  background: linear-gradient(transparent 70%, #f2b3a2 70%);
}
.choose-btn {
  margin-bottom: 20px;
}
.choose-btn-item {
  appearance: none;
  outline: none;
  cursor: pointer;
  width: 39%;
  height: 70px;
  border: solid 3px #ee8d72;
  border-radius: 11px;
  font-size: 2vw;
  font-weight: bold;
  color: #ee8d72;
  background-color: #fffbf4;
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 1), inset 0 -3px 0 rgba(0, 0, 0, 0.05);
}
.choose-btn-item:active {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.50);
}
.click-icon {
  font-size: 50px;
}
.staff-wrap {
  display: flex;
  width: 70%;
  margin: auto;
}
.staff-wrap p {
  width: 50%;
  text-align: left;
  font-size: 3vw;
}
.message {
  font-size: 3vw;
  font-weight: bold;
}
.word-b {
  word-break: keep-all;
}
.output-name {
  font-size: 2vw;
  margin-right: 4%;
  margin-bottom: 10px;
}
.output-name i {
  font-size: 2vw;
}
.participant {
  margin: 35px 0;
}
form label {
  font-size: 2vw;
}
form input {
  width: 40%;
  height: 3vw;
  font-size: 2vw;
  border-radius: 5px;
  outline: none;
}
.participant-wrap {
  width: 70%;
  margin: auto;
}
.name-deleate {
  border: none;
  appearance: none;
  outline: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
