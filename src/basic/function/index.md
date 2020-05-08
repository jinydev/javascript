---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 함수
함수는 코드를 집합화 하여 재사용을 위한 기술 입니다.

* [함수실행](execute)
* [스코프](scope)
* [매개변수](param)
* [반환값](return)

* [익명](anonymous)함수
* [화살표](arrow)함수

* [call](call), apply, bind

## 함수의 구조
함수는 크게 3가지의 구조를 가지고 있습니다.

* 입력
* 출력
* 본체

## 함수 선언
함수를 통하여 반복코드를 실행할 수 있습니다.

### 키워드
함수를 선언을 할때에는 `function` 키워드를 사용합니다.

### 함수명
`function` 키워드 다음에는 함수명 식별자를 작성합니다.

```javascript
function greeting()
{
    console.log("안녕하세요");
}
```

함수는 줄괄호 `{`와 `}`로 코드의 영역이 감싸져 있습니다.

## 중복코드
순처적으로 실행되는 프로그램의 코드에서 동일한 작업을 할때 코드가 중복됩니다.
중복된 코드를 하나의 집합으로 분리하여 재상용을 합니다.

* 중복코드 제거
* 코드 재사용
* 유지보수 향상

## 중첩함수
함수 안에 새로운 함수를 선언할 수 있습니다.

```javascript
function execute()
{
    function hello()
    {
        console.log("hello world");
    }

    hello();
}

execute();
```


실행결과
```
$ node function_02.js
hello world
```

### 함수 외부호출
함수내부에서 선언된 함수는 `스코프`영향으로 함수 내부에서만 호출이 가능합니다.

```javascript
function execute()
{
    function hello()
    {
        console.log("hello world");
    }

    hello(); // 내부호출
}

execute();

hello(); // 외부호출
```

함수내에 선언된 함수를 외부에서 호출할 경우 오류가 발생됩니다.

실행결과
```
$ node function_03.js
hello world
d:\jinydev\javascript\basic\function\ex\function_03.js:13
hello(); // 외부호출
^

ReferenceError: hello is not defined
    at Object.<anonymous> (d:\jinydev\javascript\basic\function\ex\function_03.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:936:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)
    at Module.load (internal/modules/cjs/loader.js:790:32)
    at Function.Module._load (internal/modules/cjs/loader.js:703:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:999:10)
    at internal/main/run_main_module.js:17:11
```

## 함수의 종류
프로그램 언어에서 함수는 크게 2종류가 있습니다.

언어에서 기본적으로 제공해 주는 `내장함수`와 사용자가 직접 생성하여 활용하는 `사용자함수`가 있습니다. 
자바스크립트에서는 `내장함수`를 `코어함수`라고 부르기도 합니다.

이외에 `콜백 함수`,`클로저`가 있습니다.

## 콜백함수
자바스크립트에서 많은 빈도로 사용되는 함수가 `콜백함수` 입니다.

```javascript
function 함수명(callback)
{
    callback(결과);
}
```

기존에는 함수의 결과를 `return`으로 반환을 하였습니다. 이와 유사하게 
콜백은 함수의 내부 결과값을 함수 외부로 전달할 때 사용을 합니다.

콜백을 사용하면 `구현`과 `처리`를 분리하여 작성을 할 수 있습니다.

```javascript
function hello(username)
{
    console.log(username + " 반갑습니다.");
}

function greeting(callback)
{
    let result = "이호진"; // 결과값
    callback(result);
}

greeting(hello);
```

`greeting()`함수는 하나의 익명함수를 전달 받습니다. 익명함수는 `return` 대신에 결과값을 처리하는 역할을 수행합니다.
이를 `콜백`이라 합니다.

실행결과
```
$ node callback_01.js
이호진 반갑습니다.
```

### return vs callback
리턴 대신에 콜백을 사용합니다.
콜백을 사용하는 이유는 비동기 처리를 위해서 입니다.

---

## 클로저
함수내에서 생성된 변수는 지역변수 입니다.
지역 변수는 함수의 실행과 동시에 생성이되고, 함수의 작업이 완료되면 메모리에서 제거가 됩니다.

하지만, 지역변수를 계속 남겨두어야 하는 경우가 있습니다.

이때, 클로저 함수를 사용합니다. 클로저는 지역변수를 삭제하지 않고 남겨 두게 됩니다.

```javascript

function 함수명()
{
    var 변수;
    function 클로저()
    {
        변수사용 및 처리

    }

    return 클로저;
}
```

### 클로저 현상
참조되는 메모리가 물려있을 경우, 사라지지 않는 현상.




