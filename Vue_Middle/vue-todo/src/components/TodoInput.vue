<template>
  <div class="inputBox shadow">
    <!-- ** v-model: input form 에 입력된 text 값이 vue instance 안에 바로바로 mapping하는 역할을 한다. -->
    <!-- Instance에서 data 변경이 서로 동기화가 되는 것을 확인할 수 있다. -->
    <!-- === two way binding -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToDo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addToDo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    // local storage에 key와 value를 담는다.
    addToDo() {
      if (this.newTodoItem !== "") {
        console.log(this.newTodoItem);
        // check가 됐는지 안됐는지 Boolean: completed
        var obj = { completed: false, item: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    // input value 값을 지운다.
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input {
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
  background: linear-gradient(to right, #6478fb, #8763fb);
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