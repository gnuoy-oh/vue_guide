# vue_guide

### 목적

- Vue.js 관련 업무를 위해 기초 강의를 듣습니다.

- [Vue.js 시작하기](https://www.inflearn.com/course/Age-of-Vuejs)

### 설치

- Chrome 

- Node.js

- Visual Studio

- Vue.js Devtools

------------------------------------
## Vue
------------------------------------

- MVVM 패턴의 뷰모델(ViewModel) 레이어에 해당하는 화면(view)단 라이브러리

- view: 브라우저에서 사용자에게 비춰지는 화면

    - 입력박스, 버튼 등의 요소 

    - html 문서

    - DOM을 이용해서 자바스크립트로 조작

- 사용자가 화면에서 마우스를 클릭하거나 키보드를 입력했을 때 view에서 이벤트를 청취해서 자바스크립트 지정했던 특정 로직을 실행한다,

    -  DOM Listner

- 데이터 바인딩

    - 문자열, 숫자가 바뀌었을 때 바로 데이터 바인딩을 사용해서 바로 화면에 반영한다.

### 실행 방법

- live server 돌리고 개발자 도구 > vue 탭으로 확인하면 된다.

- Vue 인스턴스

    - Vue 개발할 때 필수로 생성해야하는 코드이자, 단위!

    ```
    var vm = new Vue({
    // 옵션
    })
    ```

- 위와 같이 작성한 후, 개발자 도구 console > vm 을 치면 많은 Vue API(기능), 속성을 확인할 수 있다.

### [Tip] 생성자 함수

- 함수를 이용해서 instance를 생성하는 방법?
    
    - Vue에서 생성자 함수를 사용하는 방법은 new 생성자 함수를 생성하는 방법이다.

    - 대문자로 선언 

- 생성하는 방법

  - 생성자 함수를 직접 작성해서 개체를 정의한다.

  - new 키워드를 사용하여 개체의 인스턴스를 만든다.

  ```
  <!-- 예시 -->
  function car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  // 아래와 같이 객체를 만들 수 있다.
  mycar = new car("Eagle", "Talon TSi", 1993);
  kenscar = new car("Nissan", "300ZX", 1992);
  vpgscar = new car("Mazda", "Miata", 1990);

  <!-- 실제 작업 -->
  new Vue({
    el: '#app',
    
    components: {
      'app-header': appHeader,
      'app-content': appContent
    },

    data: {
      message: 'h1',
      number: 10
    }

  })
  ```

  - 객체 표기법을 사용해서 작성한다.

  ```
  var date = {
      a: 1
  };

  var vm = new Vue({
      data: data
  })
  ```

  - Instance를 생성할 때마다 Root Component가 생긴다.

### Vue Component

- 화면의 영역을 영역별로 구분해서 관리하는 것

  - header, side, content, footer 등

  - 장점: 재사용성을 올리기 위한 목적 

  ```
  // 부모 Component
  <div id="app">

    // 자식 Component
    <app-header></app-header>
    <app-content></app-content>
    
  </div>
  ```

- 전역 Component

  - 실무에서는 대부분 Plugin이나 Library 형태로 전역으로 사용해야 하는 경우에만 사용한다.

  - Instance를 생성할 때마다 Root Component 안에 자동으로 해당 Component가 생성된다.

  - 형태

  ```
  Vue.component('컴포넌트 이름', 컴포넌트 내용) 

  <!-- 예시 -->
  Vue.component('app-header', {
    template:: "<h1>Header</h1>"
  })
  ```

- 지역 Component

  - 객체 리터럴 방식으로 작업을 하고, 실무에서 거의 지역 컴포넌트를 사용한다.

  - 지역 Component를 사용하면 하단데 어떤 Component가 생성되었는지 알 수 있다.

  - Instance를 생성할 때마다 각각의 Component를 생성해야지 Root Component 내에서 보여진다.

  - 형태
  
  ```
  new Vue({
    key: {
      '키 === 컴포넌트 이름 ': '값 === 컴포넌트 내용'
    }
  })

  <!-- 예시 -->
  new Vue: ({
    el: '#app',
    components: {
      'app-header': {
        template: '<h1>header</h1>'
      }
    }
  })
  ```

  ### Component 통신 방식

  - Vue Component는 각각 고유한 데이터 유효범위를 갖는다.

  - 상위 컴포넌트 -> 하위 컴포넌트

    - props(data)를 전달하여 데이터를 내려준다.

  - 하위 컴포넌트 -> 상위 컴포넌트

    - 이벤트가 발생하면 해당 이벤트를 상위로 올려준다.

  - 컴포넌트 통신 flow 이미지

    - props(data)가 아래로 흐르는 규칙이 생기면서, props의 흐름을 추적할 수 있다.

    - 아래에서 위로는 이벤트가 올라간다.

    ![component](image/vuecomponent.png)

  - 기존의 데이터 전달 방식

    ![component](image/nvg.png)

  - **props(data)**

    - Root Component(상위)의 속성 값을 하위 Component에 내려주었을 경우
    
    - Root Component의 해당하는 속성 값(props 값)이 바뀌었을 때, 바뀐 props 값이 하위 Component에도 반영되어, 해당 값이 화면에서도 다시 그려진다.

      - Reactivity가 props에서도 반영이 된다.

  - 예시

  ```
  // html
  <div id="app">
    <!-- <app-content v-bind: props(data) 속성 이름 = "상위 컴포넌트의 데이터 이름"></app-content> -->
    <!-- props 속성 이름: app-content에 변수로 정의한다. -->
    <!-- 위 컴포넌트의 데이터 이름: app-content 기준으로 상위 컴포넌트는 Root, Root의 데이터 이름은 Instance의 data에 선언해둔, message이다. -->
    <app-content v-bind:propsdata="message"></app-content>
  </div>


  // js
  let appContent={
    // Root Component 에서 props(data) 값을 바꾸면, 화면에도 반영되어 실시간으로 변경된다.
    template: '<div>{{ propsdata }}</div>',

    //  props 속성 이름은, app-header에 변수로 정의한다.
    props: ['propsdata']
  }

  // Instance 생성
  new Vue({
    // instance를 만들고, 이 안에서 객체를 생성해서 el 이라는 element에 해당하는 태그에 인스턴스를 붙힌다.
    el: "#app",

    components: {
      'app-content': appContent
    },

    data: {
      message: 'hi',
      number: 10
    }
  })
  ```