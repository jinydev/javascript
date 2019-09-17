# 리턴
함수의 리턴은 처리한 결과를 출력하는 값입니다. 하나의 값만 출력을 할 수 있습니다.
출력시 타입을 지정하여 출력을 할 수 있습니다.

## 반환값
함수는 내부의 코드를 실행후에 반환값을 전달 할 수 있습니다.


### return
`return` 키워드는 함수의 종료와 이후 지정된 리터럴 값을 반환합니다.

```javascript
// 함수를 선언합니다.
function greeting()
{
    return "안녕하세요";
}

// 함수를 실행합니다.
let message = greeting();
console.log(message);
```

반한값은 1개만 존재합니다. 여러개의 반환값이 있을경우, 배열 또는 객체를 반환하면 됩니다.

실행결과
```
$ node return_01.js
안녕하세요
```

### 함수리턴
함수는 하나의 값을 반환 합니다. 반환값은 매우 다양합니다. 함수를 반환 처리를 할 수도 있습니다.

```javascript
function execute()
{
    function hello()
    {
        console.log("hello world");
    }

    return hello; // 함수를 리턴합니다.
}

const f = execute();
f(); // 반환받은 함수를 호출합니다.
```

실행결과
```
$ node return_02.js
hello world
```