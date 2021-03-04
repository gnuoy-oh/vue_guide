<template>
  <div>
    <ul>
      <!-- (todoItem, index) => 각 item의 (할일 이름, 순서) -->
      <li
        v-for="(todoItem, index) in todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>

        <!-- (todoItem, index) =>  -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    };
  },
  // LifeCycle -> 인스턴스가 생성되자마자 하위 로직이 실행되는 훅 (로직이 호출된다)
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // localStorage의 value가 떨어진다.
          // localStorage.getItem(localStorage.key(i));
          // JSON.parse === string된 리스트를 객체(Object)로 가져오기 위한 변환 방법
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      // localStorage.removeItem('key') => localStorage에 해당하는 key를 지운다 (value도 지워짐)
      localStorage.removeItem(todoItem);
      // 기존 배열을 지우고 반환한다.
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.completed);
      // 바뀐 내용을 localStorage에 새로 저장한다.
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align-last: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: #fff;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: green;
  margin-right: 5px;
  cursor: pointer;
}

.checkBtnCompleted {
  color: black;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
</style>
