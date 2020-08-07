---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 함수의 실행
---

### 함수호출
---
함수 식별자와 `()`를 통하여 함수를 호출합니다.
`()`는 함수로 전달되는 매개값을 입력합니다. 없으면 공백으로 처리합니다.

```javascript
함수명();
```

```javascript
// 함수를 선언합니다.
function greeting()
{
    console.log("안녕하세요");
}

// 함수를 실행합니다.
greeting();
```

실행결과
```
$ node function_01.js
안녕하세요
```

### 함수 객체
---
아직 객체라는 용어가 생소할 수 있습니다. 자바스크립트는 특이하게도 함수를 객체로 처리를 합니다.

```javascript
greeting;
```

함수뒤에 `()`를 붙이지 않으면, 함수의 실행이 되지 않습니다.

함수의 참조하는 값으로 표현이 됩니다. 참조값은 다른 변수로 저장을 할 수도 있습니다.

```javascript
// 함수를 선언합니다.
function greeting()
{
    console.log("안녕하세요");
}

// 참조값을 복사합니다.
const f = greeting;

// 함수를 실행합니다.
f();
```

함수의 호출과 참조는 괄호(`()`)를 통하여 구분이 되는 것을 알 수 있습니다. 또한 `()`의 역활을 명확히 알 수 있습니다. 
