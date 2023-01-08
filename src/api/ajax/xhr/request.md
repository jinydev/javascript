---
layout: home
title: "XMLHttpRequest"
keyword: "XMLHttpRequest, ajax, javascript"
description: "자바스크립트의 XMLHttpRequest를 통한 통신방법에 대해서 학습합니다."
---

# XMLHttp Request
생성된 xhr를 이용하여 서버로 요청을 전송합니다.


## open
생성된 xhr 객체를 통하여 통신을 원하는 주소를 선택합니다.
```js
xhr.open("POST", "http://localhost:8000/upload.php");
```

### GET

```js
httpRequest.open("GET","/test.jsp?id=neloi&pw=1234",true);
```

### POST


### PUT


### DELETE




## 서버에 실제 요청을 전송
`send()` 메서드는 준비한 xhr 객체를 통하여 실제 서버에 요청을 전송합니다.

만일, GET방식으로 요구한 경우 파라미터가 없다면 인자 값에 null을 주어야 합니다.

```js
httpRequest = getXMLHttpRequest();
httpRequest.open("GET","/test.jsp?id=neloi&pw=1234",true);
httpRequest.send(null);
```


POST방식으로 요구한 경우 서버로 보내고 싶은 어떠한 데이터라도 가능하다. 
다만 데이터는 서버에서 쉽게 parse할 수 있는 형식(format)이어야 하거나 JSON, SOAP 등과 같은 다른 형식으로도 가능하다.
 * 아래는 GET방식과 POST방식에 대한 예제코드이다.

```js
httpRequest = getXMLHttpRequest(); 
httpRequest.open("POST","/test.jsp",true); 
httpRequest.send("id=neloi&pw=1234");


### status 프로퍼티
status 프로퍼티는 서버의 문서 상태를 나타냅니다.
 - 200 : 서버에 문서가 존재함.
 - 404 : 서버에 문서가 존재하지 않음.


## responseText 프로퍼티
`responseText` 프로퍼티는 서버에 요청하여 응답으로 받은 데이터를 문자열로 저장하고 있습니다.

```js
document.getElementById("text").innerHTML = xhr.responseText;
```

## responseXML 프로퍼티
`responseXML` 프로퍼티는 서버에 요청하여 응답으로 받은 데이터를 XML `DOM 객체`로 저장하고 있습니다.

```js
xmlObj = xmlHttp.responseXML; // 요청한 데이터를 XML DOM 객체로 반환함.
nameList = xmlObj.getElementsByTagName("name"); // XML DOM 객체에서 요소이름이 "name"인 요소들을 선택함.

result = "";
for (idx = 0; idx < nameList.length; idx++) {
    // id가 "name"인 요소들의 텍스트 노드를 찾아 그 값을 반환함.
    result += nameList[idx].childNodes[0].nodeValue + "<br>";
}

document.getElementById("text").innerHTML = result;
```

## 비동기식(asynchronous) 요청
서버에 비동기식 요청을 보내기 위해서는 `open() 메소드`의 세 번째 인수로 `true`를 전달하면 됩니다.

이렇게 비동기식으로 요청을 보내면 자바스크립트는 서버로부터 `응답을 기다리면서` 동시에 `다른 일`을 할 수 있게 됩니다.

```js
xmlHttp.open("GET", "/media/programming_languages.xml", true);
```


# 웹서버에 요청하기
xhr를 통하여 서버에 데이터를 요청하기 위해서는 두단계의 동작이 필요합니다.
먼저 open 과 send 입니다.

## open
open() 메서드를 이요하여 쵸엉을 초기화 하빈다. 초기화시 http의 메서드를 같이 설정할 수 있습니다.

* 첫번째 인자로 GET / POST와 같은 값을 지정합니다.
* 두번째 인자로 접속할 url을 설정합니다.
url을 입력할 때에는 동일한 도메인 주소를 가지는 경로를 입력해야 합니다.
* 세번째는 동시/비동기를 선택합니다.

```js
xhr.open("POST", "http://localhost:8000/upload.php");
```


```

# 응답처리
xhr로 요청을 전송하였다면, 응답을 받게 됩니다.

xhr 객체가 서버로 부터 응답을 받게 되면 `readyState` 프로퍼티값이 변경하게 됩니다. 
값이 변경될때 동작을 할 수 있도록 onreadystatechange 프로퍼티에 함수를 등록합니다.


```js
httpRequest.onreadystatechange = callbackFunction;
function callbackFunction(){ 
    //서버로부터 응답이 왔으므로 알맞은 작업을 수행 
}
```

버로부터 응답이 도착하면 콜백 함수가 호출된다고 했었는데, 
실제 콜백 함수가 호출되는 시점은 readyState라는 프로퍼티의 값이 변경될 때마다 호출된다.

값 / 의미 / 설명
0 / UNINITIALIZED / 객체만 생성되고 아직 초기화되지 않은 상태, open() 메서드가 호출되지 않았음
1 / LOADING / open() 메서드가 호출되고 아직 send() 메서드가 호출되지 않은 상태
2 / LOADED / send() 메서드가 호출되었지만 STATUS와 헤더는 도착하지 않은 상태
3 / INTERACTIVE / 데이터의 일부를 받은 상태
4 / COMPLETED / 데이터를 전부 받은 상태

* 보통은 readyState 값이 4인 경우만 원하는 기능을 수행하지만 가끔 시간이 걸릴 경우 아래 예제코드와 같이 나머지 값을 유용하게 사용할 수 있다.

```js
function callbackFunction(){
      if(httpRequest.readyState == 1  ||  httpRequest.readyState == 2
       || httpRequest.readyState ==3 ){
                       //화면에 작업 중 메시지 출력
      }else if(httpRequest.readyState == 4){
           if(httpRequest.status == 200){
                   //서버 응답 결과에 따라 알맞은 작업 처리
           }else{
               alert("문제 발생:" + httpRequest.status);
           }
      }
}
```

## readyState 값이 4인 경우
서버로 부터 응답을 전부 수신받은 경우 상태코드를 확인 할 수 있습니다.
전달받은 상태값은 status 프로퍼티에 저장이 됩니다.

200 / OK / 요청 성공
403 / Forbidden / 접근 거부
404 / Not Found / 페이지 없음
500 / Internal Server Error / 서버 오류


### 응답 데이터 사용

#### responseText

서버 응답에 따른 확인사항 처리 후(readyState == 4 && status == 200) 이상이 없다면, 이제 서버가 전송한 데이터를 사용해야 한다.
* 단순 텍스트 형식(format)에 대한 데이터 처리를 해보겠다.
서버가 생성한 단순 응답 텍스트를 참조하려면 responseText 프로퍼티를 사용하면 된다.
* 아래 예제코드 참고(서버의 응답 텍스트를 alert로 출력해 주는 예제)

```js
if (httpRequest.readyState == 4) { if (httpRequest.status == 200) { alert(httpRequest.responseText); } else { alert("실패: "+httpRequest.status); } }

출처: https://myeonguni.tistory.com/1526 [명우니닷컴]
```


