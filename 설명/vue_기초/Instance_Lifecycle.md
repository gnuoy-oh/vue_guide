# 인스턴스 라이프사이클 훅

- Vue Instance나 Component가 생성될 때, 미리 사전에 정의된 몇 단계의 과정을 거치게 되는데. 이를 lifecycle 이라고 한다. 

- Vue Instance가 생성된 후 우리 눈에 보여지고, 사라지기 까지의 단계를 일컫는 말이다.

![lifecycle](image/lifecycle.png)

- 크게 생성(create)되고, DOM에 부착(mount)되고, 업데이트(update)되며, 없어지는(destroy) 4가지 과정을 거치게 된다. 이 과정에서 Vue는 각각의 단계에서 Hook을 사용할 수 있도록 API를 제공한다.

## Creation - 컴포넌트 초기화 단계

- Component가 돔에 추가되기 전에 실행된다. 서버 렌더링에서도 지원되는 Hook이다.

- 클라이언트, 서버단 렌더링 모두에서 처리해야 할 일이 있다면 이 단계에서 해야한다.

- 컴포넌트가 돔에 추가되기 전이기 때문에 DOM에 접근하거나 this.$el을 사용할 수 없다.

### beforeCreate

- 가장 먼저 실행되는 Hook이다. Vue 인스턴스가 초기화 된 직후에 발생된다.

- data 와 events(vm.$on, vm.$once, vm.$off, vm.$emit)가 세팅되지 않은 시점이므로 접근이 불가능해서 오류가 난다.

```
export default{
  data: function(){
    return {
      title: 'Hello'
    },
  },
  beforeCreate: function(){
    console.log(this.title); //undefined
  }
}
```

### created

- data와 events가 활성화되어 접근할 수 있다. 

- computed, methods, watch등이 활성화되어 접근이 가능하다.

- 여전히 template와 virtual DOM은 mount 및 randering 되지 않은 상태이다.

```
export default{
  data: function(){
    return{
      title: 'Hello'
    }
  },
  created: function(){
    console.log(this.title); // Hello
  }
}
```

## Moutind: DOM 삽입 단계

- Mounting 단계는 초기 렌더링 직전에 Component에 직접 접근할 수 있다.

- 서버 렌더링에서는 지원하지 않는다.

- 초기 렌더링 직전에 DOM을 변경하고자 한다며 이 단계를 활용할 수 있다. 

- Component 초기에 세팅되어야 할 데이터 패치는 ceeated 단계를 사용하는 것이 좋다.

### beforeMount

- 템플릿과 렌더 함수들이 컴파일된 후에 첫 렌더링이 일어나기 직전에 실행된다.

- 서버사이드 렌더실시에는 호출되지 않는다.

### mounted

- 일반적으로 가장 많이 사용한다.

- this.$el을 비롯한 data, computed, methods, watch등 모든 요소에 접근이 가능하다.

- 부모와 자식 관계의 Component에서 부모의 mounted 훅이 자식의 mounted 훅보다 먼저 실행되지 않는다.

## Updating: Diff 및 재 렌더링 관계

- Component에서 사용되는 반응형 속성들이 변경되거나 어떤 이유로 재 렌더링이 발생되면 실행된다.

- 디버깅이나 프로파일링 등을 위해 컴포넌트 재 렌더링 시점을 알고 싶을 때 사용하면 된다. 

### beforeUpdated

- Compoent에서 사용되는 data 값이 변해서, DOM에도 그 변화를 적용시켜야 할 때, 변화 직전에 호출되는 것이다.

- 변할 값을 이용해 가상 DOM을 렌더링하기 전이지만, 이 값을 이용해 작업할 수 있다.

### updated

- component의 데이터가 변하여 제렌더링이 일어난 후에 실행된다. 

- DOM이 업데이트 완료된 상태이므로 돔 종속적인 연산을 할 수 있다.

### beforeDestroy

- Vue Instance가 제거되기 직전에 호출이 된다.

- 서버 렌더링 시 호출되지 않는다.

### destroyed

- Vue Instance가 제거된 후 호출된다.

- Vue Instance의 모든 디렉티브가 바인딩 해제되고 모든 이벤트 리스너가 제거되며 모든 하위 Vue Instance도 삭제된다.


### 참고

- https://wormwlrm.github.io/2018/12/29/Understanding-Vue-Lifecycle-hooks.html

- https://medium.com/witinweb/vue-js-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-7780cdd97dd4