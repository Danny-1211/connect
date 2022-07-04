<template>
  <div class="container">
    <h1>連連看</h1>
    <button type="button" @click="startGame">開始遊戲</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame () {
      this.$router.push('/game');
    }
  }
};
</script>
