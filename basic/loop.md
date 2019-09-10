# 반복문
반복문은 특정 코드의 영역을 반복하여 수행을 하는 것을 말합니다.

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

중괄호로 묶여진 특정 영역을 반복하여 실행을 합니다.

실행결과
```
$ node for_01.js
0 안녕하세요!
1 안녕하세요!
2 안녕하세요!
3 안녕하세요!
4 안녕하세요!
```

### continue


### break

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


## while
조건이 만족지 않을때 까지 반복을 수행합니다.

```javascript
while (조건) {
    // 코드 실행
}
```

while 반복문은 다른 반복문과 달리 반복 횟수가 정의되어 있지 않습니다.


#### do~while
먼저 한번은 수행을 하고 조건을 검사합니다.

```javascript
do {
   // 코드 실행 
} while (조건)
```
