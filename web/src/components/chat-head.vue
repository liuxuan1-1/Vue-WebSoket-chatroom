<template>
  
  <div class="banner" >
    <span class="banner-message">{{hello}}</span>
    <img src="../assets/message.png">
  </div>
  
</template>

<script>
  export default {
    data: function () {
      return {
        hello: "Vue+Koa2+WebSocket ChatRoom"
      }
    }
  }
</script>

<style>
  .banner {
    margin: 0 2px;
    height: 80px;
    background: #99ccff;
  }
  .banner-message {
    font-size: 40px;
    line-height: 80px;
    padding-left: 80px;
    color: #ffffff;
  }
  .banner img {
    vertical-align: sub;
  }
</style>
