---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 조건 반복문
조건을 이용하여 반복을 수행합니다. 조건을 이용하면 무한반복 수행이 가능합니다.

## while
조건이 만족지 않을때 까지 반복을 수행합니다.

```javascript
while (조건) {
    // 코드 실행
}
```

while 반복문은 다른 반복문과 달리 반복 횟수가 정의되어 있지 않습니다.

### 조건
`while` 문의 경우 조건을 부여 받습니다. 조건을 비교하여 반복의 실행 동작을 구현합니다.



## do~while
먼저 한번은 수행을 하고 조건을 검사합니다.

```javascript
do {
   // 코드 실행 
} while (조건)
```

## 응용
조건을 이용하는 while 반복은 정확한 횟수를 지정하지 못하는 경우에 유용합니다.

* 파일처리

## 무한반복
무한반복을 하기 위해서는 언제나 조건이 `참`이어야 합니다.


### for 무한반복

```javascript
for (;;) {
    // 무한반복
}
```

