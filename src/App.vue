<template>
  <div id="app">
    <div class="seniority"><p>先週の担当者：</p><span>{{ beforePeopleNames }}</span></div>
    <div class="dis-f">
      <button @click="localStorageFind()">指名する</button>
      <i class="far fa-hand-point-left click-icon faa-horizontal animated"></i>
    </div>
    <div class="dis-f">
      <p>書記：<span>{{ syoki }}</span></p>
      <p>司会：<span>{{ shikai }}</span></p>
    </div>
    <div class="message">{{ msg }}</div> 
    <div>
      <label v-for="(people,index) in initialPeoples" :key="index">
        <input type="checkbox" v-model="people.checked" @change="peopleFilter" /> {{ people.name }}
      </label> 
    </div>
  </div>
</template>

<script>

const people = [
  {name: '一朗さん', checked: false},
  {name: '二郎さん', checked: false},
  {name: '三郎さん', checked: false},
  {name: '四郎さん', checked: false},
  {name: '五郎さん', checked: false},
  {name: '六郎さん', checked: false},
  {name: '七郎さん', checked: false},
  {name: '八郎さん', checked: false},
  {name: '九郎さん', checked: false},
  {name: '十郎さん', checked: false},
  {name: '十一郎さん', checked: false}, 
  {name: '十二郎さん', checked: false},
];

export default {
  name: 'app',
  data() {
    return {
      initialPeoples: people,
      peoples: people,
      syoki: '',
      shikai: '',
      msg: '',
      beforePeoplesList: [],
      beforePeopleNames:'',
    }
  },
  
  mounted() { // 前回の担当者をブラウザに表示
    const getData = localStorage.getItem('name'); 
    const formationText = getData.split(',', 2);
    this.beforePeopleNames = formationText.join(', ');
  },
  methods: {
    peopleFilter() { // チェック状態の配列を生成
      this.peoples = this.initialPeoples.filter(people => people.checked);
    },

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
      this.returnRandomNum(this.peoples);
    },

    sortLottery(sort) { //前回の担当を除いたオブジェクトから抽選
      const peoples = this.peoples;
      let copyPeoples = [...peoples];
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
      this.syoki = targetAry[0].name;
      this.shikai = targetAry[1].name;
      this.msg = 'よろしくおねがいしますm(..)m';

      this.beforePeoplesList = [targetAry[0].name, targetAry[1].name];

      const emptyObj = [];
      emptyObj.push(this.beforePeoplesList);
      const setItem = JSON.stringify(this.beforePeoplesList);
      localStorage.setItem('name', this.beforePeoplesList);   
    },
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
  margin-top: 60px;
}
.dis-f {
  display: flex;
  width: 330px;
  margin: auto;
  margin-bottom: 20px;
}
.dis-f p {
  width: 50%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #35495e;
}
.dis-f span {
  background: linear-gradient(transparent 70%, #f2b3a2 70%);
}
.dis-f button {
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
.dis-f button:active {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.50);
}
.click-icon {
  font-size: 50px;
}
.message {
  font-size: 22px;
  font-weight: bold;
}
.seniority {
  margin-bottom: 30px;
}
.seniority p {
  font-weight: bold;
  margin: 0;
}
.seniority span {
  font-weight: bold;
}
</style>
