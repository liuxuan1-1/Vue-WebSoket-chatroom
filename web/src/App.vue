<template>
  <div id="app">
    <chat-head></chat-head>
    <chat-body></chat-body>
  </div>
</template>

<script>
import chatHead from './components/chat-head';
import chatBody from './components/chat-body';


export default {
  components: {
    "chat-head": chatHead,
    "chat-body": chatBody,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    color: #404040;
    font-family: '微软雅黑light';
  }
  ul, ol, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  body {
    width: 100%;
    height: 100%;
  }

</style>
