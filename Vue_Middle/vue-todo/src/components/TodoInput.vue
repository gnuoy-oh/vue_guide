<template>
  <div class="inputBox shadow">
    <!-- ** v-model: input form 에 입력된 text 값이 vue instance 안에 바로바로 mapping하는 역할을 한다. -->
    <!-- Instance에서 data 변경이 서로 동기화가 되는 것을 확인할 수 있다. -->
    <!-- === two way binding -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToDo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addToDo">
      <i class="fas fa-plus addBtn" ></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>

      <div slot="body"> 
        아무것도 입력하지 않으셨습니다.
        
      </div>

    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    // local storage에 key와 value를 담는다.
    addToDo() {
      if (this.newTodoItem !== "") {
        console.log(this.newTodoItem);
        // this.$emit('이벤트 이름', 인자1, 인자2 ...)
        // v-on 이벤트가 발생했을 경우. addItem이라는 이벤트가 발생하고 this.newTodoItem인자를 상위로 보내준다.($emit)
        this.$emit("addItem", this.newTodoItem);
        this.clearInput();
      }
      // 입력 값이 비어있는 경우,
      else {
        this.showModal = !this.showModal;
      }
    },
    // input value 값을 지운다.
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input {
  width: 80%;
  height: 45px;
}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
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
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  height: 100%;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>