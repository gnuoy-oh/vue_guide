<template>
  <div class="inputBox shadow">
    <!-- v-model: input에 입력된 값이 instance 안에 바로바로 mapping하는 역할 -->
    <!-- Instance에서 data 변경이 서로 동기화가 되는 것을 확인할 수 있다. -->
    <!-- === two way binding -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default{
  data: function(){
    return {
      newTodoItem: ""
    }
  },
  methods: {
    // LocalStorage 
    addTodo: function(){
      // this -> 현재 Instance (===TodoInput 자체를 가리킨다.)
      console.log(this.newTodoItem);
      // 저장하는 로직을 넣어줘서, Input 의 text를 비워준다.
      // 로컬 스토리지의 setItem을 사용해서 로컬에 저장한다.
      // 개발자 도구 -> Application -> Local Storage 에서 확인 가능
      // localStorage.setItem('key', 'value')
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
  // Input Clear
    clearInput: function(){
      this.newTodoItem='';
    }

  }

}
</script>

<style scoped>
input{
  width: 80%;
  height: 45px;
}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  height: 100%;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>