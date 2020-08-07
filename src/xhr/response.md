---
layout: home
title: "XMLHttpRequest"
keyword: "XMLHttpRequest, ajax, javascript"
description: "자바스크립트의 XMLHttpRequest를 통한 통신방법에 대해서 학습합니다."
---

# 응답 처리하기
xhr을 통하여 서버로 요청을 전송하였다면, 응답을 처리 합니다.

## 상태변경

실제 동작은 4 일때 처리 합니다.
1,2,3 일때는 xhr의 동작 상태를 알려주는 용도로 사요할 수 있습니다.
이를 통하여 진행중임을 표시합니다.

상태3은 오페라, 파이어폭스, ie별로 다르게 동작합니다. <= 크로스 브라우저 적절한 동작 수행을 하기 어렵다.


## 콜백

상태가 변경하게 되면 onreadystatechange 프로퍼티에 저장된 함수를 콜백합니다.


이 콜백함수는 xhr의 서버응답 뿐만 아니라 opne() 이나 send() 메소드를 호출한 경우에도 실행됩니다.
이는 xhr `readyStatus` 값이 바꿀때 마다 호출 되기 때문입니다.

## status
statusText 는 status 프로퍼티의 값을 설명하는 텍스트 문장을 저장합니다.


## responseText

