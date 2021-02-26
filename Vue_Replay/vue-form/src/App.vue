<template>
<form v-on:submit.prevent="submitForm">
  <div>
    <label for="username">id: </label>
    <input type="text" id="username" v-model="username"/>
  </div>
  <div>
    <label for="password">pw: </label>
    <input type="password" id="password" v-model="password" />
  </div>
  <button type="submit">Login</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
  // 컴포넌트간의 데이터가 공유되지 않도록, function으로 새 객체를 return 해주도록 한다.
  data: function(){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm : function() {
      // event.preventDefault();
      
      console.log(this.username, this.password)
      // HTTP 프로토콜을 사용한 HTTP 라이브러리 (데이터를 주고 받고~)
      var url = "https://jsonplaceholder.typicode.com/users";
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(
        function(response){
          console.log(response)
        }
      )
      .catch(
        function(error){
          console.log(error)
        }
      )

    }
  },
  
}
</script>

<style lang="">
  
</style>