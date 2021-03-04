<template>
  <div>
    <ul>
      <!-- (todoItem, index) => 각 item의 (할일 이름, 순서) -->
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        {{ todoItem }}
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
    data: function () {
      return {
        todoItems: []

      }
    },
    // LifeCycle -> 인스턴스가 생성되자마자 하위 로직이 실행되는 훅 (로직이 호출된다)
    created: function () {
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            this.todoItems.push(localStorage.key(i));
            // console.log(localStorage.key(i))
          }
        }
      }
    },
    methods: {
      removeTodo: function(todoItem, index){
        console.log(todoItem, index);
        // localStorage.removeItem('key') => localStorage에 해당하는 key를 지운다 (value도 지워짐)
        localStorage.removeItem(todoItem);
        // 기존 배열을 지우고 반환한다.
        this.todoItems.splice(index, 1);
      }
    }
  };

</script>

<style>
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
    color: yellow;
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
