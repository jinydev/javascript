---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 스코프
---
스코프는 변수의 영역을 의미합니다.

## 정적 스코프
---
자바스크립트는 정적 스코프를 가지고 있습니다.

정적 스코프는 크게 가지로 구분이 됩니다.
* 전역 스코프
* 블록 스코프
* 함수 스코프

### global scope
---

### block scope
---
es6는 새로운 변수의 선언 키워드 `let`을 지원합니다.
또한 새로운 타입인 `const`를 지원합니다.

`let`과 `const`는 블럭 스코프를 지원하기 위해서 선언을 합니다.

블럭 스코프는 `블럭`으로 작성된 영역에서나 접근이 가능한 변수를 말합니다.

```javascript
// 블럭을 선언합니다.
{
    let x = 5;
    // 블럭안에 있는 변수를 출력합니다.
    console.log(x);
}

// 블럭밖에서 변수를 출려합니다.
console.log(x);
```

실행결과
```
$ node scope_block.js
5
d:\jinydev\javascript\basic\ex\scope_block.js:9
console.log(x);
            ^

ReferenceError: x is not defined
    at Object.<anonymous> (d:\jinydev\javascript\basic\ex\scope_block.js:9:13)
    at Module._compile (internal/modules/cjs/loader.js:936:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)
    at Module.load (internal/modules/cjs/loader.js:790:32)
    at Function.Module._load (internal/modules/cjs/loader.js:703:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:999:10)
    at internal/main/run_main_module.js:17:11
```

블럭안에 있는 x값은 정상적으로 출력이 됩니다.  
블럭 밖에서 블럭안에 있는 x를 접근할때에는 오류가 발생합니다.


### function scope
---


## 전역 스코프
---
스코프는 계층적 입니다. 전역 스코프의 변수를 전역 변수라고 합니다.
전역 변수는 누구나 어디에서든지 접근이 가능합니다.

## 변수 숨김
---

## 호이스팅
---

## 스트릭트 모드
---




