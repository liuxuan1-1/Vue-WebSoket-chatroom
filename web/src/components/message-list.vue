<template>
  <div class="message-list">
    <div class="border">
      <div class="chat-list-title">
          <img src="../assets/mess.png">
          聊天室
      </div>
      <div class="chat-list">
        <ul>
          <template v-for="(item, index) in message" >
            <li :key="index">
              <img class="avaturl" :src="imgList[item.user.image].imgSrc">
              <span class="nickname">{{item.user.name}}</span>
              {{item.data}}
            </li>
          </template>  
        </ul>
      </div>
      <div class="chat-send">
        <input class="chat-input" v-model="tips" type="text" placeholder="说点什么吧" @keyup.enter="sendMessage">
        <button class="chat-send-button" @click="sendMessage">发送消息</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data: function () {
    return {
      tips: "",
      imgList: [{
        imgSrc: require('../assets/0.jpg')
      },{
        imgSrc: require('../assets/1.jpg')
      },{
        imgSrc: require('../assets/2.jpg')
      },{
        imgSrc: require('../assets/3.jpg')
      },{
        imgSrc: require('../assets/4.jpg')
      },{
        imgSrc: require('../assets/5.jpg')
      },{
        imgSrc: require('../assets/6.jpg')
      },{
        imgSrc: require('../assets/7.jpg')
      },{
        imgSrc: require('../assets/8.jpg')
      },{
        imgSrc: require('../assets/9.jpg')
      }],
    }
  },
  methods: {
    sendMessage: function () {
      if (this.tips === "") {
        alert('不能发送空消息');
        return;
      }
      this.$emit('send', this.tips);
      this.tips = "";
    }
  }
}
</script>

<style>
  .message-list {
    height: 600px;
    padding: 10px 30px;
  }
  .border {
    border: 1px solid #cccccc;
    border-radius: 14px;
    padding: 5px 5px;
    overflow: hidden;
  }
  .itemfade-enter,
  .itemfade-leave-active {
    opacity: 0;
  }
  .chat-list {
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .chat-list-title {
    height: 30px;
    background: #CCCCCC;
    color: #ffffff;
    line-height: 30px;
    padding-left: 25px;
    font-size: 18px;
    border-radius: 14px;
  }
  .chat-list-title img {
    vertical-align: sub;
  }
  .chat-send {
    padding: 10px;
  }
  .chat-input {
    width: 638px;
    height: 27px;
  }
  .chat-send-button {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    width: 80px;
  }
  .chat-send-button:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
  .chat-list li {
    border-bottom: 1px solid #adadad;
    height: 30px;
    line-height: 30px;
    padding: 5px 0;
  }
  .avaturl {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-shadow:0 0 20rpx rgba(0,0,0,.2);
    vertical-align: sub;
  }
  .nickname {
    color: #99ccff;
  }
</style>
