var star;
for (var i=0; i<5; i++) {
    for (var j=0; j<i; j++){
        star += "*";
    }
    console.log(star); // 화면출력
    star = ""; // 초기화
}