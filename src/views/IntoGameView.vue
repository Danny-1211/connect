<template>
  <div class="bar">
    <div class="time">
      <h1>10:00</h1>
    </div>
    <div class="point">
      <h1>10</h1>
    </div>
  </div>
  <div class="container">
    <table>
      <tr class="row"  v-for="(row, index) in rowCount" :key="row + index" >
        <td class="item" v-for="(col, index) in columnCount" :key="col + index ">{{ arrayContainer[col-1]}}
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
      dataSet: [],
      arrayContainer: []
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
</style>
