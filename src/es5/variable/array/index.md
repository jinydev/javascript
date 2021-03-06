---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 배열
배열 변수는 일반 배열과 달리 복수의 저장공간을 가지는 자료형을 말합니다.

## 단일 식별자
배열은 복수의 저장공간을 가지는 변수이지만 하나의 단일 식별자 이름을 가지고 있습니다.

단일 변수명 뒤에 `[]`를 통하여 복수의 저장공간 하나를 선택할 수 있습니다.

```javascript
let name1 = "이호진";
let name2 = "jiny";
let name3 = "hojin";
```

유사한 데이터를 표현할때 위와 같이 각각의 이름에 번호를 붙여서 변수를 생성을 할 수 있습니다.

## 배열의 생성
배열을 사용하면 보다 쉽게 유사 데이터를 그룹으로 묶을 수 있습니다.

배열 데이터를 생성할때에는 `[]`를 통하여 복수의 데이터를 콤마(`,`)로 구분하여 작성을 하시면 됩니다.

```javascript
let names = ["이호진", "jiny", "hojin"];
```

또는 객체를 생성하는 방법으로도 만들 수 있습니다.

```javascript
let names = new Array(["이호진", "jiny", "hojin"]);
```

`new`는 객체의 인스턴스를 생성하는 키워드 입니다. Array 객체의 인스턴스를 생성하는 것입니다.
배열의 값은 인자값으로 전달을 합니다.

## 요소 접근
배열은 복수의 데이터를 저장하고 있습니다. 각 하나의 저장되어 있는 데이터를 `요소`라고 합니다.
배열의 요소에 접근을 할때에는 `[]` 기호를 붙이고, 안에 요소의 번호를 지정합니다.

```javascript
console.log(names[0]);
```
의름의 첫번째 요소를 콘솔에 출력을 합니다.

요소의 순서를 `index`라고 합니다. 인덱스는 `0`부터 시작을 합니다.

## 배열의 장점
배열을 이용하면 많은 `식별자`를 생성하지 않습니다. 한개의 식별자 변수명을 이용하여 복수의 데이터를 처리할 수 있습니다.

또한 반복문등을 통하여 배열로 그룹화된 데이터를 쉽게 처리를 할 수 있습니다.

```javascript
let names = ["이호진", "jiny", "hojin"];

for(var i=0; i<names.length; i++) {
    console.log(names[i]);
}
```

for 반복문을 이용하여 배열의 각 요소들을 콘솔에 출력합니다.
`배열명.length` 프로퍼티는 배열의 요소의 갯수를 가지고 있습니다.

반복문의 조건이 `<`로 되어 있습니다. index는 0부터 시작하기 때문에 `배열명.length` 크기보다 `-1`작게 됩니다.
따라서 `<=`가 아닌 마지막 크기의 값이 포함되지 않는 `<`로 하는 것입니다.

실행결과
```
$ node array_03.js
이호진
jiny
hojin
```




```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```
