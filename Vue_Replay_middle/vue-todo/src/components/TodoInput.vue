<template>
  <div class="inputBox shadow">
    <!-- input 입력된 텍스트 값을 동적으로 Vue 인스턴스 안에 mapping -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        newTodoItem: ""
      }
    },
    methods: {
      addTodo: function () {
        // this === TodoInput Component를 가리킨다.
        // 로컬 스토리지에 저장 - https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
        localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.clearInput();
      },
      clearInput: function () {
        this.newTodoItem = '';
      }
    }

  };

</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background-color: #fff;
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
    background-color: green;
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

</style>
