<template>
  <div class="bar">
    <div class="time">
      <h1>15:00</h1>
    </div>
    <div class="point">
      <h1>10</h1>
    </div>
  </div>
  <div class="container">
    <table>
      <tr class="row"  v-for="(row, index) in arrayContainer" :key="row + index" >
        <td v-for="(col, index) in arrayContainer[index]" :key="col + index ">
          <button class="item">{{col}}</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rowCount: 6,
      columnCount: 6,
      randomMin: 1,
      randomMax: 9,
      dataSet: [], // 負責將亂數放到這個陣列
      arrayContainer: [] // 棋盤
    };
  },
  methods: {
    getRandomInt (minNumber, maxNumber) { // 產生隨機數字
      const min = Math.ceil(minNumber);
      const max = Math.floor(maxNumber);
      return Math.floor(Math.random() * max) + min;
    },
    initRandomValue () { // 產生棋盤 6*6
      for (let i = 0; i < this.rowCount; i++) {
        for (let i = 0; i < this.columnCount; i++) {
          this.dataSet.push(this.getRandomInt(this.randomMin, this.randomMax));
        }
        this.arrayContainer = [this.dataSet.slice(0, 6), this.dataSet.slice(6, 12), this.dataSet.slice(12, 18), this.dataSet.slice(18, 24), this.dataSet.slice(24, 30), this.dataSet.slice(30, 36)];
      }
    },
    judgeSameNumber (point1, point2) { // 判斷選取的兩個是否為同樣數字
      if (point1 === point2) {
        console.log(true);
        return true;
      } else {
        console.log('no');
      }
    }
  },
  mounted () {
    this.initRandomValue();
    console.log(this.arrayContainer);
  }
};
</script>

<style lang="scss" scoped>
  .bar{
    margin: 5vh auto;
    width: 1080px;
    height: 100px;
    display: flex;
    justify-content: space-around;
  }
  .time, .point{
    font-size: 5rem;
  }
  .container{
    margin: 10vh auto;
    width:300px;
    height:300px;
    display: flex;
    flex-wrap: wrap;
  }
  .row{
    display: flex;
  }
  .item{
    width:48px;
    height:48px;
    border: 1px black solid;
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .item:focus{
    background-color: #8C1C46;
  }
</style>
