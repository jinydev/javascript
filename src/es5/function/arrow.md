---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 화살표 함수
---
es6에서는 새로운 함수 표기법인 화살표 기호를 지원합니다.
화살표 문법은 단축화된 함수 표기법입니다.

```javascript
const f = function() {
    return "hello";
}
```
위와 같은 익명함수를 다음과 같이 화살표 함수로 표현을 변경할 수 있습니다.

```javascript
const f = () => "hello"; 
```
화살표 함수는 `function` 키워드를 사용하지 않기 때문에 보다 빠르게 코드를 작성할 수 있습니다.
단점으로는 함수명 식별자를 가지는 형태로 선언을 할 수 없습니다.


```javascript
const f = () => {
    // 함수 내용
};
```