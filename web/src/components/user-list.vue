<template>
  <div class="user-list">
    <div class="border">
      <div class="user-list-title">
          用户
      </div>
      <div class="user-enum">
        <ul>
          <template v-for="(item, index) in users" >
            <li :key="index">
              <img class="avaturl" :src="imgList[item.image].imgSrc">
              <span class="nickname">{{item.name}}</span>
            </li>
          </template> 
        </ul> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["users"],
  data:  function () {
    return {
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
  }
}
</script>

<style>
  .user-list {
    height: 600px;
    padding: 10px 30px;
    width: 300px;
  }
  .border {
    height: 600px;
    border: 1px solid #cccccc;
    border-radius: 14px;
    padding: 5px 5px;
    overflow: hidden;
  }
  .user-list-title {
    height: 30px;
    background: #CCCCCC;
    color: #ffffff;
    line-height: 30px;
    padding-left: 25px;
    font-size: 18px;
    border-radius: 14px;
  }
  .user-enum li {
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
