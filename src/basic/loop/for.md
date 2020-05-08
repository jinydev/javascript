---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# for 반복문
횟수를 지정하여 코드를 반복 실행 동작을 구현합니다.


## 반복의 필요성
반복문은 수많은 프로그램의 동작을 간단하게 처리하는 동작입니다. 예를 들어 다음과 같이 `hello world`를 5번 출력을 할려고 합니다.

```javascript
    console.log("hello world!");
    console.log("hello world!");
    console.log("hello world!");
    console.log("hello world!");
    console.log("hello world!");
```

5번의 `hello world`를 출력하기 위해서 5개의 `console.log()` 명령이 필요로 합니다.

실행결과
```
$ node for_01.js
hello world!
hello world!
hello world!
hello world!
hello world!
```

## for
자바스크립트는 대표적인 반복문인 for를 지원합니다.

```javascript
for (초기값; 조건식; 증가) {
    // 반복문장
}
```

for는 3개인 인수값을 전달 합니다. 각각의 인수값은 세미콜론(;)으로 구분을 합니다.

```javascript
for (var i=0; i<5; i++) {
    console.log(i+ " 안녕하세요!");
}
```

중괄호로 묶여진 특정 영역을 반복하여 실행을 합니다. 한개의 `console.log()` 명령을 5번 반복 수행을 합니다.

실행결과
```
$ node for_02.js
0 안녕하세요!
1 안녕하세요!
2 안녕하세요!
3 안녕하세요!
4 안녕하세요!
```

### 초기값
반복문에서의 초기값은 한번만 실행이 됩니다.

### 조건식

### 증감

---

## 다중 반복문
for 반복문은 다른 for 반복문을 포함할 수 있습니다. 이를 다중 반복문이라고 합니다.

```javascript
for (초기값1; 조건식1; 증가1) {
    // 반복문장1

    for (초기값2; 조건식2; 증가2) {
        // 반복문장2
    }
}
```

다중 반복문을 설계할 때에는 상위 반복문의 조건과 하위 반복의 조건이 충돌이 되지 않도록 해야 합니다.

## 실습1
별표 출력하기

```javascript
var star;
for (var i=0; i<5; i++) {
    for (var j=0; j<i; j++){
        star += "*";
    }
    console.log(star); // 화면출력
    star = ""; // 초기화
}
```

실행결과
```
$ node for_03.js
undefined
*
**
***
****
```





---

## for-in
`for-in`은 for 반복문과 달리 주어진 객체의 프로퍼티를 반복을 수행합니다.

요수를 순회합니다.

```javascript
var fruits = {
    banana:"바나나", 
    apple:"사과", 
    kiwi:"키위"
};

for ( var item in fruits) {
    console.log( item + '는 '+ fruits[item]) ;
}
```

실행결과
```
$ node forin_01.js
banana는 바나나
apple는 사과
kiwi는 키위

```

---

## for-of
`for of` 반복문은 es6에서 새롭게 추가된 반복문 입니다.
컬렉션의 요소를 반복실행 합니다.

```javascript
for ( variable of object ) {
    // 실행코드
}
```

for-of 반복문은 범용적인 루프 입니다.
배열, 이터러블(iterable) 객체 모두 사용이 가능합니다.

