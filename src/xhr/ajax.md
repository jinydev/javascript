---
layout: home
title: "XMLHttpRequest"
keyword: "XMLHttpRequest, ajax, javascript"
description: "자바스크립트의 XMLHttpRequest를 통한 통신방법에 대해서 학습합니다."
---

# AJAX
기본적으로 웹사이트의 내용을 서버에서 통체로 전달을 합니다.

ajax는 asynchronous javascript and XML의 약자 입니다.

페이지이동
기존의 웹사이트는 서버에서 페이지를 읽어서 처리 합니다. 페이지의 이동하면서 서버에서 해당 페이지를 받습니다.
브라우저는 전송받은 html 문서를 분석하여 브라우저에 그려주게 됩니다.

ajax는 마이크로소프트에서 처음으로 만들었지만, 구글에서 이 기술을 적극 사용하면서 대중에게 인기를 얻기 시작되었습니다.
기존에는 비동기 통신을 하기 위해서 activeX를 별도로 설치를 해야 하지만, 최근의 브라우저에서는 기본적으로 제공됩니다.
또한 자바스크립트를 이용하여 쉽게 구현할 수 있습니다.


ajax는 사용자에거 즉각적인 페이지의 정보를 처리하여 보여줄 수 있는 장점을 제공합니다.



## ajax의 구성요소
브라우저와 서버간의 ajax 통신은 3가지의 구성요소를 가지고 있습니다.
1. 유저 이벤트 : 자바스크립트로 구현합니다.
2. 데이터 교환 : xhr 객체를 통하여 서버와 통신을 합니다.
3. 문서의 정보 / UID 구성



서버에서 웹페이지를 전송받게 되면, 전체의 내용을 브라우저가 다시 그리는 동작을 수행합니다.
이때, 서버 지연시간과 클라이언트에서 dom을 다시 처리하여 그리는 동작으로 깜빡임이 발생합니다.

하지만xhr 기술을 응용하여 클라이언트에서 서버의 직접 통신을 하여 웹페이지의 일부분만을 다시 받아 그릴 수 있습니다.
이를 비동기 적으로 수행하면 깜빡임 없이 페이지의 내용을 변경할 수 있습니다.


ajax는 xhr 객체를 통하여 데이터를 정보교환 기법이다.

```js
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200 || xhr.status === 201) {
                console.log(xhr.responseText);
            } else {
                console.error(xhr.responseText);
            }
        }
    };
    xhr.open('GET', 'http://localhost:3000/single-json');
    xhr.send();
```


## 정지
xhr의 동작을 멈춘다.

```js
xhr.abort();
```

## body 내용 삽입
ajax 통신을 할때 body에 json 데이터를 실어서 전송을 합니다.
json 데이터를 전송하기 위해서는 http의 해더 정보를 설정해 주어야 합니다.

해더 설정은 `setRequestHeader`으로 할 수 있다.


```js
xhr.setRequestHeader("Content-Type","multipart/form-data");
```