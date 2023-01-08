---
layout: home
title: "XMLHttpRequest"
keyword: "XMLHttpRequest, ajax, javascript"
description: "자바스크립트의 XMLHttpRequest를 통한 통신방법에 대해서 학습합니다."
---


## upload


```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <style>
        .progress-bar {
            height: 35px;
            width: 250px;
            border: 2px solid darkblue;
        }

        .progress-bar-fill {
            height: 100%;
            width:0%;
            background: lightblue;
            display:flex;
            align-items: center;
            font-weight: bold;
            transition: width 0.25s;
        }

        .progress-bar-text {
            margin-left: 10px;

        }

    </style>
    <div class="progress-bar" id="probressBar">
        <div class="progress-bar-fill">
            <span class="progress-bar-text">0%</span>
        </div>
    </div>

    <form class="form" id="uploadForm" method="post">
        <input type="file" name="inpFile" id="upload">
        <br>
        <input type="submit" value="전송">
    </form>

    <script>
        const uploadForm = document.getElementById("uploadForm");
        const inpFile = document.getElementById("inpFile");
        const progressBarFill = document.querySelector("#probressBar > .progress-bar-fill");
        const progressBarText = progressBarFill.querySelector(".progress-bar-text");

        uploadForm.addEventListener("submit", uploading);

        function uploading(e) {
            e.preventDefault();

            const xhr = new XMLHttpRequest();
            xhr.open("POST", "upload.php");
            xhr.upload.addEventListener("progress", e => {
                console.log(e); // 개발자도구->네트웍->스피드 3G로 조절후 테스트
                const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0 ;
                progressBarFill.style.width = percent.toFixed(2)+"%";
                progressBarText.textContent = percent.toFixed(2)+"%";
            });

            xhr.setRequestHeader("Content-Type","multipart/form-data");
            xhr.send(new FormData(uploadForm));

        }

    </script>
</body>
</html>
```
