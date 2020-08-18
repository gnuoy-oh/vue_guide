<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- v-for를 사용해서, todoItems에 담아둔 값을 전부 다 불러와 보여준다. -->
      <!-- v-for를 사용하면, v-bind:key를 사용해서 어떤 값을 넣어줄 지 명시적으로 작성해줘야 한다. -->
      <!-- index는 각각 배열이 위치하는 순서 값을 나타낸다. (0부터 시작) -->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow" > 
        <i
          class="fas fa-check checkBtn"
          v-bind:class="{checkBtncompleted: todoItem.completed}"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
         <span v-bind:class="{textcompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  // 할일 목록의 data들, 배열을 App.vue으로 보내준다.
  props: ['propsdata'],
  methods: {
    // localStorage의 키 값을 삭제
    removeTodo(todoItem, index) {
      // v-on 이벤트가 발생했을 경우, removeItem이라는 이벤트가 발생하고
      // console.log(todoItem);
      // todoItem 과 index 인자를 상위 App.vue으로 올려준다.
      this.$emit('removeItem', todoItem, index);
    },
    // v-on:toggleComplete
    toggleComplete(todoItem, index) {
      this.$emit('toggleItem', todoItem, index);
    },
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
/* list transition */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>