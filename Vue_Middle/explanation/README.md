# 중급으로 들어가기 전에 

## Vue Guide

### Vue CDN으로 설치하는 방법과 기본 구성

- 사용자 인터페이스를 구축하기 위한 점진적인 Framework이다.

```
<!-- Vue Script CDN -->
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<!-- Rendering -->
<div id="app" v-bind:title="message2">
  {{ message }}
</div>

var app = new Vue ({
  el: '#app',
  data: {
    message: 'Hello Vue World',
    message2: 'you loaded this page on' + new Date().toLocaleString()
  }
})

<!-- Conditionals and Loop(toggle) -->
<div id="app3">
  <span v-if="seen">Now you see me</span>
</div>

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})

```

### Vue-Cli 설치와 설명

- https://cli.vuejs.org/


```
npm install -g @vue/cli

// vue 프로젝트 시작할 폴더에서 vue-todo 라는 프로젝트를 생성한다.
vue create vue-todo 
```

#### Vue 폴더 구성

- 기본적으로, src 내에 components에서 사용할 컴포넌트를 담아주면 된다.

- Root Level에서는 한개 당 하나의 html tag를 갖는다.

```
src/ : 실제 대부분의 코딩이 이루어지는 Directory
ㄴ assets/: 이미지 등, App에서 사용되는 파일들이 모여있는  Directory
ㄴ components/: Vue 컴포넌트들이 모여있는 디렉터리
ㄴ router/: vue-router 설정을 하는 디렉터리 (페이지 전환의 개념)
App.vue: 가장 최상위 컴포넌트
main.js: 가장 먼저 실행되는 JS 파일. Vue Instance 생성을 하는 역할
index.html: 어플리케이션의 뼈대가 되는 html 파일
```