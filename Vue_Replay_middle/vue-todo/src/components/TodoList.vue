<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- (todoItem, index) => 각 item의 (할일 이름, 순서) -->
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, index })"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>

        <!-- (todoItem, index) =>  -->
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem"
    })
    // Helper 함수는 인자를 선언하지 않아도, 호출하는 곳에서 인자를 넘기면(todoItem, index), 암묵적으로 그 인자를 전달한다. 그치만 위에서는 (todoItem, index) 객체 두 개를 넘기기 때문에, 디스트럭쳐링 형태로 인자 두 개 를 넘겨준다.
    // 아래 코드 -> 위와 같은 기능이지만 Helper함수를 사용하지 않았음
    // removeTodo(todoItem, index) {
    // this.$emit("removeItem", todoItem, index);
    //   this.$store.commit("removeOneItem", { todoItem, index });
    // },

    // checkbox 버튼을 클릭했을 때, toggleComplete 함수가 실행되고,
    // App.vue에서 toggleItem 이벤트와 todoItem / index 인자를 전달한다.
    // 아래 코드 -> 위와 같은 기능이지만 Helper함수를 사용하지 않았음
    // toggleComplete(todoItem, index) {
    // this.$emit("toggleItem", todoItem, index);
    // this.$store.commit("toggleOneItem", { todoItem, index });
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(["storedTodoItems"])
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

/* transition effect 추가! */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
