---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 함수의 변수
함수를 사용하게 되면 변수는 적용 범위를 가지게 됩니다. 이를 `스코프`라고 합니다.

## 지역변수

```javascript
var name = "jiny";
console.log(name);  // 전역변수 출력

function hello()
{
    var name = "hello world";
    console.log(name);  // 지역변수 출력
}

hello();
console.log(name);  // 전역변수 출력
```

결과실행
```
$ node scope_01.js
jiny
hello world
jiny
```

## 전역변수

```javascript
var name = "jiny";
console.log(name);  // 전역변수 출력

function hello()
{
    var name = "hello world";
    console.log(name);  // 지역변수 출력
}

hello();
console.log(name);  // 전역변수 출력


function hello2()
{
    name = "hello world"; // 전역변수 변경
    console.log(name);
}

hello2();
console.log(name);  // 변경된 전역변수 출력
```

실행결과
```
$ node scope_02.js
jiny
hello world
jiny
hello world
hello world
```

## 생명주기
함수내에서 생성되는 지역변수의 경우 생명주기를 가지게 됩니다.

함수가 생성이 될때 변수는 만들어지며, 함수가 종료되면 변수는 제거 됩니다.

## let











