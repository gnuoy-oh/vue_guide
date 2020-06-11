import Vue from 'vue'
// Component file을 불러왔다.
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 불러온 Component file (App.vue)를 렌더링 한다.
  render: h => h(App),
}).$mount('#app')

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
  // components: {
  //   'app': App
  // }
}).$mount('#app')

// new Vue({
//   el: '#App',
//   render: h => h(App)
// })
