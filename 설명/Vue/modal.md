# Modal component Example

## 내용

- 

## slot?

- Vue에서 지원하는 기능 중 하나로, 특정 컴포넌트 일부 UI를 재사용할 수 있도록 지원한다. 

- 다른 컴포넌트에서 slot 별로 각각 스타일 변경을 할 수 있다.

- 하위 컴포넌트의 엘리먼트를 부모에서 지정할 때 사용한다. 

~~~
// BaseButton.vue
<button>
  <slot>기본값</slot>
</button>

// Parent
<BaseButton>
  <!-- 슬롯이 들어간다. -->
  <span>저장하기</span>
</BaseButton>

// 렌더링 결과
<button>
  <span>저장하기</span>
</button>
~~~

### named slot

- slot을 사용할 때 slot을 적용할 엘리먼트를 지정할 때 사용된다.

- 하위 컴포넌트의 특정 영역을 지정해서 부모에서 사용 가능하게 한다.

~~~
// BaseModal.vue
<div>
  <header>
    <slot name="header">
      <strong>기본 타이틀</strong>
      <button>기본 버튼</button>
    </slot>
  </header>
  <div>
    <slot name="content">
      <p>기본 콘텐츠</p>
    </slot>
  </div>
</div>

// Parent
<div>
  <BaseModal>
    <template slot="header">
      <h1>모달 제목</h1>
      <button>닫기>></button>
    </template>
    <p slot="content">모달의 컨텐츠입니다.</p>
  </BaseModal>
</div>

// 렌더링 결과
<div>
  <header>
    <h1>모달 제목</h1>
    <button>닫기</button>
  </header>
  <div>
    <p>모달의 컨텐츠입니다.</p>
  </div>
</div>

~~~

### slot-scope

- slot 내에서 하위 컴포넌트의 데이터를 상위에서 사용하고 싶을 경우, slot-scope를 사용한다.

~~~
// BaseModal.vue
<template>
  <div>
    <header>
      <slot name="header" :hello="childData" :close="close">
        <strong>기본 타이틀</strong>
        <button>기본 버튼</button>
      </slot>
    </header>
    <div>
      <slot name="content">
        <p>기본 콘텐츠</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  data() {
    return {
      childData: "hello",
      active: false
    };
  },
  methods: {
    close() {
      this.active = false
    }
  }
}
</script>

// Parent
<div>
  <BaseModal>
    <template slot="header" slot-scope="slotProps">
      <h1>모달 제목</h1>
      <button @click="slotProps.close">닫기</button>
      {{ slotProps }} <!-- { hello: 'hello' } -->
    </template>
    <p slot="content">모달의 컨텐츠입니다.</p>
  </BaseModal>
</div>
~~~

### v-slot

- named-slot과 slot-scope를 합친 문법이다.

- 기존에 사용되던 slot 디렉티브와 다르게 반드시 <template> 태그가 추가되어야 한다.

~~~
<div>
  <BaseModal>
    <template v-slot:header="slotProps">
      <h1>모달 제목</h1>
      <button @click="slotProps.close">닫기</button>
      {{ slotProps }}  
      <!-- {hello: 'hello} -->
    </template>
    <template v-slot:content>
      <p>모달의 컨텐츠입니다.</p>
    </template>
  </BaseModal>
</div>
~~~ 

### 참고

- https://kr.vuejs.org/v2/examples/modal.html

- https://velog.io/@ashnamuh/Vue-slot-%EB%B0%8F-v-slot-%EC%82%AC%EC%9A%A9%EB%B2%95