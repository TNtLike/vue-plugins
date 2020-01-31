<template>
  <div id="loadingPanel" v-if="ifShow" :style="{background:backgroundColor}">
    <div class="container">
      <div class="art"></div>
      <p class="tips" :style="{color:fontColor,fontSize:fontSize + 'px'}">{{tips}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FullScreenLoading",
  data() {
    return {
      ifShow: false,
      tips: "loading",
      fontSize: 14,
      fontColor: "#ffffff",
      backgroundColor: "#0B0B1496"
    };
  }
};
</script>
<style src="./css/FullScreenLoading.css">
</style>