import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  // fetch: function(){} 와 같음!
  fetch() {
    // LifeCycle -> 인스턴스가 생성되자마자 하위 로직이 실행되는 훅 (로직이 호출된다)
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // localStorage의 value가 떨어진다.
          // localStorage.getItem(localStorage.key(i));
          // JSON.parse === string된 리스트를 객체(Object)로 가져오기 위한 변환 방법
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
      return arr;
    }
  }
};

export const store = new Vuex.Store({
  state: {
    headerText: "Header Text is Here",
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
