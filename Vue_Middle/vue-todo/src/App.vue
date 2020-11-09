<template>
<!-- **컴포넌트 별 메서드, 데이터, lifecycle hook 등의 조작을 App.vue에서 작업한다. === container component** -->
  <div id="app">
    <!-- **하위 컴포넌트는 presentation component로 마크업 / UI 적으로 표현만 하는 컴포넌트다.** -->
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명" -->
    <!-- 하위 addItem이벤트가 실행되면 현재 컴포넌트에서 addOneItem이 실행된다. -->
    <TodoInput v-on:addItem="addOneItem"></TodoInput>
    <!-- v-bind: 내려보낼 props 속성 이름 = "현재 컴포넌트의 데이터 이름"   -->
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
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
    // TodoInput에서 받아온 this.newTodoItem === todoItem
    addOneItem(todoItem) {
      // 기존에 text 2개 값 + text가 체크 됐는지 안됐는지 boolean 값을 넣어주는 것.
      const obj = { completed: false, item: todoItem };
      console.log(this.newTodoItem);
      // 저장하는 로직을 넣어줘서, Input 의 text를 비워준다.
      // localStorage.setItem('key', 'value')
      // 자바스크립트 객체로 들어갔기 때문에 value 값을 확인할 수 없다.
      // JSON.stringfy(obj) -> 자바스크립트 객체(Object)를 문자열(string)으로 변환
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      console.log("hoho");
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.item);
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬 스토리지의 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      console.log(todoItem, index);
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // lifeCycle의 개념으로, 웹 페이지가 열리는 순간 created 하위 로직들이 실행되는 것
  created() {
    console.log("created");
    // localStorage의 갯수가 0 이상일 때, for 문을 돌린다.
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명: 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
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
