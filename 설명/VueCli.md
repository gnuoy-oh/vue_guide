# Vue Cli 설치

## Vue Cli?

- Vue.js 개발을 위한 시스템으로, Vue.js Core에서 공식으로 제공하는 CLI 이다. Vue CLI는 애플리케이션 개발에 집중할 수 있도록 프로젝트의 구성을 도와주는 역할을 하며, Vue 생태계에서 표준 툴 기준을 목표로 하고 있다.


- 윈도우에서는 Command, 맥에서는 Terminal에서 타이핑으로 명령어를 입력하여 원하는 바를 실행 시키는 도구를 말한다. Vue-CLI는 내부적으로 웹팩을 활용한다. 

- Vue CLI에서 할 수 있는 것

  1. 새로운 Vue Project 생성

  2. Vue Plugin 설치 / 삭제

  3. Vue.config.js 설정

  4. Vue GUI 도구 사용 (GUI 형태로 도구를 제공)

### 설치 방법 및 경로 확인

- https://cli.vuejs.org/ 에서 아래와 같이 설치한다.

```
npm install -g @vue/cli

<!-- permission Error가 뜰 경우 -->
sudo npm install -g @vue/cli
```

- Mac 기준 vue 설치된 경로 확인해보기!

  - /usr/local/lib/node_modules

  - [경로 확인](https://stackoverflow.com/questions/5926672/where-does-npm-install-packages)

### Vue CLI 버전 확인 및 vue 프로젝트 생성하기

- [Vue CLI 2.x]

```
vue init '프로젝트 탬플릿 유형'
vue init webpack-simple '프로젝트 폴더 위치'
```

- [Vue CLI 3.x]

```
vue create '프로젝트 폴더 위치'

// vue 프로젝트 생성하기
vue create vue-cli

// vue-cli 폴더로 들어간다.
cd vue-cli

// package.json -> scripts 
npm run serve
```

### 폴더 들여다 보기

- public/index.html: <!-- built files will be auto injected --> 주석이 의미하는 것

  - src 하위에 정의해 둔, 여러가지 파일들을 조합해서 묶어서 변환하여 위 주석 내부로 주입된다.

- src/main.js

  - 연습했던 new Vue({}) 의 형태 구조와 동일하다.

- single file component

  - 새 vue 파일을 만들고, vue + Tab

  - 하나의 파일 안에 HTML, Javascript, CSS를 모두 관리하겠다.

```
<tamplate>
<!-- HTML -->
</tamplate>

<script>
<!-- Javascript === Vue 인스턴스 내부에서 사용된 옵션 속성들도 이 곳에 들어간다. -->
</script>

<style>
<!-- CSS -->
</style>
```

## single file component

- 하나의 파일 안에 HTML, Script, CSS를 모두 관리하겠다!

### 별도의 컴포넌트를 생성해서, props + event를 구현해보자.

1. components 폴더에서 component 의 내용을 정의한다.

2. App.vue에서 AppHeader를 import 해온다.

```
import AppHeader from './components/AppHeader.vue'
```

3. import해온 AppHeader를 인스턴스 내부에 선언을 해준다.

```
export default({
  components: {
    'app-header': AppHeader
  }
})
```

4. 선언해준 컴포넌트를 template tag 안에 넣어준다!

```
<template>
  <div>
    <app-header></app-header>
  </div>
</template>
```

### wewbpack 

- index.html 에서 

### 참고

- [리눅스 기본 명령어](https://joshua1988.github.io/web-development/linux-commands-for-beginners/)