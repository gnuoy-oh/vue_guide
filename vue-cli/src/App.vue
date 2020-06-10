
<template>
<!-- template 하위는 하나의 element로만 작업을 해야한다. -->
  <div>
    <!-- v-bind:props속성 이름 = "상위 컴포넌트의 데이터 이름" -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"
    ></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

// === var AppHeader = {
// template: '<header><h1>Header</h1></header>'
// }

export default{
  // 기존 작업 방식
  // new Vue({
  //     data: {

  //   }
  // })
  // 객체 리터럴이 아니고, 함수를 연결하고 return으로 새 객체를 반환하는 형태로 작업한다.
  data: function(){
    return {
      // AppHeader 에 주입해준다.
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function(){
      this.str = "hoho"

    }
  }
}

</script>

<style>

</style>