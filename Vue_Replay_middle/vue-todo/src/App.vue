<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에 발생시킨 이벤트 이름 = "현재 컴포넌트의 메소드 명" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성 이름"></TodoList> -->
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
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addOneItem(todoItem) {
      const obj = { completed: false, item: todoItem };
      // this === TodoInput Component를 가리킨다.
      // 로컬 스토리지에 저장 - https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      // localStorage.removeItem('key') => localStorage에 해당하는 key를 지운다 (value도 지워짐)
      localStorage.removeItem(todoItem.item);
      // 기존 배열을 지우고 반환한다.
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.completed);
      // 바뀐 내용을 localStorage에 새로 저장한다.
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // LifeCycle -> 인스턴스가 생성되자마자 하위 로직이 실행되는 훅 (로직이 호출된다)
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // localStorage의 value가 떨어진다.
          // localStorage.getItem(localStorage.key(i));
          // JSON.parse === string된 리스트를 객체(Object)로 가져오기 위한 변환 방법
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
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
