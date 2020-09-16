# ES6?

- ECMAScript 2015와 동일한 용어로, ES5(2009년) 이래로 진행한 첫 메이저 업데이트가 승인됨

- 최신 front-end framework인 vue, react, angular에서 권고하는 언어 형식

- ES5에 비해 문법이 간결해져서 익숙해지면 코딩을 훨씬 편하게 할 수 있다.

## Babel

- ES6는 모든 브라우저에서 지원하지 않기 때문에, 구 버전으로 호환해주는 trnaspiling이 필요하다.

- ES6의 문법을 각 브라우저의 호환 가능한 ES5의 문법으로 변환하는 compiler

## ES5

- **변수의 Scope(Function Scope)**
  
  - 기존 ES5는 Function scope로, 함수 내에서 선언한 변수가 바깥에서도 변수 접근이 가능하다.

  - block을 벗어나도, var i 가 접근이 가능하다. 

  - BUT, 자바나 C는 대체로 function scope가 아니고, block scope를 가지기 때문에 block { } 내에서만 접근이 가능하다.

  ~~~
  var sum = 0;

  for (var i = 1;i<=5; i++){
    sum = sum + i;
  }

  console.log(sum); //15
  console.log(i); // 6
  ~~~

- **Hoisting**

  - 선언을 하면. (===) 끌어올려진다.

  - 코드는 위에서 아래를 향해서 읽혀지는데, 함수 선언문과 변수 선언은 무조건 위로 끌어올려진다.

  - 코드의 라인 순서와 관계 없이, 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보하기 때문에 끌어올려진다..

  - 변수 / 함수 선언 -> 값 할당 의 순서대로 동작한다.

  ~~~
  <!-- 함수 선언문 -->
  function willBeoverRidden(){
    return 10;
  }

  willBeoverRidden(); // 5

  function willBeoverRidden(){
    return 5;
  }

  <!-- 함수 표현식 -->
  var sum = funtion(){
    console.log('im 선언문');
  }
  ~~~

## const / let

- 예시 ! 
~~~
function f(){
  {
    let x; 

    {
      // 새로운 블록 안에 새로운 x의 스코프가 생긴다.
      const x = 'hi';

      // 위에 이미 const로 x를 선언했으므로 다시 값을 할당하면 error 발생 
      x = "foo"; 
    }
    
    // 이전 블록 범위로 돌아왔기 때문에, let x 에 해당하는 메모리 값을 대입해도 error나지 않는다.
    x = "bar";

    // uncaught syntexError: Identifier 'x' has already been declared.
    let x = "inner";
  }
}
~~~

- block Scope. { }로 변수의 범위가 제한되었다. (ES5는 Function scope)

  - for문이건 함수건 {}안에 선언되면 그 안에서만 동작한다.

  - const
  
    - 한번 선언한 값에 대해서 변경할 수 없고, 중복 선언도 할 수 없다. (상수 개념)

      - 문자열(string, number)은 변경이 안됨.

      - 재선언 하면 error 

    - 하지만, 객체나 배열의 내부는 변경할 수 있다.

    ~~~
    const a = 1;
    a = 10; //syntext error

    const b = {};
    b.num = 10;
    console.log(b); // {num : 10}

    const c = [];
    c.push(20);
    console.log(c); // [20]
    ~~~

  - let
  
    - 한번 선언한 값에 대해서 다시 선언할 수 없음

    - 재선언은 안되고, 값 재할당 하는건 가능하다.

    ~~~
    let a = 10;

    let a = 20; // error! 재선언 안됨

    a = 20; // 재할당 가능 
    ~~~

## Arrow Function



## Enhanced Object Literals

## Modules 

- 