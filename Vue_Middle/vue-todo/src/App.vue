<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명" -->
    <TodoInput></TodoInput>
    <!-- v-bind: 내려보낼 props 속성 이름 = "상위 컴포넌트의 데이터 이름"   -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  // 원래는 TodoList에 있던 속성들을 App으로 가져와서 List, input에 공통으로 사용하도록 한다.
  // 그리고 위에 TodoList에 props속성을 사용해서 하위로 데이터를 내려준다.
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem: function() {
      // 기존에 text 2개 값 + text가 체크 됐는지 안됐는지 boolean 값을 넣어주는 것.
      var obj = { completed: false, item: this.newTodoItem };
      console.log(this.newTodoItem);
      // 저장하는 로직을 넣어줘서, Input 의 text를 비워준다.
      // localStorage.setItem('key', 'value')
      // 자바스크립트 객체로 들어갔기 때문에 value 값을 확인할 수 없다.
      // JSON.stringfy(obj) -> 자바스크립트 객체(Object)를 문자열(string)으로 변환
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
    },
  },
  // created: function({}) Vue 라이프 사이클에서 사용하는 것으로 Instance가 생성되자마자, 안에 logic이 실행된다.
  created() {
    // console.log('created')
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        // console.log(localStorage.key(i));
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // 문자열을 object로 돌리기 위헤 JSON.parse를 사용한다
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
          console.log(this.todoItems);
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명: 컴포넌트 내용
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 280px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
