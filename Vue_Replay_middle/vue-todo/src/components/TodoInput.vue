<template>
  <div class="inputBox shadow">
    <!-- input 입력된 텍스트 값을 동적으로 Vue 인스턴스 안에 mapping -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    // input 버튼을 클릭하거나, enter를 하는 순간, addTodo가 동작
    // emit으로 addTodoItem을 App.vue로 보내준다.
    addTodo: function() {
      // 빈값을 저장하지 않았을 경우에만 실행한다.
      if (this.newTodoItem !== "") {
        // addTodoItem 이벤트를 발생 -> App.vue로 올라간다.
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
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
