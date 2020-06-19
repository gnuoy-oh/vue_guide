# localStorage

- 현재 사용자 로컬 스토리지 공간에 접근하기 위해 사용되는 것

- Data를 사용자 로컬에 보존하는 방식

- 값은 문자열로 저장된다.

- 개발자 도구 -> Application -> Storage -> Local Storage

## 내용

### localStorage.setItem('key', 'value');

- 사용자 현재 도메인의 로컬 storage 객체에 접근해 storage.setItem()을 사용하여 데이터를 추가한다.

 - 그 외 데이터 추가하는 방법

 ```
 localStorage.key = "value";
 localStorage.["key"] = "value"
 ```

### localStorage.getItem('key');

- localStorage에서 key에 해당하는 값을 받아온다.

### localStorage.removeItem('Key);

- localStorage에서 key에 해당하는 값을 삭제한다.

### localStorage.clear();

- localStorage 아이템 전체 삭제

### localStorage.key(index);

- index에 해당하는 key를 받아온다.

### localStorage.length 

- 저장된 항목의 갯수를 불러온다.

## 문자열

- localStorage의 키와 값은 반드시 문자열이어야 한다.

- 숫자 / 객체 등 다른 자료형을 사용하게 되면 문자열로 자동 변환된다.

```
localStorage.user = {name: 'john'};
console.log(localStorage.user); //[object Object]

localStorage.user = JSON.stringfy({name: 'john});
let user = JSON.parse(localStorage.user);
console.log(user.name); // john

```

## JSON

### JSON.stringfy(value, replacer, space)

- JS 값이나, 객체를 JSON 문자열로 변환한다.

- value: JSON 문자열로 변환할 값이다. (배열, 객체, 숫자, 문자 등이 될 수 있다)

- replacer(선택): 함수, 배열이 될 수 있다.

 ```
 JSON.stringify({});                  // '{}'
 JSON.stringify(true);                // 'true'
 JSON.stringify('foo');               // '"foo"'
 JSON.stringify([1, 'false', false]); // '[1,"false",false]'
 JSON.stringify({ x: 5 });            // '{"x":5}'

 var foo = {name: ‘jason’, nickname: ‘ball’, weight: 75};
 var useJson = JSON.stringify(foo, replacer); 
 console.log(useJson) // {"weight":75}
 ```

- replacer: 

### JSON.parse()

- stringfy와 반대로, 인수를 전달받은 문자열을 자바스크립트 객체로 변환한다.

- 