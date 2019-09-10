# 스크립트 위치
html 문서는 크게 `head` 영역과 `body` 영역으로 구분이 됩니다.

## head 영역
html에서 자바스크립트의 기본 위치는 `<head></head>` 테그 안에 선언을 합니다.

브라우저는 html의 문서는 첫줄부터 순차적으로 해석을 시도 합니다. head 테그는 body 테그보다 앞에 위치하고 있습니다.
즉, body 테그가 해석되어 화면에 출력하기 전에 head 테그 안에 있는 자바스크립트 코드가 먼저 실행이 됩니다.

head 영역은 보통 브라우저에서 표시되지 않는 정보들이 들어가 있습니다.

## body 영역
body는 브라우저에 출력되는 요소들이 정의 되는 곳입니다.  

자바스크립트가 body 요소의 일부를 제어를 하려고 할때 아직 브라우저가 해석이 되지 않은 상태에서 먼저 자바스크립트 코드가 실행이 될 수도 있습니다.  

이러한 문제점을 해결하기 위해서 최근에는 자바스크립트 코드를 바디의 종료테그(`</body>`)앞에 작성을 하는 경우가 많습니다.
 
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Document</title>
</head>
<body>
    
    <script>
        document.write("hello world");
    </script>
</body>
</html>
```