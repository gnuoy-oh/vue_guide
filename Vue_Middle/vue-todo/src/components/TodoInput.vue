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
      // addTodo (엔터, 클릭) input 값이 있으면 다음을 실행한다.
      if(this.newTodoItem !== ''){
        // this.$emit('event이름', this.newTodoitem)
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      }
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