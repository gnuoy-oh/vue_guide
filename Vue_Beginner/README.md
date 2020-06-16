
# Vue_Beginner

- Vue 기초 교육!

### 목적

- Vue.js 관련 업무를 위해 기초 강의를 듣습니다.

- [Vue.js 시작하기](https://www.inflearn.com/course/Age-of-Vuejs)

### 설치

- Chrome 

- Node.js

- Visual Studio

- Vue.js Devtools

## Vue

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

    - Instance를 생성할 때마다 Root Component가 생긴다.

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

### 정리 

- Reactivity

  - Data에 대한 변화를 감지해서 Vue 화면에 반영, 화면 조작에 대한 API를 Vue에서 제공한다.

- Instance
  
  - 필수로 생성해야 하는 단위이자, 내용을 추가함으로써 화면을 조작한다.

- Component

  - 화면의 영역을 구분해서 개발하는 방식

  - 현대 프레임워크 UI 개발에서 중요시 되는 것

  - 재사용성, 코드의 반복을 줄이는 것이 핵심

- Component 통신

  - 컴포넌트로 개발을 했을 때, 데이터 흐름을 제어하기 위한 목적으로 사용한다.

  - 협업을 위해 필요한 개념

  - props: 상위에서 하위로 데이터를 내려주는 방식

  - event emit: 하위에서 상위로 이벤트를 전달할 때 사용하는 방식

- HTTP 통신 라이브러리(axios)

- 템블릿 문법

  - 화면을 조작하기 위한 Vue의 문법

  - 데이터 바인딩: 데이터에 따라 화면에 반응해 주는 것

  - 뷰 디렉티브: 화면을 조작하기 위해서 뷰가 추가적으로 제공하는 문법 (v-)

- Vue CLI

  - 프로젝트를 생성할 때 명령어를 이용해서 생성하는 방식.

- 싱글 파일 컴포넌트

  -  .vue file 생성 