<template>
  <form action="" v-on:submit="submitForm">
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
export default {
  // component간에 데이터가 공유되지 않도록, 새 객체를 return 하는 구문으로 만들어준다.
  data: function(){
    return{
      userName: '',
      userPw: '',
    }
  },
  methods: {
    submitForm: function(event){
      event.preventDefault();
      
      console.log(this.userName, this.userPw);
      

    }
  }
}
</script>

<style>

</style>
