<template>
  <div id="app">
    <div class="last-week"><p class="last-week-text">#先週の担当者</p><span class="last-week-name">{{ beforePeopleNames }}</span></div>
    <div class="choose-btn">
      <button class="choose-btn-item" @click="localStorageFind()">指名する</button>
      <i class="far fa-hand-point-left click-icon faa-horizontal animated"></i>
    </div>
    <div class="staff-wrap">
      <p class="secretary">書記：<span class="secretary-text bkg-line">{{ syoki }}</span></p>
      <p class="mc">司会：<span class="mc-text bkg-line">{{ shikai }}</span></p>
    </div>
    <div class="message">{{ msg }}</div> 
    <form class="participant" @submit.prevent="addName">
      <label>参加者: </label><input type="text" class="input-name" v-model="inputPeoplesName">
    </form>
    <div class="participant-wrap">
      <span class="output-name" v-for="(names, index) in peoplesObj" :key="index">{{ names.name }}<button @click="deleateName(names.name)">×</button></span>
    </div>
  </div>
</template>
<script>

const people = [];

export default {
  name: 'app',
  data() {
    return {
      initialPeoples: people,
      peoplesObj: people,
      syoki: '',
      shikai: '',
      msg: '',
      beforePeoplesList: [],
      beforePeopleNames:'',
      inputPeoplesName: '',
    }
  },
  
  mounted() { // 前回の担当者をブラウザに表示
  if(!localStorage.getItem('name')) {
    return;
  }
    const getData = localStorage.getItem('name'); 
    const formationText = getData.split(',', 2);
    this.beforePeopleNames = formationText.join(', ');
    this.peoplesObj = JSON.parse(localStorage.getItem('people'));
  },
  methods: {
    returnRandomNum(array) { //randomな整数を返す
      for(let i = array.length -1; i >= 0; i--) {
        const randomPeoples = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomPeoples]] = [array[randomPeoples], array[i]];
      }
      this.addPeopleName(array);
    },

    localStorageFind() { //windowload時にlocalstorageのnameキーを見に行く
      if(!localStorage.getItem('name')) {
        this.allLottery();
      } else { //localStorageの文字列をオブジェクトに形成
        const getData = localStorage.getItem('name'); 
        const formationText = getData.split(',', 2);
        const createObj = [{name:formationText[0]},{name:formationText[1]}];
        this.sortLottery(createObj);
      }
      return;
    },
    
    allLottery() { //全員のオブジェクトから抽選
      this.returnRandomNum(this.peoplesObj);
    },

    sortLottery(sort) { //前回の担当を除いたオブジェクトから抽選
      const peoples = this.peoplesObj;
      let copyPeoples = [...this.peoplesObj];
      let filteredAry;
      for(var num in sort) {
        filteredAry = copyPeoples.filter(people => {
          return people.name !== sort[num].name;
        });
        copyPeoples = filteredAry;
      };
      this.returnRandomNum(filteredAry);
    },

    addPeopleName(targetAry) { //viewに担当者を渡し、localstorageに登録
      this.syoki = targetAry[0].name + 'さん';
      this.shikai = targetAry[1].name + 'さん';
      this.msg = 'よろしくおねがいしますm(..)m';

      this.beforePeoplesList = [targetAry[0].name + 'さん', targetAry[1].name + 'さん'];

      const emptyObj = [];
      emptyObj.push(this.beforePeoplesList);
      const setItem = JSON.stringify(this.beforePeoplesList);
      localStorage.setItem('name', this.beforePeoplesList);
    },
    addName() {
      this.peoplesObj.push({name: this.inputPeoplesName});
      localStorage.setItem('people', JSON.stringify(this.peoplesObj));
      
      this.inputPeoplesName = '';

    },
    deleateName(name) {
      this.peoplesObj = this.peoplesObj.filter(people => people.name !== name);
      localStorage.setItem('people', JSON.stringify(this.peoplesObj));
    }
  },
}


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
.last-week-text {
  font-size: 18px;
}
.navy {
  color: #35495e;
}
.bkg-line {
  background: linear-gradient(transparent 70%, #f2b3a2 70%);
}
.choose-btn-item {
  appearance: none;
  outline: none;
  cursor: pointer;
  width: 280px;
  height: 70px;
  border: solid 3px #ee8d72;
  border-radius: 11px;
  font-size: 22px;
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
  width: 330px;
  margin: auto;
}
.staff-wrap p {
  width: 50%;
  text-align: left;
}
.message {
  font-size: 22px;
  font-weight: bold;
}
.word-b {
  word-break: keep-all;
}
.output-name {
  margin-right: 20px;
  margin-bottom: 10px;
}
.participant {
  margin: 30px 0;
}
form label {
  font-size: 14px;
}
form input {
  width: 200px;
  height: 2em;
  border-radius: 5px;
  outline: none;
}
.participant-wrap {
  width: 330px;
  margin: auto;
}
</style>
