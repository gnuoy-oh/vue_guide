<template>
  <div>
    <app-header 
    v-bind:text="headerText"
    v-on:renew = "renewString"
    ></app-header>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader'

// CLI 통해서 컴포넌트를 재사용 할 확률이 높다. 
// data : { : } 객체 리터럴이 아니라, function 함수로 선언해서 return 하도록 한다.
export default {
  components: {
    'app-header' : AppHeader
  },

  methods: {
    renewString: function(){
      this.headerText = 'hi';
    }  
  },

  data(){
    return {
      headerText: 'HeaderText'
    }
  }
};
</script>
<style lang="">
</style>