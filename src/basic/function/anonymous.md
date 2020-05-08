---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 익명함수
---
자바스크립트의 변수는 다양한 타입의 데이터를 저장할 수 있습니다.  

## 함수저장
---
함수는 선언하게 되면, 함수의 위치값을 가지는 값을 반환합니다. 이러한 함수의 위치를 자바스크립트 변수에 저장을 합니다.

```javascript
const f = function() {
    // 함수내용
};
```

자바스크립트의 변수가 함수를 직접 저장을 받을때, 함수의 명은 생략할 수 있습니다.  
함수의 명은 함수를 구별하기 위한 식별자 입니다. 변수의 이름이 함수의 식별자를 대신하여 처리를 합니다.

이처럼 함수명이 없이 만들어지는 함수를 `익명함수` 라고 합니다.


## 익명함수 매개변수
---
익명함수는 함수의 이름만 없을뿐, 함수 `()`에 전달되는 매개변수를 선언할 수 있습니다.


```javascript
const f = function(name) {
    alert(name);
};
```

### 함수 인자
---
익명함수로 저장된 변수는 다시 매개변수로 전달을 할 수 있습니다.

```javascript

const hello = function()
{
    console.log("hello");
}

function execute(func)
{
    func();
}

execute(hello);
```

2개의 함수를 선언을 합니다. 하나의 함수는 다른 함수의 인자값을 전달이 됩니다.
매개변수로 전달받은 익명함수를 호출 하여 처리할 수 있습니다.

## 직접전달
---
익명함수를 사용할때 변수에 저장을 하였습니다. 익명함수를 변수에 저장을 하면, 여러번 재사용이 가능합니다.  

하지만, 한번만 사용되는 익명함수의 경우 메모리를 낭비하면서, 변수에 저장을 하지 않아도 됩니다.

```javascript
function execute(func)
{
    func();
}

execute(function()
{
    console.log("hello");
});
```
`중첩함수`를 응용한 예제입니다.
위와 같이 직접 인자값으로 익명함수를 전달하는 경우를 많이 보게 됩니다.


실행결과
```
$ node anonymous_05.js
hello
```

## 익명함수의 확장
---
함수간 충돌을 방지합니다.

```javascript
(function(매개변수){
    반환값;
})(
    매개변수값
)
```

예제를 통하여 실습을 해보도록 합니다.

```javascript
// 익명함수 선언과 실행
(
    function(name)
    {
        console.log(name + "님 오늘도 좋은 하루 입니다.!");
    }
)(
    "이호진"
);
```

매개변수로 함수를 전달받습니다. 함수의 인자값은 확장된 익명함수의 인자값을 사용합니다.

실행결과
```
$ node anonymous_06.js
이호진님 오늘도 좋은 하루 입니다.!
```


