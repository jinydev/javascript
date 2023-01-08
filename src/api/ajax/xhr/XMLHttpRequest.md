---
layout: home
title: "XMLHttpRequest"
keyword: "XMLHttpRequest, ajax, javascript"
description: "자바스크립트의 XMLHttpRequest를 통한 통신방법에 대해서 학습합니다."
---

# XMLHttpRequest
---
XMLHttpRequest는 클라이언트 브라우저와 서버간 데이터를 통신하는 객체입니다. 이 객체는 자바스크립트에 의해서 제공하고 주로 API 통신으로 많이 사용합니다.

XMLHttpRequest 객체는 마이크로소프트에서 만들어 졌습니다.


XHR의 동작은 크게 3단계로 구분됩니다.
1. 객체생성
2. request 요청
3. response 수신


## XMLHttpRequest 객체
최근의 웹사이트는 브라우저에서 직접 서버와 테이터 통신을 위해서 XMLHttpRequest 객체를 통하여 통신을 하고 있습니다.

xhr을 사용하면 웹페이지가 서버로 전체 페이지를 다시 다운로드 받지 않고, 필요한 데이터만 주고 받을 수 있습니다.
이로 인하여 페이지의 깜빡임 없이, 웹사이트의 일부 내용만을 변경할 수 있게 되는 것입니다.

### xhr 객체의 생성
과거 xhr은 브라우저별로 생성방식이 조금씩 달랐습니다. ie의 경우 별도의 ActiveX를 설치하여 객체를 생성하였다면,
초신의 브라우져 들은 자바스크립틀 이용하여 xhr 객체를 생성할 수 있습니다.

```js
if(window.ActiveXObject) {
    try {
        // 새로운 ms의 XMLHTTP 객체
        return new ActiveObject("Msxml2.XMLHTTP");
    } catch (e1) {
        try {
            // 이전 버젼의 ms의 XMLHTTP 객체
            return new ActiveObject("Microsoft.XMLHTTP");
        } catch (e2) {
            return null;
        }
    }
} else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
} else {
    return null;
}
```

ie를 제외한 브라우저는 모두 XMLHttpRequest를 제공합니다.
최신 마이크로소프트의 edge 브라우저의 경우 기본적으로 XMLHttpRequest를 제공합니다.

자바스크립트에서 xhr 객체를 다음과 같이 생성할 수 있습니다.

```js
const xhr = new XMLHttpRequest;
```

html의 버튼요소를 클릭할때 동작을 하고자 할 경우에는 이벤트 등록을 한후에 xhr 객체를 생성할 수도 있습니다.

```js
form.addEventListener("submit", e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
});
```

위의 예제는 폼의 전송버튼을 클릭할때, 기본동작을 제외하고 xhr 통신을 처리하기 위해 객체를 생성하는 과정입니다.

### readyState 프로퍼티
readyState는 XHR의 현재 상태를 나타내는 프로퍼티 입니다.
이 값은 xhr의 동작 상태에 따라서 변화를 하게 됩니다.

* UNSENT (숫자 0) : XMLHttpRequest 객체가 생성됨.
* OPENED (숫자 1) : open() 메소드가 성공적으로 실행됨.
* HEADERS_RECEIVED (숫자 2) : 모든 요청에 대한 응답이 도착함.
* LOADING (숫자 3) : 요청한 데이터를 처리 중임.
* DONE (숫자 4) : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨.

예제코드를 통하여 객체를 생성한 후에, `readyState` 값을 출력해 봅니다.
값이 `0`으로 출력됩니다.
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XHR 테스트</title>
</head>
<body>
    <form id="xhrForm">
        <input type="submit" value="전송">
    </form>
    <script>
        const form = document.getElementById("xhrForm");
        form.addEventListener("submit", e => {
            e.preventDefault();
            console.log("submit 클릭");
            const xhr = new XMLHttpRequest();
            console.log("xhr.readyState = "+xhr.readyState);
        });
    </script>
</body>
</html>
```


