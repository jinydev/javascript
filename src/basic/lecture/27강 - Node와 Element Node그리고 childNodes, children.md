---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

https://www.youtube.com/watch?v=pNqlLVEvnQo&list=PLq8wAnVUcTFWhQrIXNN6kPYXJA6X2IQM4&index=27

# 계층적 노드의 선택
브라우저가 html를 로드하게 되면, 각각의 요소들을 객체화 하여 계층적 구조를 만들게 됩니다.
그리고 각각의 객체를 `노드`라고 합니다.



## 자식 노드

```js
var regist = docuemnt.querySelector("#register");
var inputs = regist.querySelector(".userinfo");

var email = inputs.childNodes[0];
var birth = inputs.childNodes[1];

email.value = "이메일 입력"; // 출력이 될수도 있고, 안될 수도 있음
birth.vlaue = "생일 입력"; // 
```

childNodes 는 빈 문자열로 노트로 인식됨.

노드는 주석, 화이트 스페이스(공백), 텍스트 모두 노드입니다.

```html
<div class="userinfo">
    <input>
    <input>
</div>
```
위와 같이 작성을 할 경우 input 테그 앞에 있는 `화이트 스페이스`도 노드로 인식을 합니다.



## 자식 엘리먼드 
children

```js
var regist = docuemnt.querySelector("#register");
var inputs = regist.querySelector(".userinfo");

var email = inputs.children[0];
var birth = inputs.children[1];

email.value = "이메일 입력"; // 출력이 될수도 있고, 안될 수도 있음
birth.vlaue = "생일 입력"; // 
```

### childNodes vs children
childNodes 는 모든 객체의 노드에 대해서 처리를 합니다. 반면에 children은 테그 요소로만 이루어 지는 객체를 선택합니다.



