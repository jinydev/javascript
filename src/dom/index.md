---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 브라우저, dom
---

## 자바스크립트 로드
### onload
`onload`는 문서의 모든 콘텐츠(images, script, css, etc)가 로드된 후 발생하는 이벤트이다.
다른말로, load 이벤트라고들 한다.

```javascript
window.onload = function() {
//실행될 코드
}
```

* 문서에 포함된 모든 콘텐츠가 로드된 후에 실행되기에 불필요한 로딩시간이 추가될 수 있다.
* 동일한 문서에 오직 onload는 하나만 존재해야 한다.
    - 중복될 경우, 마지막 선언이 실행된다.
    - 외부 라이브러리에서 이미 선언된 경우 이를 찾아 하나로 합치는 과정이 필요하다.
* 외부의 자원(iframe, image, script)을 사용하는 경우에도 해당된다.

`onload` 이벤트는 `<body>` 테그의 요소 속성(attribute)으로 지정하여 실행이 가능하다.

```html
<body onload="실행될 코드">
```
> 속성을 이용하여 사용된 경우, 자바스크립트에서 `window.onload`로 지정된 것은 무시된다.

`onload`속성은 문서의 로드 뿐만 아니라, 객체(Object)가 로드 될때에서 설정이 가능하다.

```javascript
document.getElementById("myFrame").onload = function() {
//실행될 코드
}
```

이벤트를 직접 연결할 수도 있다.

```javascript
window.addEventListener('load', function(){
//실행될 코드
});
```

### DOMContentLoaded
`DOMContentLoaded`는 HTML과 script가 로드된 시점에 발생하는 이벤트이다.

```javascript
window.addEventListener('DOMContentLoaded', function(){
    //실행될 코드
});
```

* onload 이벤트보다 먼저 발생한다. 빠른 실행속도가 필요할때 적합하다.
* IE8 이하에서는 지원하지 않는다.