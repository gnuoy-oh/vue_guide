import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp: todoApp
  }
  // state: {
  //   headerText: "Header Text is Here",
  //   todoItems: storage.fetch()
  // }
  // getters: getters,
  // mutations: mutations
});
