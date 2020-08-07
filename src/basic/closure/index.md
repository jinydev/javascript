---
layout: home
title: "클로저: 자바스크립트 "
keyword: "javascript, closure"
description: "자바스크립트의 클로저에 대해서 알아 봅니다."
---

# 클로저
일반적으로 함수안에 있는 변수는 지역변수 입니다. 함수가 실행되면서 내부의 변수를 생성하고, 함수가 종료가 되면 이를 해제 합니다.

```js
function foo() {
    var a = 1; // 지역변수
    return a;
}

var a = foo();
console.log(a);
```

자바스크립트는 함수 안에 또다른 함수를 생성할 수 도 있습니다.

```js
function func1() {
    var a = 2; // 지역변수
    
    // 반환값으로 한수를 반환
    return function func2() {
        return a;
    } 
}

var f = func1(); // 함수를 반환받아 지정
var a = f();
console.log(a);
```

func1 의 변수 a를 함수 func2에서도 사용을 합니다.
func1의 함수를 종료한 후에 변수 a를 해제하여야 하지만, 반환하는 func2에서 변수 a를 사용하고 있기 때문에
func1은 변수 a를 해제할 수 없게 됩니다.

func1의 변수 a가 해제되기 위해서는 변수 a를 사용하고 있는 func2()가 더이상 참조되지 않고 종료가 되어야
비로소 func1()의 역할을 마무리할 수 있게 됩니다.

즉 func2는 func1을 cloase 시킬수 있는 함수가 됩니다. 이를 `클로저`라고 합니다.

클로저로 인하여 함수가 정상적으로 종료하지 못하고, 자원이 계속 유지하게 됩니다.
이러한 자원의 유지는 잘 알고 유지하여 사용을 해야 합니다.




