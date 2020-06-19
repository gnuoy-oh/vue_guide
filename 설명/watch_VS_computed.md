# watch와 computed에 대해서

## computed

- 템플릿의 데이터 표현을 보다 더 직관적이고 간결하게 도와주는 속성이다.

- 뷰 템플릿 코드의 가독성을 높여줄 뿐만 아니라, computed의 속성의 대상으로 정한 data 속성(num)이 변했을 때, 이를 감지하고 실시간으로 자동 연산해주는 장점이 있다.

- computed 속성은 인자를 받지 않는다!

- 컴퓨팅 리소스가 많이 필요한 로직을 정의하지 않는다! 너무 많은 연산을 템플릿 안에서 하면 코드가 비대해지고 유지보수가 여려워진다.


- 즉. data의 속성을 받아서 단순한 값을 계산하는 개념이라고 생각하면 된다. 

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

## watch 와 computed

- 

### 참고

- [computed](https://joshua1988.github.io/vue-camp/syntax/computed.html#computed-%EC%86%8D%EC%84%B1-%EC%98%88%EC%8B%9C)

- [watch](https://joshua1988.github.io/vue-camp/syntax/watch.html#watch-%EC%BD%94%EB%93%9C-%ED%98%95%EC%8B%9D)

- [computedVSwatch](https://kr.vuejs.org/v2/guide/computed.html)
