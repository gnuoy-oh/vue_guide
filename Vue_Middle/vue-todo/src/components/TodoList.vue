<template>
  <div>
    <ul>
      <!-- v-for를 사용해서, todoItems에 담아둔 값을 전부 다 불러와 보여준다. -->
      <!-- v-for를 사용하면, v-bind:key를 사용해서 어떤 값을 넣어줄 지 명시적으로 작성해줘야 한다. -->
      <!-- index는 각각 배열이 위치하는 순서 값을 나타낸다. (0부터 시작) -->
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <i
          class="fas fa-check checkBtn"
          v-bind:class="{checkBtncompleted: todoItem.completed}"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
        <span v-bind:class="{textcompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="romoveTodo(todoItem, index)">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    // localStorage의 키 값을 삭제
    romoveTodo(todoItem, index) {
      // todoItem, index -> key, localstorage 순서 값
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      // 로컬 스토리지의 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      console.log(todoItem, index);
    },
  },
  // lifeCycle의 개념으로, 웹 페이지가 열리는 순간 created 하위 로직들이 실행되는 것
  created() {
    console.log("createds");
    // localStorage의 갯수가 0 이상일 때, for 문을 돌린다.
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // localStorage.getItem(localStorage(i));
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtncompleted {
  color: #b3adad;
}
.textcompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>