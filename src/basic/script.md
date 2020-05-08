---
layout: home
title: "javascript"
keyword: "javascript"
description: "javascript를 학습합니다."
---

# 자바스크립트 파일
---
자바스크립트는 html문서와 결합되어 해석 실행이 됩니다.  
하지만, 스크립트가 html 문서에 같이 포함이 되어 있으면 많은 내용과 가독성이 떨어지게 됩니다.

## 파일분리
---
html에 포함되어 있는 자바스크립트 파일을 분리 합니다.

별도의 파일을 생성합니다. 파일명은 `script.js`로 합니다.

```javascript
document.write("hello world");
```

## 외부소스 설정
---
외부의 별도 파일로 분리되어 있는 자바스크립트 소스를 html에 외부 소스 설정으로 변경을 합니다.
외부 소스로 변경을 하기 위해서는 `script` 테그의 소스 속성을 부여합니다.

```html
<script src="파일명"></script>
```

그럼 분리된 `script.js`을 연결합니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Document</title>
    <script src="script.js"></script>
</head>
<body>
    
</body>
</html>
```

이전과 동일하게 출력이 됩니다.
