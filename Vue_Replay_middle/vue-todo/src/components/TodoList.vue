<template>
  <div>
    <ul>
      <!-- (todoItem, index) => 각 item의 (할일 이름, 순서) -->
      <li
        v-for="(todoItem, index) in propsdata"
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
  props: ["propsdata"],
  methods: {
    // remove 버튼을 클릭했을 때, removeTodo 함수가 실행되고,
    // App.vue로 removeItem 이벤트와 todoItem / index 인자를 전달한다.
    removeTodo: function(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    },
    // checkbox 버튼을 클릭했을 때, toggleComplete 함수가 실행되고,
    // App.vue에서 toggleItem 이벤트와 todoItem / index 인자를 전달한다.
    toggleComplete: function(todoItem, index) {
      this.$emit("toggleItem", todoItem, index);
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
