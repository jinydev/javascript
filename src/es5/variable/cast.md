---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 형변환
컴퓨터는 2진수 시스템 입니다. 2진수의 값으로 다양한 값의 표현을 하다보니 자료형이라는 것이 등장하게 됩니다.

각각의 자료형은 특화된 데이터의 값을 가지고 있습니다.

## 문자열 10
숫자 10과 문자열 10은 사람이 볼때 같을 수 있습니다. 하지만, 컴퓨터는 자료형이라는 값의 표현에 의해서 이 둘을 구분하지 못합니다.

```javascript
let age = windows.prompt("나이를 입력해 주세요.");
console.log(typeof age, age);
```

### 숫자변환
자바스크립트는 문자열을 숫자로 변환하는 `parseInt()`함수를 제공합니다.

```javascript
let age = windows.prompt("나이를 입력해 주세요.");
age = parseInt(age);
console.log(typeof age, age);
```

## 형변환의 종류
자바스크립트는 2가지의 형변환 처리를 합니다.

* 암시적 형변환
* 명시적 형변환

### 암시적 형변환
자바스크립트 엔진에서 자동으로 형을 변환해 주는 것을 말합니다.

```javascript
let result = 1 + "2";
```

암시적 형변환에는 규칙이 적용이 됩니다.

숫자 + 문자 => 문자열로 처리가 됩니다.
```
1 + "2";
```

불 + 문자 => 문자열
```
true+"3";
```

불 + 숫자 => 숫자
```
true + 5
```

### 명시적 형변환
자바스크립트가 자동으로 변환하는 암시적 방법과 달리 개발자가 직접 코드로 변경을 지시하는 것을 명시적 형변환 이라고 합니다.

#### 정수 변환
정수로 형을 변경합니다.
* parseInt()
* number()

#### 실수변환
실수로 형을 변경합니다.
* parseFloat()
* Number()

#### 문자열 변환
* String()
* Number.toString()
    기본적으로 10진수 형태로 변환을 합니다. 그외에 16진수, 8진수로도 형을 변환 할 수 있습니다.
    `Number.toString(16)` 처럼 괄호 안에 진수를 넣어 주시면 됩니다.
    
* Number.toFixed()

