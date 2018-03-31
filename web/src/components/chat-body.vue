<template>
  <div class="message">
    <message-list :message="msgList" @send="send" class="left"></message-list>
    <user-list :users="usgList" class="right"></user-list>
  </div>
</template>

<script>
import messageList from "./message-list.vue";
import userList from "./user-list.vue";

export default {
  components: {
    "message-list": messageList,
    "user-list": userList
  },
  data: function() {
    return {
      msgList: [],
      usgList: [],
      ws: '',
    };
  },
  created: function() {
    let ws = new WebSocket(`ws://${location.hostname}:3000/ws/chat`);
    this.ws = ws;
    function addToUserList(usgList, user) {
      for (let i = 0, length = usgList.length; i < length; i++) {
        if (usgList[i].id === user.id) {
          return;
        }
      }
      usgList.push(user);
    }
    function addMessage(msgList, msg) {
      msgList.push(msg);
    }
    function removeFromUserList(usgList, user) {
      let target = -1;
      for (let i = 0, length = usgList.length; i < length; i++) {
        if (usgList[i].id === user.id) {
          target = i;
          break;
        }
      }
      if (target >= 0) {
        usgList.splice(target, 1);
      }
    }
    let that = this;
    ws.onmessage = function(event) {
      let data = event.data;
      console.log(data);
      let msg = JSON.parse(data);
      if (msg.type === "list") {
        //that.usgList = msg.data;
      } else if (msg.type === "join") {
        
        addToUserList(that.usgList, msg.user);
        addMessage(that.msgList, msg);
      } else if (msg.type === "left") {
        removeFromUserList(that.usgList, msg.user);
        addMessage(that.msgList, msg);
      } else if (msg.type === "chat") {
        addMessage(that.msgList, msg);
      }
    };
  },
  methods: {
    send: function(value) {
      console.log(value);
      this.ws.send(value.trim());
    }
  }
};
</script>

<style>
.message {
  margin: 10px 2px;
  min-height: 620px;
  position: relative;
}
.left {
  position: absolute;
  left: 80px;
}
.right {
  position: absolute;
  right: 145px;
}
</style>
