<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에 발생시킨 이벤트 이름 = "현재 컴포넌트의 메소드 명" -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성 이름"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  data() {},
  methods: {},
  components: {
    TodoHeader,
    TodoFooter,
    TodoList,
    TodoInput
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
