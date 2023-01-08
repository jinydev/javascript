---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 매개변수
매개변수는 함수에서 입력값을 전달받는 부분을 말합니다.
입력값은 여러개가 존재할 수 있습니다. 콤마로 구분을 합니다.

매개변수를 통하여 값을 입력받을 때 타입을 지정하거나, 초기값을 설정할 수 있습니다.

## 지역변수
매개변수는 지역변수 입니다.
함수에서 매개변수를 지정할때, 타입을 지정하는 `var`를 사용하지 않습니다.



## 매개변수
함수의 반환값에 대해서 알아 보았습니다. 반대로 함수에게 값을 전달을 할 수 있습니다.  
이를 매개변수라고 합니다.

매개 변수는 함수의 괄호 `()`안에 값을 넣어주면 됩니다.

### 매개변수 지정
함수에서 매개변수를 사용하기 위해서는 전달되는 값과 받은 값이 동일하여야 합니다.

```javascript
// 함수를 선언합니다.
function greeting(msg)
{
    return msg + "!!!";
}

// 함수를 실행합니다.
let message = greeting("안녕하세요");
console.log(message);
```

함수를 선언을 할때 전달 받을 매개변수 명을 같이 선언을 합니다. 또한 함수를 호출할때 인자값을 같이 입력을 합니다.

함수에서 받아드리는 값을 `매개변수`라고 하고, 함수를 호출할때 전달하는 값을 `인자값`이라고 합니다.

결과확인
```
$ node function_04.js
안녕하세요!!!
```

### 암시적 매개변수
매개변수를 지정하면 반드시 인자값을 전달을 해야 합니다. 하지만, 자바스크립트에서는 선언된 매개변수를 암시적으로 생략을 할 수 있습니다.
생략을 하는 경우 매개 변수는 undefined 가 됩니다.

```javascript
// 함수를 선언합니다.
function greeting(msg)
{
    return msg + "!!!";
}

// 함수를 실행합니다. 인자값을 생략합니다.
let message = greeting();
console.log(message);
```

실행결과
```
$ node function_05.js
undefined!!!
```

### 매게변수 갯수
여러개의 매개변수를 전달하고자 할때에는 콤마로 구분하여 동일한 갯수를 지정을 하여야 합니다.

> 다른 언어에서는 함수의 매개변수 갯수에 따라서 다른 함수로 구별을 하는 경우가 있습니다.
> 자바스크립트는 매개변수의 개수에 따라서 함수를 구별하지 않습니다. 동일함 함수로 처리를 합니다.


### 매개변수 해제
es6 자바스크립트는 새로운 해체 기능이 추가되었습니다.
이를 함수의 매개변수에 적용을 할 수 있습니다.

### 기본값
es6에서 자바스크립트 함수는 기본값을 설정할 수 있게 되었습니다.

```javascript
function greeting(msg = "hello")
{
    return msg + "!!!";
}
```

### 매개변수의 범위
외부로 값을 전달받는 매개변수의 경우 범위는 함수 내부 입니다.
함수 내부에서는 전달 받은 값을 사용을 할 수 있지만, 함수 외부에서는 함수내의 변수에 접근을 할 수 없습니다.



## arguments 객체
함수에 매개변수를 선언하면, 호출시 같이 값을 전달해 주어야 합니다.

함수에서 전달받을 매개변수 지정을 생략하여 함수를 작성할 수 있습니다. 이때, 메개변수 값을 같이 전달 하게 되면
지정되어 있는 매개 변수명이 없어서 값을 확인 할 수 없습니다.

이때, 자바스크립트의 내부객체 `arguments`를 사용할 수 있습니다.

```javascript
function hello(){
    for (var i=0; i <arguments.length; i++) {
        console.log(arguments[i]);
    }
}

hello("안녕하세요", "오늘도 좋은 하루 되세요");
```

실행결과
```
$ node param_10.js
안녕하세요
오늘도 좋은 하루 되세요
```