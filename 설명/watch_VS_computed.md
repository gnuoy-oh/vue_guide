# watch와 computed에 대해서

## computed

- **data의 속성을 받아서 단순한 값을 계산하는 개념이라고 생각하면 된다.**

- 템플릿의 데이터 표현을 보다 더 직관적이고 간결하게 도와주는 속성으로, 연산 결과를 캐싱해주는 속성이다.

- 뷰 템플릿 코드의 가독성을 높여줄 뿐만 아니라, computed의 속성의 대상으로 정한 data 속성(num)이 변했을 때, 이를 감지하고 실시간으로 자동 연산해주는 장점이 있다.

- computed 속성은 인자를 받지 않는다!

- 컴퓨팅 리소스가 많이 필요한 로직을 정의하지 않는다! 너무 많은 연산을 템플릿 안에서 하면 코드가 비대해지고 유지보수가 여려워진다.

```
// ex01
<div id="app">
  {{ doubleNum }}
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      num: 10
    }
    computed: {
      doubleNum: function(){
        return this.num * 2
      }
    }
  })
</script>

// ex02
<div id="example">
  <p>메세지: "{{ message }}"</p>
  <p>역순 메세지: "{{ reverseMessage }}"</p>
</div>

<script>
  new Vue({
    el: '#example',
    data: {
      message: '안녕하세요!'
    },
    computed: {
      <!-- 계산된 getter -->
      reverseMessage: function(){

        return this.message.split('').reverse().join('')
      }
    }
  })
</script>
```

## watch

- 특정 데이터의 변화를 감지해서 자동으로 특정 로직을 수행해주는 역할을 한다.

- state나 props를 감지하고, 해당 값이 변경되었을 때의 행동을 지정할 수 있는 속성이다.

```
<div id="app">
  {{ message }}
</div>

<script>
new Vue({
  el: '#app',

  data: {
    message: 'Hello'
  },

  watch: {
    message: function(value, oldValue){
      console.log(value);
    }
  }
})
</script>
```

- watch 속성에 methods 함수를 연결해보자!

```
new Vue({
  data: {
    message: 'Hello'
  },

  methods: {
    logMessage: function(){
      console.log(this.message)
    }
  },

  watch: {
    message: function(){
      logmessage
    }
  }

})
```

## watch를 computed로 변경하기

- 두 가지 모두 같은 결과를 내지만, watch는 언제 변하는지 예측이 어려울때 많이 사용한다. 예를 들어 비동기 통신으로, 우리가 어떤 데이터를 요청했을 때 값이 1초뒤에 올지, 2초뒤에 올지 예측이 어려울 때 그 값을 watch를 통해 감시하고 있다가 해당 값에 대한 응답이 왔을 때 후처리를 해줄 수 있다.

- computed는 복잡한 연산같은 것을 캐싱처리하기 위해 사용된다.

~~~
<template>
  <div id="app">
    <input v-model="firstname" />
    <input v-model="lastname" />

    <h2>full name</h2>
    <span>{{fullname}}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      firstname: '',
      lastname: ''
    }
  },
  computed: {
    fullname(){
      return `${this.firstname} ${this.lastname}`
    }
  }
}
</script>
~~~

### 참고

- [computed](https://joshua1988.github.io/vue-camp/syntax/computed.html#computed-%EC%86%8D%EC%84%B1-%EC%98%88%EC%8B%9C)

- [watch](https://joshua1988.github.io/vue-camp/syntax/watch.html#watch-%EC%BD%94%EB%93%9C-%ED%98%95%EC%8B%9D)

- [computedVSwatch](https://kr.vuejs.org/v2/guide/computed.html)
