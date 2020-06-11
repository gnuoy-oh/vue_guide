<template>
  <form action="" v-on:submit.prevent="submitForm">
    <div>
      <label for="userName">id: </label>
      <input type="text" id="userName" v-model="userName" />
    </div>
    <div>
      <label for="userPw">password: </label>
      <input type="password" id="userPw" v-model="userPw"/>
    </div>
    <button type="submit">
      login
    </button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  // component간에 데이터가 공유되지 않도록, 새 객체를 return 하는 구문으로 만들어준다.
  data: function(){
    return{
      userName: '',
      userPw: '',
    }
  },
  methods: {
    submitForm: function(){
      // vanilla JS 방식
      // event.preventDefault();
      console.log(this.userName, this.userPw);

      // 서버에 전송하기
      // npm i axios -> 브라우저에서 서버로 데이터를 주고받기 위한 용도의 Library
      // post -> 데이터를 생성하거나 조작하는 Method
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        userName: this.userName,
        userPw: this.userPw
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
