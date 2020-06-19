<template>
  <div>
    <ul>
      <!-- todoItem, index -> v-for가 몇 개 이건 list item 의 index 순서가 자동으로 지정된다. -->
      <li v-for="(todoItem , index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <!-- complted false일 경우, class 제거하고 true일 경우 class-->
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <!-- html 속성에 동적인 값을 부여한다. parse면 textCompleted 이 사라지고, true면 textCompleted 추가된다. -->
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <!-- // 어느 휴지통을 클릭해도 반응한다. 
             // 혹, 첫번째 li를 클릭했을 때 li 의 첫번째만 삭제해줄 수 없나? -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt addBtn"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// TodoInput Component로컬스토리지에서 저장한 내용을 List에서 보여주는 기능을 구현한다.
export default{
  props: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index){
      console.log(todoItem, index);
      // localStorage의 key 를 제거한다.
      localStorage.removeItem(todoItem);
      // script 영역에 있는 li 리스트도 삭제한다.
      this.todoItmes.splice(index, 1);
    },

    toggleComplete: function(todoItem, index){
      console.log(todoItem, index);
      // 설정값 바꿈
      todoItem.completed = !todoItem.completed;
      // 업데이트 기능이 없기 때문에 바꾼 설정값을 지우고. 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      // 바뀐 내용을 다시 저장한다.
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },

}
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
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
