
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 컴포넌트로, 파스칼 케이스를 바로 닫힘으로 만들은 것-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <HelloWorld></HelloWorld> 과 동일하다 -->
    <!-- <hello-world></hello-world> 과 동일하다-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// new Vue({})
export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
