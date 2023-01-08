---
layout: home

title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 문자열 처리하기
자바스크립트의 문자열을 다룰수 있는 다양한 함수들에 대해서 알아 보도록 합니다.

## 문자열 마지막 글자 제거하기
자르기 함수를 이용하여 문자열의 마지막 글자를 제거합니다.

```javascript
let str="hello world!.";
console.log(str.slice(0,-1));
```

`slice()`함수를 이용하여 문자열 자르기를 합니다. `-1`을 입력하면 뒤에서 부터 한글자를 잘라 내게 됩니다.


